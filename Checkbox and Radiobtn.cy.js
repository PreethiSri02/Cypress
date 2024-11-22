describe('Checkboxes', () => {
    it('checkbox, radio button', () => {
      // Visit the website
      cy.visit('https://www.ironspider.ca/forms/checkradio.htm#radio');
      
// Checkbox Interaction
      cy.get("[type='checkbox']").first().check()  // Check the first checkbox
        .should('be.checked');  // Verify that it is checked
  
      cy.get("[type='checkbox']").last().check()  // Uncheck the last checkbox
        .should('be.checked');  // Verify that it is unchecked

        cy.get("[type='checkbox']").first().uncheck()  // Check the first checkbox
        .should('not.be.checked');  // Verify that it is checked
  
      cy.get("[type='checkbox']").last().uncheck()  // Uncheck the last checkbox
        .should('not.be.checked');  // Verify that it is unchecked


// Radio Button Interaction
    cy.get("[type='radio']").first().check()  // Select the first radio button
    .should('be.checked');  // Verify that it is checked

    cy.get("[type='radio']").last().check()  // Select the last radio button
    .should('be.checked');  // Verify that it is checked


    })







    

})






