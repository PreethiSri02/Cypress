describe('Screenshots and Videos',()=>{

it('Manual Screenshots',()=>{
cy.visit('https://www.opencart.com/');
cy.screenshot("Homepage");          //  Capture entire page and name the screen shot
cy.wait(10000);
cy.get(".navbar-header").screenshot("Logo");  // capture specific element
})

it.only('Automatic screenshot & Video on Test Failure',()=>{
    cy.visit('https://www.opencart.com/');
    cy.get('.nav > :nth-child(5) > a').click();
    cy.url().should('contain', 'demo');   // incorrect assertion

    // run this command - npx cypress run --spec (paste relative path of the spec)

})
})