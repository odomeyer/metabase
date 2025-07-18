const { H } = cy;
import { SAMPLE_DB_ID } from "e2e/support/cypress_data";
import { SAMPLE_DATABASE } from "e2e/support/cypress_sample_database";
import {
  ADMINISTRATORS_GROUP_ID,
  ALL_USERS_GROUP_ID,
  NOSQL_GROUP_ID,
  ORDERS_DASHBOARD_ID,
  ORDERS_QUESTION_ID,
  READONLY_GROUP_ID,
} from "e2e/support/cypress_sample_instance_data";
const { PRODUCTS_ID } = SAMPLE_DATABASE;

describe("scenarios > admin > settings > API keys", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/api-key/count").as("getKeyCount");
    cy.intercept("GET", "/api/api-key").as("getKeys");
    cy.intercept("POST", "/api/api-key").as("createKey");
    cy.intercept("PUT", "/api/api-key/*").as("updateKey");
    cy.intercept("PUT", "/api/api-key/*/regenerate").as("regenerateKey");
    cy.intercept("DELETE", "/api/api-key/*").as("deleteKey");
    cy.intercept("GET", "/api/permissions/group").as("getGroups");

    H.restore();
    cy.signInAsAdmin();
  });

  it("should show number of API keys on auth card", () => {
    cy.visit("/admin/settings/authentication");

    cy.wait("@getKeyCount");
    cy.findByTestId("api-keys-setting").findByText("API Keys");

    H.createApiKey("Test API Key One", ALL_USERS_GROUP_ID);

    cy.reload();
    cy.wait("@getKeyCount");

    cy.findByTestId("api-keys-setting")
      .findByTestId("card-badge")
      .findByText("1 API Key");

    H.createApiKey("Test API Key Two", ALL_USERS_GROUP_ID);
    H.createApiKey("Test API Key Three", ALL_USERS_GROUP_ID);

    cy.reload();
    cy.wait("@getKeyCount");

    cy.findByTestId("api-keys-setting")
      .findByTestId("card-badge")
      .findByText("3 API Keys");
  });

  it("should list existing API keys", () => {
    H.createApiKey("Test API Key One", ALL_USERS_GROUP_ID);
    H.createApiKey("Test API Key Two", NOSQL_GROUP_ID);
    H.createApiKey("Test API Key Three", READONLY_GROUP_ID);

    visitApiKeySettings();

    cy.findByTestId("api-keys-table").within(() => {
      cy.findByText("Test API Key One");
      cy.findByText("All Users");

      cy.findByText("Test API Key Two");
      cy.findByText("nosql");

      cy.findByText("Test API Key Three");
      cy.findByText("readonly");

      cy.findAllByText(/mb_/); // masked key prefix
      cy.findAllByText("Bobby Tables"); // modifier
    });
  });

  it("should allow creating an API key", () => {
    const name = "New key";
    const group = "Administrators";
    visitApiKeySettings();
    H.tryToCreateApiKeyViaModal({ name, group });
    cy.wait("@getKeys");

    cy.findByLabelText("Copy and save the API key").findByLabelText(
      /the api key/i,
    );

    cy.button("Done").click();
    cy.findByTestId("api-keys-table").findByText(name);
  });

  it("should show an error when a previously used key name is submitted", () => {
    const name = "New key";
    const group = "Administrators";
    visitApiKeySettings();
    H.tryToCreateApiKeyViaModal({ name, group });
    cy.button("Done").click();
    H.tryToCreateApiKeyViaModal({ name, group }).then(({ response }) => {
      expect(response?.statusCode).to.equal(400);
    });

    cy.findByTestId("create-api-key-modal")
      .findAllByRole("alert")
      .contains("An API key with this name already exists.");
  });

  it("should allow deleting an API key", () => {
    H.createApiKey("Test API Key One", ALL_USERS_GROUP_ID);
    visitApiKeySettings();

    cy.findByTestId("api-keys-table")
      .contains("Test API Key One")
      .closest("tr")
      .icon("trash")
      .click();
    H.modal().button("Delete API key").click();

    cy.wait("@deleteKey");
    cy.wait("@getKeys");

    cy.findByTestId("empty-table-warning").findByText("No API keys here yet");
  });

  it("should allow editing an API key", () => {
    H.createApiKey("Development API Key", ALL_USERS_GROUP_ID);
    visitApiKeySettings();

    cy.findByTestId("api-keys-table")
      .should("include.text", "Development API Key")
      .and("include.text", "All Users");

    cy.findByTestId("api-keys-table").icon("pencil").click();

    cy.findByLabelText(/Key name/)
      .clear()
      .type("Different key name");

    cy.findByLabelText(/group/).click();
    cy.findByRole("listbox").findByText("collection").click();

    cy.button("Save").click();
    cy.wait("@updateKey");
    cy.wait("@getKeys");

    cy.findByTestId("api-keys-table")
      .should("not.contain", "Development API Key")
      .contains("Different key name")
      .closest("tr")
      .should("contain", "collection");
  });

  it("should allow regenerating an API key", () => {
    H.createApiKey("Personal API Key", ALL_USERS_GROUP_ID);

    visitApiKeySettings();
    cy.findByTestId("api-keys-table")
      .contains("Personal API Key")
      .closest("tr")
      .icon("pencil")
      .click();
    cy.button("Regenerate API key").click();
    cy.button("Regenerate").click();
    cy.wait("@regenerateKey");
    cy.findByLabelText("The API key").should("include.value", "mb_");

    cy.wait("@getKeys").then(({ response }) => {
      const { created_at, updated_at } = response?.body[0];
      // after regeneration, created_at and updated_at should be different
      // they're too close to check via UI though
      expect(created_at).to.not.equal(updated_at);
    });

    cy.button("Done").click();
    cy.findByTestId("api-keys-table").findByText(/mb_/);
  });

  describe("api key actions", () => {
    it("should allow creating questions and dashboards with an API key", () => {
      H.createApiKey("Test API Key One", ADMINISTRATORS_GROUP_ID).then(
        ({ body }) => {
          const apiKey = body.unmasked_key;
          createQuestionForApiKey(apiKey).then(({ body }) => {
            const questionId = body.id;

            cy.signInAsAdmin();
            H.visitQuestion(questionId);
            cy.findByTestId("qb-header").findByText("Test Question");
            cy.findByTestId("view-footer").findByText("Showing 22 rows");

            cy.findByTestId("qb-header-info-button").click();
            H.sidesheet().within(() => {
              cy.findByRole("tab", { name: "History" }).click();
              cy.findByText("Test API Key One created this.");
            });
          });

          createDashboardForApiKey(apiKey).then(({ body }) => {
            const dashboardId = body.id;

            cy.signInAsAdmin();
            H.visitDashboard(dashboardId);
            cy.findByTestId("dashboard-header").findByText("Test Dashboard");
            cy.findByTestId("dashboard-header").icon("info").click();
            H.sidesheet().within(() => {
              cy.findByRole("tab", { name: "History" }).click();
              cy.findByText("Test API Key One created this.");
            });
          });
        },
      );
    });

    it("should allow editing questions and dashboards with an api key", () => {
      H.createApiKey("Test API Key One", ADMINISTRATORS_GROUP_ID).then(
        ({ body }) => {
          const apiKey = body.unmasked_key;

          editQuestionForApiKey(
            apiKey,
            ORDERS_QUESTION_ID,
            "Edited Question Name",
          ).then(() => {
            cy.signInAsAdmin();
            H.visitQuestion(ORDERS_QUESTION_ID);
            cy.findByTestId("qb-header").findByText("Edited Question Name");
            cy.findByTestId("qb-header-info-button").click();
            H.sidesheet().within(() => {
              cy.findByRole("tab", { name: "History" }).click();
              cy.findByText("You created this.");
              cy.findByText(
                'Test API Key One renamed this Card from "Orders" to "Edited Question Name".',
              );
            });
          });

          editDashboardForApiKey(
            apiKey,
            ORDERS_DASHBOARD_ID,
            "Edited Dashboard Name",
          ).then(() => {
            cy.signInAsAdmin();
            H.visitDashboard(ORDERS_DASHBOARD_ID);
            cy.findByTestId("dashboard-header").findByText(
              "Edited Dashboard Name",
            );
            cy.findByTestId("dashboard-header").icon("info").click();
            H.sidesheet().within(() => {
              cy.findByRole("tab", { name: "History" }).click();
              cy.findByText("You created this.");
              cy.findByText(
                'Test API Key One renamed this Dashboard from "Orders in a dashboard" to "Edited Dashboard Name".',
              );
            });
          });
        },
      );
    });
  });
});

export const visitApiKeySettings = () => {
  cy.visit("/admin/settings/authentication/api-keys");
  cy.wait("@getKeys");
  cy.findByTestId("api-keys-settings-header");
};

const createQuestionForApiKey = (apiKey: string) => {
  cy.signOut();

  return cy.request({
    method: "POST",
    url: "/api/card",
    headers: {
      "X-Api-Key": apiKey,
    },
    body: {
      name: "Test Question",
      display: "table",
      visualization_settings: {},
      dataset_query: {
        database: SAMPLE_DB_ID,
        type: "query",
        query: {
          "source-table": PRODUCTS_ID,
          limit: 22,
        },
      },
    },
  });
};

const createDashboardForApiKey = (apiKey: string) => {
  cy.signOut();

  return cy.request({
    method: "POST",
    url: "/api/dashboard",
    headers: {
      "X-Api-Key": apiKey,
    },
    body: {
      name: "Test Dashboard",
    },
  });
};

const editQuestionForApiKey = (
  apiKey: string,
  questionId: number,
  newQuestionName: string,
) => {
  cy.signOut();
  return cy
    .request({
      method: "GET",
      url: `/api/card/${questionId}`,
      headers: {
        "X-Api-Key": apiKey,
      },
    })
    .then(({ body: previousBody }) => {
      return cy.request({
        method: "PUT",
        url: `/api/card/${questionId}`,
        headers: {
          "X-Api-Key": apiKey,
        },
        body: {
          ...previousBody,
          name: newQuestionName,
        },
      });
    });
};

const editDashboardForApiKey = (
  apiKey: string,
  dashboardId: number,
  newDashboardName: string,
) => {
  cy.signOut();
  return cy
    .request({
      method: "GET",
      url: `/api/dashboard/${dashboardId}`,
      headers: {
        "X-Api-Key": apiKey,
      },
    })
    .then(({ body: previousBody }) => {
      return cy.request({
        method: "PUT",
        url: `/api/dashboard/${dashboardId}`,
        headers: {
          "X-Api-Key": apiKey,
        },
        body: {
          ...previousBody,
          name: newDashboardName,
        },
      });
    });
};
