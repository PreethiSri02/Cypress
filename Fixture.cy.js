describe('Fixture',function(){

    // need to load this fixture file before runnig the test
    before(function(){
        cy.fixture('adactin').then(function(data){  // load the data added in a fixture file (adactin) into a variable called 'data'
        
            this.data=data   // to apply the loaded data out of this 'before' block
        }) 
   })

   it('fixture 1',function(){
    cy.visit("https://adactinhotelapp.com/index.php");
    cy.get("#username").type(this.data.username)   // apply the data by using the defined key in fixture file
    cy.get("#password").type(this.data.password)
    cy.get("#login").click()
 // Assertions   
    cy.title().should('be.equal', 'Adactin.com - Search Hotel')
    cy.url().should('eq', 'https://adactinhotelapp.com/SearchHotel.php')
    .and('contain','adactin')

    cy.get("#location").select(this.data.location)
    cy.get("#hotels").select(this.data.hotels)
    cy.get("#room_type").select(this.data.roomType)
    cy.get("#room_nos").select(this.data.roomNos)
    cy.get("#datepick_in").type(this.data.dateIn)
    cy.get("#datepick_out").type(this.data.dateOut)
    cy.get("#adult_room").select(this.data.adultRoom)
    cy.get("#child_room").select(this.data.childRoom)
    cy.get("#Submit").click()
    cy.title().should('be.equal','Adactin.com - Select Hotel')

   })

})