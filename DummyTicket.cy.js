describe('Dummy Ticket For Visa', function () {

    beforeEach(function(){
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/', { failOnStatusCode: false });
        cy.url().should('include', 'dummyticket.com/dummy-ticket-for-visa-application');
        cy.title().should('include', 'Dummy ticket for applying visa - Verifiable flight reservation for embassy');
      });  

    it('Positive scenario', function () {
    // Passenger details
        cy.get('#travname').type("Preethi");
        cy.get('#travlastname').type("Srinivasan");
        cy.get('#order_comments').type("No comments");
        cy.get('#dob').click();
        cy.get('.ui-datepicker-year').select("2000");
        cy.get('.ui-datepicker-month').select("Apr");
        cy.get(':nth-child(2) > :nth-child(4) > .ui-state-default').click();
        cy.get('#sex_2').click();
    // Travel Details
        cy.get('#traveltype_2').click();
        cy.get('#fromcity').type("Kochin");
        cy.get('#tocity').type("Canada");
        cy.get('#departon').click();
        cy.get('.ui-datepicker-month').select("Jul");
        cy.get('.ui-datepicker-year').select("2025");
        cy.get('.ui-state-default').contains("15").click();
        cy.get('#returndate').click();
        cy.get('.ui-datepicker-month').select("Aug");
        cy.get('.ui-datepicker-year').select("2025");
        cy.get('.ui-state-default').contains("20").click();

        cy.get('#notes').type("No additional information");
    // Delivery Options
        cy.get('#select2-reasondummy-container').click();
        cy.get('.select2-search__field').type("Office work place needs it").type('{enter}');
        cy.get('#deliverymethod_3').click();
    // Billing details
        cy.get('#billname').type("ABC");
        cy.get('#billing_phone').type("9874563210");
        cy.get('#billing_email').type("abc@gmail.com");
        cy.get('#billing_address_1').type("123, WallStreet");
        cy.get('#billing_address_2').type("Erode");
        cy.get('#billing_city').type("Erode");
        cy.get('#select2-billing_state-container').click();
        cy.get('.select2-search__field').type("Tamil Nadu").type('{enter}');
        cy.get('#billing_postcode').type("638316");
    // Click place order button
        cy.get('#place_order').should('be.enabled').click();

// Handle cross-origin navigation
cy.origin('https://api.payu.in', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes("Script error.")) {
            return false; // Prevent test failure due to cross-origin errors
        }
        return true;
    });
    cy.wait(5000);
    // Click Credit/Debit Card payment option
    cy.contains('Cards (Credit/Debit)').should('be.visible').click({ force: true });
    // Enter Card Details
    cy.get('#amount-impression').should('be.visible');
    cy.get('.input-box.cardInput').should('exist').should('be.visible').type("1234-5686-8568-5685-6");
    cy.get('#cardExpiry').should('exist').should('be.visible').type("0128");
    cy.get('#cardCvv').should('exist').should('be.visible').type("300");
    cy.wait(2000);
    cy.get('#cardOwnerName').should('exist').should('be.visible').type("Preethi");
    cy.wait(2000);
    // Click Pay Button
    cy.get("button[type='submit'] div").should('be.visible')
    // .click();
});

it('1. Negative scenario-Without Passenger details', function () {
    // Travel Details
        cy.get('#traveltype_2').click();
        cy.get('#fromcity').type("Kochin");
        cy.get('#tocity').type("Canada");
        cy.get('#departon').click();
        cy.get('.ui-datepicker-month').select("Jul");
        cy.get('.ui-datepicker-year').select("2025");
        cy.get('.ui-state-default').contains("15").click();
        cy.get('#returndate').click();
        cy.get('.ui-datepicker-month').select("Aug");
        cy.get('.ui-datepicker-year').select("2025");
        cy.get('.ui-state-default').contains("20").click();

        cy.get('#notes').type("No additional information");
    // Delivery Options
        cy.get('#select2-reasondummy-container').click();
        cy.get('.select2-search__field').type("Office work place needs it").type('{enter}');
        cy.get('#deliverymethod_3').click();
    // Billing details
        cy.get('#billname').type("ABC");
        cy.get('#billing_phone').type("9874563210");
        cy.get('#billing_email').type("abc@gmail.com");
        cy.get('#billing_address_1').type("123, WallStreet");
        cy.get('#billing_address_2').type("Erode");
        cy.get('#billing_city').type("Erode");
        cy.get('#select2-billing_state-container').click();
        cy.get('.select2-search__field').type("Tamil Nadu").type('{enter}');
        cy.get('#billing_postcode').type("638316");
    // Click place order button
        cy.get('#place_order').should('be.enabled').click();
    // Error Validation
    cy.get('.woocommerce-error')
    .should('contain.text','First / Given name is a required field.')
    .and('contain.text','Last / Surname is a required field.')
    .and('contain.text','Date of birth is a required field.')
    .and('contain.text','Sex is a required field.')
    });

it('2. Negative scenario-Without Travel Details', function () {
    // Passenger details
        cy.get('#travname').type("Preethi");
        cy.get('#travlastname').type("Srinivasan");
        cy.get('#order_comments').type("No comments");
        cy.get('#dob').click();
        cy.get('.ui-datepicker-year').select("2000");
        cy.get('.ui-datepicker-month').select("Apr");
        cy.get(':nth-child(2) > :nth-child(4) > .ui-state-default').click();
        cy.get('#sex_2').click();
    // Delivery Options
        cy.get('#select2-reasondummy-container').click();
        cy.get('.select2-search__field').type("Office work place needs it").type('{enter}');
        cy.get('#deliverymethod_3').click();
    // Billing details
        cy.get('#billname').type("ABC");
        cy.get('#billing_phone').type("9874563210");
        cy.get('#billing_email').type("abc@gmail.com");
        cy.get('#billing_address_1').type("123, WallStreet");
        cy.get('#billing_address_2').type("Erode");
        cy.get('#billing_city').type("Erode");
        cy.get('#select2-billing_state-container').click();
        cy.get('.select2-search__field').type("Tamil Nadu").type('{enter}');
        cy.get('#billing_postcode').type("638316");
    // Click place order button
        cy.get('#place_order').should('be.enabled').click();
    // Error Validation
    cy.get('.woocommerce-error')
    .should('contain.text','From city / Origin is a required field.')
    .and('contain.text','To city. /Dest. is a required field.')
    .and('contain.text','Departure date is a required field.')
    });

it('3. Negative scenario-Without Billing Details', function () {
    // Passenger details
        cy.get('#travname').type("Preethi");
        cy.get('#travlastname').type("Srinivasan");
        cy.get('#order_comments').type("No comments");
        cy.get('#dob').click();
        cy.get('.ui-datepicker-year').select("2000");
        cy.get('.ui-datepicker-month').select("Apr");
        cy.get(':nth-child(2) > :nth-child(4) > .ui-state-default').click();
        cy.get('#sex_2').click();
        // Travel Details
        cy.get('#traveltype_2').click();
        cy.get('#fromcity').type("Kochin");
        cy.get('#tocity').type("Canada");
        cy.get('#departon').click();
        cy.get('.ui-datepicker-month').select("Jul");
        cy.get('.ui-datepicker-year').select("2025");
        cy.get('.ui-state-default').contains("15").click();
        cy.get('#returndate').click();
        cy.get('.ui-datepicker-month').select("Aug");
        cy.get('.ui-datepicker-year').select("2025");
        cy.get('.ui-state-default').contains("20").click();

        cy.get('#notes').type("No additional information");
    // Delivery Options
        cy.get('#select2-reasondummy-container').click();
        cy.get('.select2-search__field').type("Office work place needs it").type('{enter}');
        cy.get('#deliverymethod_3').click();
    // Click place order button
        cy.get('#place_order').should('be.enabled').click();
    // Error Validation
    cy.get('.woocommerce-error')
    .should('contain.text','Billing Phone is a required field.')
    .and('contain.text','Billing Email address is a required field.')
    .and('contain.text','Billing Street address is a required field.')
    .and('contain.text','Billing Town / City is a required field.')
    .and('contain.text','Billing State / District / Province is a required field.')
    .and('contain.text','Billing Postcode / ZIP / PIN code is a required field.')
    });



});
});
