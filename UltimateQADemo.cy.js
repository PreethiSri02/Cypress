describe("Ultimate Demo", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.error("Uncaught Exception:", err);
    return false;
  });

  let testData; // Declare a variable to store fixture data

  before(function () {
    cy.fixture("UltimateQA").then((data) => {
      testData = data; // Store fixture data in testData variable
    });
  });

  beforeEach(function () {
    cy.wrap(testData).should("exist"); // Ensure testData is loaded before using it
    cy.visit(testData.url); // Now testData is correctly used
  });

  it("Big Page with many Elements page", function () {
    cy.title().should("eq", "Automation Practice - Ultimate QA");
    cy.get(".et_pb_text_inner > ul > :nth-child(1) > a").click();
    cy.url().should("eq", "https://ultimateqa.com/complicated-page");
    cy.get(".et_pb_button.et_pb_button_0.et_pb_bg_layout_light").click();
  });

  it("Form", function () {
    cy.get("a[href='https://ultimateqa.com/filling-out-forms/']").click();
    cy.get("#et_pb_contact_name_0").type(testData.name);
    cy.get("#et_pb_contact_message_0").type(testData.message);
    cy.get("#et_pb_contact_form_0 .et_pb_contact_submit").click();
    cy.get("div.et-pb-contact-message p").should("have.text", "Thanks for contacting us");

    cy.get("#et_pb_contact_name_1").type(testData.name);
    cy.get("#et_pb_contact_message_1").type(testData.message);
    cy.get("input[name='et_pb_contact_captcha_1']").type("22"); // Ensure CAPTCHA is static
    cy.get(".et_pb_contact_submit").click();
    cy.get("div.et-pb-contact-message p").should("have.text", "Thanks for contacting us");
  });

  it("Learn how to automate an application that evolves over time", function () {
    cy.get("a[href='https://ultimateqa.com/sample-application-lifecycle-sprint-1/']").click();
    cy.get(".entry-title").should("have.text", "Sample Application Lifecycle – Sprint 1");
    cy.get('[name="firstname"]').type(testData.name);
    cy.get("form > a").click();

    cy.url().should("eq", "https://ultimateqa.com/sample-application-lifecycle-sprint-2/");
    cy.get('[name="firstname"]').type(testData.firstname);
    cy.get('[name="lastname"]').type(testData.lastname);
    cy.get(":nth-child(9) > a").click();

    cy.url().should("eq", "https://ultimateqa.com/sample-application-lifecycle-sprint-3/");
    cy.get("input[value='female']").should("be.visible").click();
    cy.get("input[name='firstname']").type(testData.firstname);
    cy.get('[name="lastname"]').type(testData.lastname);
    cy.get("input[type='submit']").click();

    cy.url().should("eq", `https://ultimateqa.com/?gender=female&firstname=${testData.firstname}&lastname=${testData.lastname}`);
  });
});
