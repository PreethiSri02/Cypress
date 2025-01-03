describe('Handling New Window Links', () => {
    it('Open new tab in the same browser window - 1', () => {

      cy.visit('https://the-internet.herokuapp.com/windows');
  
      // Force the link to open in the same tab
      cy.get('.example >a').invoke('removeAttr', 'target')   // by using invoke method, can remove the attribute which opens url in new tab
      .click(); 
  
      // Verify the new URL
      cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
  
      // Verify content on the new page
      cy.contains('New Window').should('be.visible');

      cy.wait(5000)

     cy.go('back') // go back to parent tab
    });


    it.only('Open new tab in the same browser window - 2', () => {
        
        cy.visit('https://the-internet.herokuapp.com/windows');
    
        cy.get('.example >a').then((e)=>{
          let url = e.prop('href')
            cy.visit(url);
        })

// Limitation - child tab url should contain the parent domain url, then only this approach will work
    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');

    cy.wait(5000)

     cy.go('back') // go back to parent tab

  })
})
  