Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Custom command - 1', ()=>{

    it('Adactin - custom command to login',()=>{
       cy.login("PreethiSri","pree@0212") // custom command added in commands.js
        cy.get("#location").select('London')
        cy.get("#hotels").select('Hotel Hervey')
        cy.get("#datepick_in").type("02/05/2024")
        cy.get("#datepick_out").type("12/06/2024")
    })
})

describe('Custom command - 2',function(){
    it('custom command-Click on label',function(){
        cy.visit('https://www.opencart.com/index.php?route=cms/demo',{failOnStatusCode: false});
        cy.clickLink("Marketplace");           // mention the label of the product by calling the created custom command
        cy.url().should('include','marketplace');
})
    it('custom command-Overwrite "contains" command',function(){
        cy.visit('https://www.opencart.com/index.php?route=cms/demo',{failOnStatusCode: false});
        cy.containsIgnoreCase("a", "MARKETPLACE");
         // mention the label of the product in 'case sensitive' by calling the created custom command
        cy.url().should('include','marketplace');
})
    })
