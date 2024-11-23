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
it('sample 2', ()=>{
cy.visit('https://demo.guru99.com/test/radio.html')

// Radio Button
cy.get("#vfb-7-1").check() // id locator so we don't want to use first or last method
cy.get("[type='radio']").last().check()

// Check box
cy.get("[type='checkbox']").first().check()
cy.get("[type='checkbox']").last().check()

cy.get("[type='checkbox']").first().uncheck()
cy.get("[type='checkbox']").last().uncheck()
})

// Dropdown
it.only('Dropdown', ()=>{

  cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
  
  cy.get("#dropdowm-menu-1").select('sql')
  cy.get("#dropdowm-menu-1").should('have.value','sql')

  cy.get('#dropdowm-menu-1').select('Python')
  cy.get('#dropdowm-menu-1').should('have.value','python')
  
  cy.get('#dropdowm-menu-2').select('Maven')
  cy.get('#dropdowm-menu-2').should('have.value','maven')
  
  cy.get('#dropdowm-menu-3').select('JavaScript')
  cy.get('#dropdowm-menu-3').should('have.value','javascript')
  })







    

})






