describe('Custom command', ()=>{

    it('Select Location',()=>{
       cy.login("PreethiSri","pree@0212") // custom command added in commands.js
        cy.get("#location").select('London')
    })
     it('Select Hotel',()=>{
        cy.login("PreethiSri","pree@0212")
        cy.get("#hotels").select('Hotel Hervey')
     })
    it('Enter date',()=>{
        cy.login("PreethiSri","pree@0212")
        cy.get("#datepick_in").type("02/05/2024")
        cy.get("#datepick_out").type("12/06/2024")
    })
    
    })
    