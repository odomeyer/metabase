const { H } = cy;
import {
  SAMPLE_DB_ID,
  SAMPLE_DB_SCHEMA_ID,
  WRITABLE_DB_ID,
} from "e2e/support/cypress_data";
import { SAMPLE_DATABASE } from "e2e/support/cypress_sample_database";
import { ORDERS_QUESTION_ID } from "e2e/support/cypress_sample_instance_data";

const { ORDERS, ORDERS_ID, PRODUCTS, REVIEWS, REVIEWS_ID, PRODUCTS_ID } =
  SAMPLE_DATABASE;

describe("scenarios > admin > datamodel > field > field type", () => {
  const ordersColumns = ["PRODUCT_ID", "QUANTITY"];

  function waitAndAssertOnResponse(alias) {
    cy.wait("@" + alias).then((xhr) => {
      expect(xhr.response.body.errors).to.not.exist;
    });
  }

  function getFieldType() {
    return cy.findByPlaceholderText("Select a semantic type");
  }

  function setFieldType({ oldValue, newValue } = {}) {
    getFieldType().should("have.value", oldValue).click();

    H.popover().within(() => {
      cy.findByText(newValue).click();
    });
  }

  function checkNoFieldType({ oldValue, newValue } = {}) {
    getFieldType().should("have.value", oldValue).click();

    H.popover().within(() => {
      cy.findByText(newValue).should("not.exist");
    });
  }

  function setFKTargetField(field) {
    cy.findByPlaceholderText("Select a target").click();

    H.popover().contains(field).click();
  }

  beforeEach(() => {
    cy.intercept("GET", "/api/table/*/query_metadata*").as("metadata");

    H.restore();
    cy.signInAsAdmin();

    ordersColumns.forEach((column) => {
      cy.wrap(
        `/admin/datamodel/database/${SAMPLE_DB_ID}/schema/${SAMPLE_DB_SCHEMA_ID}/table/${ORDERS_ID}/field/${ORDERS[column]}/general`,
      ).as(`ORDERS_${column}_URL`);
    });

    cy.intercept("PUT", "/api/field/*").as("fieldUpdate");
  });

  it("should let you change the type to 'No semantic type'", () => {
    H.visitAlias("@ORDERS_PRODUCT_ID_URL");
    cy.wait(["@metadata", "@metadata"]);

    setFieldType({ oldValue: "Foreign Key", newValue: "No semantic type" });

    waitAndAssertOnResponse("fieldUpdate");

    cy.reload();
    cy.wait("@metadata");

    getFieldType().should("have.value", "No semantic type");
  });

  it("should let you change the type to 'Foreign Key' and choose the target field", () => {
    H.visitAlias("@ORDERS_QUANTITY_URL");
    cy.wait("@metadata");

    setFieldType({ oldValue: "Quantity", newValue: "Foreign Key" });

    waitAndAssertOnResponse("fieldUpdate");

    setFKTargetField("Products → ID");

    waitAndAssertOnResponse("fieldUpdate");

    cy.reload();
    cy.wait(["@metadata", "@metadata"]);

    getFieldType("Foreign Key");
    cy.findByTestId("fk-target-select").should("have.value", "Products → ID");
  });

  it("should correctly filter out options in Foreign Key picker (metabase#56839)", () => {
    H.visitAlias("@ORDERS_PRODUCT_ID_URL");
    cy.wait("@metadata");

    cy.findByPlaceholderText("Select a target").clear();
    H.popover()
      .should("contain.text", "Orders → ID")
      .and("contain.text", "People → ID")
      .and("contain.text", "Products → ID")
      .and("contain.text", "Reviews → ID");

    cy.log("should case-insensitive match field display name");
    cy.findByPlaceholderText("Select a target").type("id");
    H.popover()
      .should("contain.text", "Orders → ID")
      .and("contain.text", "People → ID")
      .and("contain.text", "Products → ID")
      .and("contain.text", "Reviews → ID");

    cy.log("should case-insensitive match field description");
    cy.findByPlaceholderText("Select a target").clear().type("EXT");
    H.popover()
      .should("not.contain.text", "Orders → ID")
      .and("not.contain.text", "People → ID")
      .and("contain.text", "Products → ID")
      .and("contain.text", "Reviews → ID");
  });

  it("should not let you change the type to 'Number' (metabase#16781)", () => {
    H.visitAlias("@ORDERS_PRODUCT_ID_URL");
    cy.wait(["@metadata", "@metadata"]);

    checkNoFieldType({ oldValue: "Foreign Key", newValue: "Number" });
  });
});

describe("scenarios > admin > datamodel > field", () => {
  beforeEach(() => {
    H.restore();
    cy.signInAsAdmin();

    ["CREATED_AT", "PRODUCT_ID", "QUANTITY"].forEach((name) => {
      cy.wrap(
        `/admin/datamodel/database/${SAMPLE_DB_ID}/schema/${SAMPLE_DB_SCHEMA_ID}/table/${ORDERS_ID}/field/${ORDERS[name]}/general`,
      ).as(`ORDERS_${name}_URL`);
    });

    cy.intercept("PUT", "/api/field/*").as("fieldUpdate");
    cy.intercept("POST", "/api/field/*/dimension").as("fieldDimensionUpdate");
  });

  describe("Name and Description", () => {
    before(H.restore);

    it("lets you change field name and description", () => {
      H.visitAlias("@ORDERS_CREATED_AT_URL");

      cy.get('input[name="display_name"]').as("display_name");
      cy.get('input[name="description"]').as("description");

      // update the name
      cy.get("@display_name")
        .should("have.value", "Created At")
        .clear()
        .type("new display_name")
        .blur();
      cy.wait("@fieldUpdate");

      // update the description
      cy.get("@description")
        .should("have.value", "The date and time an order was submitted.")
        .clear()
        .type("new description")
        .blur();
      cy.wait("@fieldUpdate");

      // reload and verify they have been updated
      cy.reload();
      cy.get("@display_name").should("have.value", "new display_name");
      cy.get("@description").should("have.value", "new description");
    });
  });

  describe("Formatting", () => {
    it("should allow you to change field formatting", () => {
      H.visitAlias("@ORDERS_QUANTITY_URL");
      cy.findByRole("link", { name: "Formatting" }).click();
      cy.findByLabelText("Style").click();
      H.popover().findByText("Percent").click();
      cy.wait("@fieldUpdate");
      cy.findByRole("list", { name: "undo-list" })
        .findByText("Updated Quantity")
        .should("exist");
    });
  });

  describe("Visibility", () => {
    before(H.restore);

    it("lets you change field visibility", () => {
      H.visitAlias("@ORDERS_CREATED_AT_URL");

      cy.findByDisplayValue("Everywhere").click();
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.contains("Do not include").click({ force: true });
      cy.wait("@fieldUpdate");

      cy.reload();
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.contains("Do not include");
    });
  });

  describe("Filtering on this field", () => {
    before(H.restore);

    it("lets you change to 'Search box'", () => {
      H.visitAlias("@ORDERS_QUANTITY_URL");

      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.contains("A list of all values").click();
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.contains("Search box").click();
      cy.wait("@fieldUpdate");

      cy.reload();
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.contains("Search box");
    });
  });

  describe("Display Values", () => {
    before(H.restore);

    it("lets you change to 'Use foreign key' and change the target for field with fk", () => {
      H.visitAlias("@ORDERS_PRODUCT_ID_URL");

      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.contains("Use original value").click();
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.contains("Use foreign key").click();
      H.popover().findByText("Title").click();
      cy.wait("@fieldDimensionUpdate");

      cy.reload();
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.contains("Use foreign key");
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.contains("Title");
    });

    it("allows 'Custom mapping' null values", () => {
      cy.intercept("POST", "/api/field/*/values").as("updateFieldValues");

      const dbId = 2;
      const remappedNullValue = "nothin";

      H.restore("withSqlite");
      cy.signInAsAdmin();

      H.withDatabase(
        dbId,
        ({ NUMBER_WITH_NULLS: { NUM }, NUMBER_WITH_NULLS_ID }) => {
          cy.request("GET", `/api/database/${dbId}/schemas`).then(
            ({ body }) => {
              const [schema] = body;

              cy.visit(
                `/admin/datamodel/database/${dbId}/schema/${dbId}:${schema}/table/${NUMBER_WITH_NULLS_ID}/field/${NUM}/general`,
              );
            },
          );

          cy.log("Change `null` to custom mapping");
          cy.findByRole("heading", { name: "Display values" })
            .closest("section")
            .findByText("Use original value")
            .click();
          H.popover().findByText("Custom mapping").click();

          cy.findAllByPlaceholderText("Enter value")
            .filter("[value='null']")
            .clear()
            .type(remappedNullValue);
          cy.button("Save").click();
          cy.wait("@updateFieldValues");
          cy.findByText(/Saved/).should("be.visible");

          cy.log("Make sure custom mapping appears in QB");
          H.openTable({ database: dbId, table: NUMBER_WITH_NULLS_ID });
          cy.findAllByRole("gridcell").should("contain", remappedNullValue);
        },
      );
    });
  });
});

describe("Unfold JSON", { tags: "@external" }, () => {
  function getUnfoldJsonContent() {
    return cy
      .findByText("Unfold JSON")
      .closest("section")
      .findByTestId("select-button-content");
  }

  beforeEach(() => {
    H.restore("postgres-writable");
    H.resetTestTable({ type: "postgres", table: "many_data_types" });
    cy.signInAsAdmin();
    H.resyncDatabase({ dbId: WRITABLE_DB_ID, tableName: "many_data_types" });
  });

  it("lets you enable/disable 'Unfold JSON' for JSON columns", () => {
    cy.intercept("POST", `/api/database/${WRITABLE_DB_ID}/sync_schema`).as(
      "sync_schema",
    );
    // Go to field settings
    cy.visit(`/admin/datamodel/database/${WRITABLE_DB_ID}`);
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText(/Many Data Types/i).click();

    // Check json is unfolded initially
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText(/json.a/i).should("be.visible");
    cy.findByTestId("column-json").within(() => {
      cy.icon("gear").click();
    });

    getUnfoldJsonContent().findByText(/Yes/i).click();
    H.popover().within(() => {
      cy.findByText(/No/i).click();
    });

    // Check setting has persisted
    cy.reload();
    getUnfoldJsonContent().findByText(/No/i);

    // Sync database
    cy.visit(`/admin/databases/${WRITABLE_DB_ID}`);
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText(/Sync database schema/i).click();
    cy.wait("@sync_schema");
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Sync triggered!");

    // Check json field is not unfolded
    cy.visit(`/admin/datamodel/database/${WRITABLE_DB_ID}`);
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText(/Many Data Types/i).click();
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText(/json.a/i).should("not.exist");
  });
});

describe("scenarios > admin > datamodel > hidden tables (metabase#9759)", () => {
  function hideTable(table) {
    const TABLE_URL = `/admin/datamodel/database/${SAMPLE_DB_ID}/schema/${SAMPLE_DB_SCHEMA_ID}/table/${table}`;

    cy.intercept("PUT", `/api/table/${table}`).as("tableUpdate");

    cy.visit(TABLE_URL);
    cy.contains(/^Hidden$/).click();
    cy.wait("@tableUpdate");
  }

  beforeEach(() => {
    H.restore();
    cy.signInAsAdmin();

    // Toggle the table to be hidden as admin user
    hideTable(ORDERS_ID);
  });

  it("hidden table should not show up in various places in UI", () => {
    // Visit the main page, we shouldn't be able to see the table
    cy.visit(`/browse/databases/${SAMPLE_DB_ID}`);
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.contains("Products");
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.contains("Orders").should("not.exist");

    // It shouldn't show up for a normal user either
    cy.signInAsNormalUser();
    cy.visit(`/browse/databases/${SAMPLE_DB_ID}`);
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.contains("Products");
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.contains("Orders").should("not.exist");

    // It shouldn't show in a new question data picker
    H.startNewQuestion();
    H.entityPickerModal().within(() => {
      H.entityPickerModalTab("Tables").click();
      cy.contains("Products").should("exist");
      cy.contains("Orders").should("not.exist");
    });
  });
});

describe("scenarios > admin > datamodel > metadata", () => {
  function openOptionsForSection(sectionName) {
    cy.findByText(sectionName)
      .closest("section")
      .findByTestId("select-button")
      .click();
  }

  beforeEach(() => {
    H.restore();
    cy.signInAsAdmin();

    cy.intercept("PUT", "/api/field/*").as("fieldUpdate");
    cy.intercept("POST", "/api/field/*/dimension").as("fieldDimensionUpdate");
  });

  it("should remap FK display value from field ", () => {
    cy.wrap(
      `/admin/datamodel/database/${SAMPLE_DB_ID}/schema/${SAMPLE_DB_SCHEMA_ID}/table/${ORDERS_ID}/field/${ORDERS.PRODUCT_ID}/general`,
    ).as("ORDERS_PRODUCT_ID_URL");

    H.visitAlias("@ORDERS_PRODUCT_ID_URL");

    cy.findByPlaceholderText("PRODUCT_ID")
      .clear()
      .type("Remapped Product ID")
      .realPress("Tab");

    cy.wait("@fieldUpdate");

    H.openOrdersTable({ limit: 5 });

    cy.findAllByTestId("header-cell").should("contain", "Remapped Product ID");
  });

  it("should remap FK display value from the table view", () => {
    cy.wrap(
      `/admin/datamodel/database/${SAMPLE_DB_ID}/schema/${SAMPLE_DB_SCHEMA_ID}/table/${ORDERS_ID}`,
    ).as("ORDERS_TABLE_URL");

    H.visitAlias("@ORDERS_TABLE_URL");

    cy.findByDisplayValue("Product ID")
      .clear()
      .type("Remapped Product ID")
      .realPress("Tab");

    cy.wait("@fieldUpdate");

    H.openOrdersTable({ limit: 5 });

    cy.findAllByTestId("header-cell").should("contain", "Remapped Product ID");
  });

  it("should correctly show remapped column value", () => {
    // go directly to Data Model page for Sample Database
    cy.visit(`/admin/datamodel/database/${SAMPLE_DB_ID}`);
    // edit "Product ID" column in "Orders" table
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Orders").click();
    cy.findByTestId("column-PRODUCT_ID").find(".Icon-gear").click();

    // remap its original value to use foreign key
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Use original value").click();
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Use foreign key").click();
    H.popover().within(() => {
      cy.findByText("Title").click();
    });
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText(
      "You might want to update the field name to make sure it still makes sense based on your remapping choices.",
    );

    cy.log("Name of the product should be displayed instead of its ID");
    H.openOrdersTable();
    cy.findAllByText("Awesome Concrete Shoes");
  });

  it("should correctly apply and display custom remapping for numeric values", () => {
    // this test also indirectly reproduces metabase#12771
    const customMap = {
      1: "Awful",
      2: "Unpleasant",
      3: "Meh",
      4: "Enjoyable",
      5: "Perfecto",
    };

    // go directly to Data Model page for Sample Database
    cy.visit(`/admin/datamodel/database/${SAMPLE_DB_ID}`);
    // edit "Rating" values in "Reviews" table
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Reviews").click();
    cy.findByTestId("column-RATING").find(".Icon-gear").click();

    // apply custom remapping for "Rating" values 1-5
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Use original value").click();
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Custom mapping").click();
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText(
      "You might want to update the field name to make sure it still makes sense based on your remapping choices.",
    );

    Object.entries(customMap).forEach(([key, value]) => {
      cy.findByDisplayValue(key).click().clear().type(value);
    });
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Save").click();

    cy.log("Numeric ratings should be remapped to custom strings");
    H.openReviewsTable();
    Object.values(customMap).forEach((rating) => {
      cy.findAllByText(rating);
    });
  });

  it("should not include date when metric is binned by hour of day (metabase#14124)", () => {
    cy.request("PUT", `/api/field/${ORDERS.CREATED_AT}`, {
      semantic_type: null,
    });

    H.createQuestion(
      {
        name: "14124",
        query: {
          "source-table": ORDERS_ID,
          aggregation: [["count"]],
          breakout: [
            ["field", ORDERS.CREATED_AT, { "temporal-unit": "hour-of-day" }],
          ],
        },
      },
      { visitQuestion: true },
    );

    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Created At: Hour of day");

    cy.log("Reported failing in v0.37.2");
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText(/^3:00 AM$/);
  });

  it("should not display multiple 'Created At' fields when they are remapped to PK/FK (metabase#15563)", () => {
    // Remap fields
    cy.request("PUT", `/api/field/${ORDERS.CREATED_AT}`, {
      semantic_type: "type/PK",
    });
    cy.request("PUT", `/api/field/${REVIEWS.CREATED_AT}`, {
      semantic_type: "type/FK",
      fk_target_field_id: ORDERS.CREATED_AT,
    });

    H.openReviewsTable({ mode: "notebook" });
    H.summarize({ mode: "notebook" });
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Count of rows").click();
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Pick a column to group by").click();
    cy.get("[data-element-id=list-section-header]")
      .contains("Created At")
      .click();
    cy.get("[data-element-id=list-section] [data-element-id=list-item-title]")
      .contains("Created At")
      .should("have.length", 1);
  });

  it("should display breakouts group for all FKs (metabase#36122)", () => {
    cy.request("PUT", `/api/field/${REVIEWS.RATING}`, {
      semantic_type: "type/FK",
      fk_target_field_id: PRODUCTS.ID,
    });

    H.openReviewsTable({ mode: "notebook" });
    H.summarize({ mode: "notebook" });
    H.getNotebookStep("summarize")
      .findByText("Pick a column to group by")
      .click();

    H.popover().within(() => {
      cy.findAllByTestId("dimension-list-item")
        .eq(3)
        .should("have.text", "Rating");
      cy.get("[data-element-id=list-section-header]").should("have.length", 3);
      cy.get("[data-element-id=list-section-header]")
        .eq(0)
        .should("have.text", "Reviews");
      cy.get("[data-element-id=list-section-header]")
        .eq(1)
        .should("have.text", "Product");
      cy.get("[data-element-id=list-section-header]")
        .eq(2)
        .should("have.text", "Rating");
    });
  });

  it("semantic picker should not overflow the screen on smaller viewports (metabase#56442)", () => {
    const viewportHeight = 400;

    cy.viewport(1280, viewportHeight);
    cy.visit(`/admin/datamodel/database/${SAMPLE_DB_ID}`);
    cy.findAllByTestId("admin-metadata-table-list-item")
      .contains("Reviews")
      .scrollIntoView()
      .click();
    cy.findByTestId("column-ID")
      .scrollIntoView()
      .findByPlaceholderText("Select a semantic type")
      .click();

    H.popover().scrollTo("top");
    H.popover()
      .findByText("Entity Key")
      .should(($element) => {
        const rect = $element[0].getBoundingClientRect();
        expect(rect.top).greaterThan(0);
      });

    H.popover().scrollTo("bottom");
    H.popover()
      .findByText("No semantic type")
      .should(($element) => {
        const rect = $element[0].getBoundingClientRect();
        expect(rect.bottom).lessThan(viewportHeight);
      });
  });

  it("display value 'custom mapping' should be available regardless of the chosen filtering type (metabase#16322)", () => {
    cy.visit(
      `/admin/datamodel/database/${SAMPLE_DB_ID}/schema/${SAMPLE_DB_SCHEMA_ID}/table/${REVIEWS_ID}/field/${REVIEWS.RATING}/general`,
    );

    openOptionsForSection("Filtering on this field");
    H.popover().findByText("Search box").click();

    openOptionsForSection("Display values");
    H.popover().findByText("Custom mapping").should("not.exist");

    openOptionsForSection("Filtering on this field");
    H.popover().findByText("A list of all values").click();

    openOptionsForSection("Display values");
    H.popover().findByText("Custom mapping");
  });

  it("allows to map FK to date fields (metabase#7108)", () => {
    cy.visit(
      `/admin/datamodel/database/${SAMPLE_DB_ID}/schema/${SAMPLE_DB_SCHEMA_ID}/table/${ORDERS_ID}/field/${ORDERS.USER_ID}/general`,
    );
    openOptionsForSection("Display values");
    H.popover().findByText("Use foreign key").click();
    cy.findAllByTestId("select-button-content")
      .filter(":contains('Name')")
      .click();

    H.popover().within(() => {
      cy.findByText("Birth Date").scrollIntoView().should("be.visible");
      cy.findByText("Created At").scrollIntoView().should("be.visible").click();
    });

    cy.wait("@fieldDimensionUpdate");
    H.visitQuestion(ORDERS_QUESTION_ID);

    cy.findAllByTestId("cell-data")
      .eq(10) // 1st data row, 2nd column (User ID)
      .should("have.text", "2023-10-07T01:34:35.462-07:00");
  });

  describe("column formatting options", () => {
    beforeEach(() => {
      cy.intercept("PUT", "/api/field/*", cy.spy().as("updateFieldSpy")).as(
        "updateField",
      );
      cy.intercept("GET", "/api/field/*").as("getField");
    });

    it("should only show currency formatting options for currency fields", () => {
      cy.visit(
        `/admin/datamodel/database/${SAMPLE_DB_ID}/schema/${SAMPLE_DB_SCHEMA_ID}/table/${ORDERS_ID}/field/${ORDERS.DISCOUNT}/formatting`,
      );

      cy.wait("@getField");

      cy.findByTestId("column-settings").within(() => {
        cy.findByText("Unit of currency");
        cy.findByText("Currency label style");
      });

      cy.visit(
        `/admin/datamodel/database/${SAMPLE_DB_ID}/schema/${SAMPLE_DB_SCHEMA_ID}/table/${ORDERS_ID}/field/${ORDERS.QUANTITY}/formatting`,
      );

      cy.wait("@getField");

      cy.findByTestId("column-settings").within(() => {
        // shouldnt show currency settings by default for quantity field
        cy.findByText("Unit of currency").should("not.be.visible");
        cy.findByText("Currency label style").should("not.be.visible");

        cy.get("#number_style").click();
      });

      // if you change the style to currency, currency settings should appear
      H.popover().findByText("Currency").click();
      cy.wait("@updateField");

      cy.findByTestId("column-settings").within(() => {
        cy.findByText("Unit of currency");
        cy.findByText("Currency label style");
      });
    });

    it("should save and obey field prefix formatting settings", () => {
      cy.visit(
        `/admin/datamodel/database/${SAMPLE_DB_ID}/schema/${SAMPLE_DB_SCHEMA_ID}/table/${ORDERS_ID}/field/${ORDERS.QUANTITY}/formatting`,
      );

      cy.wait("@getField");

      cy.findByTestId("column-settings").within(() => {
        cy.findByTestId("prefix").type("about ").blur();
      });

      cy.wait("@updateField");

      H.visitQuestionAdhoc({
        dataset_query: {
          database: SAMPLE_DB_ID,
          query: {
            "source-table": ORDERS_ID,
            aggregation: [["sum", ["field", ORDERS.QUANTITY, null]]],
          },
          type: "query",
        },
      });

      cy.findByTestId("visualization-root").findByText("about 69,540");
    });

    it("should not call PUT field endpoint when prefix or suffix has not been changed (SEM-359)", () => {
      cy.visit(
        `/admin/datamodel/database/${SAMPLE_DB_ID}/schema/${SAMPLE_DB_SCHEMA_ID}/table/${ORDERS_ID}/field/${ORDERS.QUANTITY}/formatting`,
      );
      cy.wait("@getField");

      cy.findByTestId("column-settings").findByTestId("prefix").focus().blur();
      cy.get("@updateFieldSpy").should("not.have.been.called");
      H.undoToast().should("not.exist");

      cy.findByTestId("column-settings").findByTestId("suffix").focus().blur();
      cy.get("@updateFieldSpy").should("not.have.been.called");
      H.undoToast().should("not.exist");
    });
  });
});

describe("scenarios > admin > datamodel > segments", () => {
  beforeEach(() => {
    H.restore();
    cy.signInAsAdmin();
    cy.viewport(1400, 860);
  });

  describe("with no segments", () => {
    it("should have 'Custom expression' in a filter list (metabase#13069)", () => {
      cy.visit("/admin/datamodel/segments");

      cy.log("should initially show no segments in UI");
      cy.get("main").findByText(
        "Create segments to add them to the Filter dropdown in the query builder",
      );

      cy.button("New segment").click();

      cy.findByTestId("segment-editor").findByText("Select a table").click();
      H.entityPickerModal().within(() => {
        cy.findByText("Orders").click();
      });

      cy.findByTestId("segment-editor").findByText("Orders").should("exist");

      cy.findByTestId("segment-editor")
        .findByText("Add filters to narrow your answer")
        .click();

      cy.log("Fails in v0.36.0 and v0.36.3. It exists in v0.35.4");
      H.popover().findByText("Custom Expression");
    });

    it("should show no segments", () => {
      cy.visit("/reference/segments");
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.findByText("Segments are interesting subsets of tables");
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.findByText("Learn how to create segments");
    });
  });

  describe("with segment", () => {
    const SEGMENT_NAME = "Orders < 100";

    beforeEach(() => {
      // Create a segment through API
      H.createSegment({
        name: SEGMENT_NAME,
        description: "All orders with a total under $100.",
        table_id: ORDERS_ID,
        definition: {
          "source-table": ORDERS_ID,
          aggregation: [["count"]],
          filter: ["<", ["field", ORDERS.TOTAL, null], 100],
        },
      }).then(({ body }) => {
        cy.wrap(body.id).as("segmentId");
      });
    });

    it("should show the segment fields list and detail view", () => {
      // In the list
      cy.visit("/reference/segments");
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.findByText(SEGMENT_NAME);

      // Detail view
      cy.visit("/reference/segments/1");
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.findByText("Description");
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.findByText("See this segment");

      // Segment fields
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.findByText("Fields in this segment").click();
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.findByText("See this segment").should("not.exist");
      // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
      cy.findByText(`Fields in ${SEGMENT_NAME}`);
      cy.findAllByText("Discount");
    });

    it("should not crash when editing field in segment field detail page (metabase#55322)", () => {
      cy.get("@segmentId").then((segmentId) => {
        cy.visit(`/reference/segments/${segmentId}/fields/${ORDERS.TAX}`);
      });

      cy.button(/Edit/).should("be.visible").realClick();

      cy.findByPlaceholderText("No description yet").should("be.visible");
      cy.get("main").findByText("Something’s gone wrong").should("not.exist");
    });

    it("should show up in UI list and should show the segment details of a specific id", () => {
      cy.visit("/admin/datamodel/segments");

      cy.findByRole("table").within(() => {
        cy.findByText("Filtered by Total is less than 100").should(
          "be.visible",
        );
        cy.findByText("Sample Database").should("be.visible");
        cy.findByText("Orders").should("be.visible");
      });
      cy.findByRole("link", { name: /Orders < 100/ })
        .should("be.visible")
        .click();

      cy.get("form").within(() => {
        cy.findByText("Edit Your Segment").should("be.visible");
        cy.findByText("Sample Database").should("be.visible");
        cy.findByText("Orders").should("be.visible");
      });
      cy.findByPlaceholderText("Something descriptive but not too long").should(
        "have.value",
        SEGMENT_NAME,
      );
      cy.findByRole("link", { name: "Preview" }).should("be.visible");
    });

    it("should see a newly asked question in its questions list", () => {
      cy.intercept("GET", "/api/table/*/query_metadata*").as("metadata");
      // Ask question
      cy.visit("/reference/segments/1/questions");
      cy.wait(["@metadata", "@metadata", "@metadata"]);

      cy.get("main").should("contain", `Questions about ${SEGMENT_NAME}`);
      cy.findByRole("status")
        .as("emptyStateMessage")
        .should(
          "have.text",
          "Questions about this segment will appear here as they're added",
        );

      cy.button("Ask a question").click();
      cy.findByTestId("filter-pill").should("have.text", "Orders < 100");
      cy.findAllByTestId("cell-data").should("contain", "37.65");

      H.summarize();
      cy.findAllByTestId("sidebar-right").button("Done").click();
      cy.findByTestId("scalar-value").should("have.text", "13,005");
      H.saveQuestion("Foo");

      // Check list
      cy.visit("/reference/segments/1/questions");
      cy.wait(["@metadata", "@metadata", "@metadata"]);

      cy.get("@emptyStateMessage").should("not.exist");
      cy.findByTestId("data-reference-list-item")
        .findByText("Foo")
        .should("be.visible");
    });

    it("should update that segment", () => {
      cy.visit("/admin");
      cy.findByTestId("admin-navbar-items").contains("Table Metadata").click();
      cy.get("label").contains("Segments").click();

      cy.findByTestId("segment-list-app")
        .contains(SEGMENT_NAME)
        .parent()
        .parent()
        .parent()
        .find(".Icon-ellipsis")
        .click();
      H.popover().contains("Edit Segment").click();

      // update the filter from "< 100" to "> 10"
      cy.url().should("match", /segment\/1$/);
      cy.get("label").contains("Edit Your Segment");
      cy.findByTestId("filter-pill")
        .contains(/Total\s+is less than/)
        .click();
      H.popover().findByLabelText("Filter operator").click();
      H.popover().contains("Greater than").click();
      H.popover().findByPlaceholderText("Enter a number").type("{SelectAll}10");
      H.popover().contains("Update filter").click();

      // confirm that the preview updated
      cy.findByTestId("segment-editor").contains("18758 rows");

      // update name and description, set a revision note, and save the update
      cy.get('[name="name"]').clear().type("Orders > 10");
      cy.get('[name="description"]')
        .clear()
        .type("All orders with a total over $10.");
      cy.get('[name="revision_message"]').type("time for a change");
      cy.findByTestId("field-set-content").findByText("Save changes").click();

      // get redirected to previous page and see the new segment name
      cy.url().should("match", /datamodel\/segments$/);

      cy.findByTestId("segment-list-app").findByText("Orders > 10");

      // clean up
      cy.findByTestId("segment-list-app")
        .contains("Orders > 10")
        .parent()
        .parent()
        .parent()
        .find(".Icon-ellipsis")
        .click();
      H.popover().findByText("Retire Segment").click();
      H.modal().find("textarea").type("delete it");
      H.modal().contains("button", "Retire").click();
    });

    it("should show segment revision history (metabase#45577, metabase#45594)", () => {
      cy.request("PUT", "/api/segment/1", {
        description: "Medium orders",
        revision_message: "Foo",
      });

      cy.log("Make sure revisions are displayed properly in /references");
      cy.visit("/reference/segments/1/revisions");
      cy.findByTestId("segment-revisions").within(() => {
        cy.findByText(`Revision history for ${SEGMENT_NAME}`).should(
          "be.visible",
        );

        assertRevisionHistory();
      });

      cy.log(
        "Make sure revisions are displayed properly in admin table metadata",
      );
      cy.visit("/admin/datamodel/segments");
      cy.get("tr")
        .filter(`:contains(${SEGMENT_NAME})`)
        .icon("ellipsis")
        .click();
      H.popover().findByTextEnsureVisible("Revision History").click();

      cy.location("pathname").should(
        "eq",
        "/admin/datamodel/segment/1/revisions",
      );

      cy.findByTestId("segment-revisions").within(() => {
        // metabase#45594
        cy.findByRole("heading", {
          name: `Revision History for "${SEGMENT_NAME}"`,
        }).should("be.visible");

        assertRevisionHistory();
      });

      cy.findByTestId("breadcrumbs").within(() => {
        cy.findByText("Segment History");
        cy.findByRole("link", { name: "Segments" }).click();
      });

      cy.location("pathname").should("eq", "/admin/datamodel/segments");
      cy.location("search").should("eq", `?table=${ORDERS_ID}`);

      function assertRevisionHistory() {
        cy.findAllByRole("listitem").as("revisions").should("have.length", 2);
        cy.get("@revisions")
          .first()
          .should("contain", "You edited the description")
          .and("contain", "Foo");
        // eslint-disable-next-line no-unsafe-element-filtering
        cy.get("@revisions")
          .last()
          .should("contain", `You created "${SEGMENT_NAME}"`)
          .and("contain", "All orders with a total under $100.");
      }
    });
  });
});

describe("scenarios > admin > databases > table", () => {
  function turnTableVisibilityOff(table_id) {
    cy.request("PUT", "/api/table", {
      ids: [table_id],
      visibility_type: "hidden",
    });
  }

  beforeEach(() => {
    H.restore();
    cy.signInAsAdmin();
  });

  it("should see 8 tables in sample database", () => {
    cy.visit(`/admin/datamodel/database/${SAMPLE_DB_ID}`);
    cy.findAllByTestId("admin-metadata-table-list-item").should(
      "have.length",
      8,
    );
  });

  it("should be able to see details of each table", () => {
    cy.visit(`/admin/datamodel/database/${SAMPLE_DB_ID}`);
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText(
      "Select any table to see its schema and add or edit metadata.",
    );

    // Orders
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Orders").click();
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText(
      "Select any table to see its schema and add or edit metadata.",
    ).should("not.exist");
    cy.get(
      "input[value='Confirmed Sample Company orders for a product, from a user.']",
    );
  });

  it("should show 404 if database does not exist (metabase#14652)", () => {
    cy.visit("/admin/datamodel/database/54321");
    cy.findAllByTestId("admin-metadata-table-list-item").should(
      "have.length",
      0,
    );
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Not found.");
    // eslint-disable-next-line no-unscoped-text-selectors -- deprecated usage
    cy.findByText("Select a database");
  });

  describe("in orders table", () => {
    beforeEach(() => {
      cy.visit(
        `/admin/datamodel/database/${SAMPLE_DB_ID}/schema/${SAMPLE_DB_SCHEMA_ID}/table/${ORDERS_ID}`,
      );
    });

    it("should see multiple fields", () => {
      cy.findByTestId("column-ID")
        .scrollIntoView()
        .within(() => {
          cy.findByText("BIGINT").should("be.visible");
          cy.findByPlaceholderText("Select a semantic type").should(
            "have.value",
            "Entity Key",
          );
        });

      cy.findByTestId("column-USER_ID")
        .scrollIntoView()
        .within(() => {
          cy.findByText("INTEGER").should("be.visible");
          cy.findByPlaceholderText("Select a semantic type").should(
            "have.value",
            "Foreign Key",
          );
          cy.findByPlaceholderText("Select a target").should(
            "have.value",
            "People → ID",
          );
        });

      cy.findByTestId("column-TAX")
        .scrollIntoView()
        .within(() => {
          cy.findByText("DOUBLE PRECISION").should("be.visible");
          cy.findByPlaceholderText("Select a semantic type").should(
            "have.value",
            "No semantic type",
          );
        });

      cy.findByTestId("column-DISCOUNT")
        .scrollIntoView()
        .within(() => {
          cy.findByText("DOUBLE PRECISION").should("be.visible");
          cy.findByPlaceholderText("Select a semantic type").should(
            "have.value",
            "Discount",
          );
        });

      cy.findByTestId("column-CREATED_AT")
        .scrollIntoView()
        .within(() => {
          cy.findByText("TIMESTAMP").should("be.visible");
          cy.findByPlaceholderText("Select a semantic type").should(
            "have.value",
            "Creation timestamp",
          );
        });
    });
  });

  describe.skip("turning table visibility off shouldn't prevent editing related question (metabase#15947)", () => {
    it("simple question (metabase#15947-1)", () => {
      turnTableVisibilityOff(ORDERS_ID);
      H.visitQuestion(ORDERS_QUESTION_ID);
      H.filter();
    });

    it("question with joins (metabase#15947-2)", () => {
      H.createQuestion({
        name: "15947",
        query: {
          "source-table": ORDERS_ID,
          joins: [
            {
              fields: "all",
              "source-table": PRODUCTS_ID,
              condition: [
                "=",
                ["field", ORDERS.PRODUCT_ID, null],
                ["field", PRODUCTS.ID, { "join-alias": "Products" }],
              ],
              alias: "Products",
            },
          ],
          filter: [
            "and",
            ["=", ["field", ORDERS.QUANTITY, null], 1],
            [">", ["field", PRODUCTS.RATING, { "join-alias": "Products" }], 3],
          ],
          aggregation: [
            ["sum", ["field", ORDERS.TOTAL, null]],
            ["sum", ["field", PRODUCTS.RATING, { "join-alias": "Products" }]],
          ],
          breakout: [
            ["field", ORDERS.CREATED_AT, { "temporal-unit": "year" }],
            ["field", PRODUCTS.CATEGORY, { "join-alias": "Products" }],
          ],
        },
      }).then(({ body: { id: QUESTION_ID } }) => {
        turnTableVisibilityOff(PRODUCTS_ID);
        cy.visit(`/question/${QUESTION_ID}/notebook`);
        cy.findByText("Products");
        cy.findByText("Quantity is equal to 1");
        cy.findByText("Rating is greater than 3");
      });
    });
  });
});
