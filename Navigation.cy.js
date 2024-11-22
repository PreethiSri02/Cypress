describe('Navigation', ()=>{
it('navigation', ()=>{
    cy.visit('https://www.flipkart.com/');
    cy.get("[class='YBLJE4']").eq(1).click()

// Go back to the homepage
cy.go('back');
cy.url().should('eq', 'https://www.flipkart.com/');

//To close the pop up if appears
// cy.get("('._30XB9F')").click()

// // Go forward to the Mobiles page
cy.go('forward');
cy.url().should('contain', 'Mobiles');









   
// Go back to the homepage
// cy.go('back');
// cy.url().should('eq', 'https://www.flipkart.com/');

// // // Go forward to the Mobiles page
// cy.go('forward');
// cy.url().should('include', '/mobiles');
   
   
   
   
    // // Close the login popup (if it appears)
    // cy.get('button._2KpZ6l._2doB4z').click();

    // Click on "Mobiles" category
   // cy.contains('Mobiles', { matchCase: false }).click();

    
    // // Verify navigation to the Mobiles page
    // cy.url().should('include', '/mobiles');

    





})



})