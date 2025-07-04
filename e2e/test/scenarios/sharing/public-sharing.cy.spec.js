const { H } = cy;
import { SAMPLE_DB_ID } from "e2e/support/cypress_data";
import { SAMPLE_DATABASE } from "e2e/support/cypress_sample_database";

const { ORDERS_ID } = SAMPLE_DATABASE;

const DEFAULT_ACTION_DETAILS = {
  database_id: SAMPLE_DB_ID,
  dataset_query: {
    database: SAMPLE_DB_ID,
    native: {
      query: "UPDATE orders SET quantity = 0 WHERE id = {{order_id}}",
      "template-tags": {
        order_id: {
          "display-name": "Order ID",
          id: "fake-uuid",
          name: "order_id",
          type: "text",
        },
      },
    },
    type: "native",
  },
  name: "Reset order quantity",
  description: "Set order quantity to 0",
  type: "query",
  parameters: [
    {
      id: "fake-uuid",
      hasVariableTemplateTagTarget: true,
      name: "Order ID",
      slug: "order_id",
      type: "string/=",
      target: ["variable", ["template-tag", "fake-uuid"]],
    },
  ],
  visualization_settings: {
    fields: {
      "fake-uuid": {
        id: "fake-uuid",
        fieldType: "string",
        inputType: "string",
        hidden: false,
        order: 999,
        required: true,
        name: "",
        title: "",
        placeholder: "",
        description: "",
      },
    },
    type: "button",
  },
};

describe("scenarios > admin > settings > public sharing", () => {
  beforeEach(() => {
    H.restore();
    cy.signInAsAdmin();
    cy.intercept("GET", "/api/action/public").as("getPublicActions");
    cy.intercept("GET", "/api/dashboard/public").as("getPublicDashboards");
    cy.intercept("GET", "/api/card/public").as("getPublicQuestions");
  });

  it("should be able to toggle public sharing", () => {
    cy.visit("/admin/settings/public-sharing");
    cy.findByTestId("enable-public-sharing-setting").within(() => {
      cy.findByText("Enabled").should("be.visible");
      cy.findByText("Enabled").click();
      cy.findByText("Disabled").should("be.visible");
    });
  });

  it("should see public dashboards", () => {
    const expectedDashboardName = "Public dashboard";
    const expectedDashboardSlug = "public-dashboard";
    H.createQuestionAndDashboard({
      dashboardDetails: {
        name: expectedDashboardName,
      },
      questionDetails: {
        name: "Question",
        query: {
          "source-table": ORDERS_ID,
        },
      },
    })
      .then(({ body }) => {
        const dashboardId = body.dashboard_id;
        cy.wrap(dashboardId).as("dashboardId");
        cy.request("POST", `/api/dashboard/${dashboardId}/public_link`, {});
      })
      .then((response) => {
        cy.wrap(response.body.uuid).as("dashboardUuid");
      });

    cy.get("@dashboardId").then((dashboardId) =>
      H.visitDashboardAndCreateTab({ dashboardId }),
    );

    cy.visit("/admin/settings/public-sharing");
    cy.wait([
      "@getPublicActions",
      "@getPublicQuestions",
      "@getPublicDashboards",
    ]);

    cy.findByTestId("admin-layout-content")
      .findByText("Shared dashboards")
      .should("be.visible");
    cy.findByTestId("admin-layout-content")
      .findByText(expectedDashboardName)
      .should("be.visible");
    cy.get("@dashboardUuid").then((dashboardUuid) => {
      cy.findByText(
        `${location.origin}/public/dashboard/${dashboardUuid}`,
      ).click();
      cy.findByRole("heading", { name: expectedDashboardName }).should(
        "be.visible",
      );
      cy.findByRole("tab", { name: "Tab 1" }).should("be.visible");
      cy.visit("/admin/settings/public-sharing");
    });

    cy.get("@dashboardId").then((dashboardId) => {
      cy.findByText(expectedDashboardName).click();
      cy.log(
        "Sometimes the URL will be updated with the tab ID, so we need to account for that",
      );
      cy.url().should(
        "match",
        new RegExp(
          `${location.origin}/dashboard/${dashboardId}-${expectedDashboardSlug}*`,
        ),
      );
      cy.visit("/admin/settings/public-sharing");
    });

    cy.button("Revoke link").click();
    H.modal().within(() => {
      cy.findByText("Disable this link?").should("be.visible");
      cy.button("Yes").click();
    });
    cy.findByTestId("admin-layout-content")
      .findByText("No dashboards have been publicly shared yet.")
      .should("be.visible");
  });

  it("should see public questions", () => {
    const expectedQuestionName = "Public question";
    const expectedQuestionSlug = "public-question";
    H.createQuestion({
      name: expectedQuestionName,
      query: {
        "source-table": ORDERS_ID,
      },
    })
      .then(({ body }) => {
        const questionId = body.id;
        cy.wrap(questionId).as("questionId");
        cy.request("POST", `/api/card/${questionId}/public_link`, {});
      })
      .then((response) => {
        cy.wrap(response.body.uuid).as("questionUuid");
      });

    cy.visit("/admin/settings/public-sharing");
    cy.wait([
      "@getPublicActions",
      "@getPublicQuestions",
      "@getPublicDashboards",
    ]);

    cy.findByTestId("admin-layout-content")
      .findByText("Shared questions")
      .should("be.visible");
    cy.findByTestId("admin-layout-content")
      .findByText(expectedQuestionName)
      .should("be.visible");
    cy.get("@questionUuid").then((questionUuid) => {
      cy.findByText(
        `${location.origin}/public/question/${questionUuid}`,
      ).click();
      cy.findByRole("heading", { name: expectedQuestionName }).should(
        "be.visible",
      );
      cy.visit("/admin/settings/public-sharing");
    });

    cy.get("@questionId").then((questionId) => {
      cy.findByText(expectedQuestionName).click();
      cy.url().should(
        "eq",
        `${location.origin}/question/${questionId}-${expectedQuestionSlug}`,
      );
      cy.visit("/admin/settings/public-sharing");
    });

    cy.button("Revoke link").click();
    H.modal().within(() => {
      cy.findByText("Disable this link?").should("be.visible");
      cy.button("Yes").click();
    });
    cy.findByTestId("admin-layout-content")
      .findByText("No questions have been publicly shared yet.")
      .should("be.visible");
  });

  it("should see public actions", () => {
    H.setActionsEnabledForDB(SAMPLE_DB_ID);
    const expectedActionName = "Public action";

    H.createQuestion({
      name: "Model",
      query: {
        "source-table": ORDERS_ID,
      },
      type: "model",
    }).then(({ body }) => {
      const modelId = body.id;
      cy.wrap(modelId).as("modelId");
    });

    cy.get("@modelId").then((modelId) => {
      H.createAction({
        ...DEFAULT_ACTION_DETAILS,
        name: expectedActionName,
        model_id: modelId,
      }).then(({ body }) => {
        const actionId = body.id;
        cy.wrap(actionId).as("actionId");
      });
    });

    cy.get("@actionId")
      .then((actionId) => {
        cy.request("POST", `/api/action/${actionId}/public_link`, {});
      })
      .then(({ body }) => {
        cy.wrap(body.uuid).as("actionUuid");
      });

    cy.visit("/admin/settings/public-sharing");
    cy.wait([
      "@getPublicActions",
      "@getPublicQuestions",
      "@getPublicDashboards",
    ]);

    cy.findByTestId("admin-layout-content")
      .findByText("Shared action forms")
      .scrollIntoView()
      .should("be.visible");
    cy.findByTestId("admin-layout-content")
      .findByText(expectedActionName)
      .scrollIntoView()
      .should("be.visible");
    cy.get("@actionUuid").then((actionUuid) => {
      cy.findByText(`${location.origin}/public/action/${actionUuid}`).click();
      cy.findByRole("heading", { name: expectedActionName }).should(
        "be.visible",
      );
      cy.visit("/admin/settings/public-sharing");
    });

    cy.then(function () {
      cy.findByText(expectedActionName).click();
      cy.url().should(
        "eq",
        `${location.origin}/model/${this.modelId}/detail/actions/${this.actionId}`,
      );
      cy.findByRole("dialog").within(() => {
        cy.findByText(expectedActionName).should("be.visible");
      });
      cy.visit("/admin/settings/public-sharing");
    });

    cy.button("Revoke link").click();
    H.modal().within(() => {
      cy.findByText("Disable this link?").should("be.visible");
      cy.button("Yes").click();
    });
    cy.findByTestId("admin-layout-content")
      .findByText("No actions have been publicly shared yet.")
      .should("be.visible");
  });
});
