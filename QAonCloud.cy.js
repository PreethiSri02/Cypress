describe('Locators', ()=> {
it('test1', () => {
cy.visit('https://www.qaoncloud.com/')

cy.url().should('eq', 'https://www.qaoncloud.com/')
cy.title().should('include', 'Cloud')
.and('include', 'QA')

// Verify the title is visible
cy.get("[alt='QAonCloud Logo']").should('be.visible');

//Verify the banner is visible
cy.get("[data-id='9814d64']").should('be.visible')  

//Verify the footer is visible
 cy.get("[data-id='b046965']").should('be.visible')

 //Contact US
 cy.get("[class='elementor-button-text']").click()

cy.get("[name='name']").eq(0).type("Preethi123");
    cy.get("[name='email']").eq(0).type("preethiqa@gmail.com");
    cy.get("[name='phone']").eq(0).type("9629466261");
    cy.get("[name='companyname']").eq(0).type("ABC company");
    cy.get("[name='role']").eq(0).type("QA");
    cy.get("[name='requirements']").eq(0).type("XYZ");

})

})