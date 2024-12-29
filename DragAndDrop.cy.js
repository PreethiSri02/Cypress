describe('DragAndDrop',()=>{

    it('Drag & Drop-1',()=>{
cy.visit('https://demo.automationtesting.in/Static.html')

//cy.get('.sourceitem').drag('.targetitem')  // syntax for drag and drop
cy.get('#angular').drag('#droparea')
cy.wait(5000)
cy.get('#mongo').drag('#droparea')
cy.wait(5000)
cy.get('#node').drag('#droparea')

})

it.only('Drag & Drop-3',()=>{
    cy.visit('https://demo.guru99.com/test/drag_drop.html')
    cy.get('#credit2 > .button').drag("li[class='placeholder']", { force: true });
    cy.get(':nth-child(2) > .button').drag('#amt7', { force: true });
    cy.get('#credit1 > .button').drag('#loan > .placeholder',{ force: true });
    cy.get(':nth-child(4) > .button').drag('#amt8 > .placeholder',{ force: true });
    cy.get('.table4_result > .button').should('be.visible');
})

})
