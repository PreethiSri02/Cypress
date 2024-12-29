describe('AutomationDemo',()=>{
it('Demo',()=>{
cy.visit('https://demo.automationtesting.in/Register.html')
cy.title().should('eq','Register')
cy.get('h2').contains('Register')
cy.url().should('contain','Register')

cy.get(':nth-child(1) > .col-md-3').should('contain','Full Name')
cy.get("input[placeholder='First Name']").type('Preethi').should('have.value','Preethi')

cy.get(':nth-child(1) > .col-md-3').should('be.visible')
cy.get("input[placeholder='Last Name']").type('Srinivasan').should('have.value','Srinivasan')

cy.get('.col-md-8 > .form-control').should('be.enabled').type('ABC')
cy.get("input[type='email']").type('abc@gmail.com').should('have.value','abc@gmail.com')
cy.get("input[type='tel']").type('9874563210').should('have.value','9874563210')

cy.get("label[class='col-md-3 col-xs-3 col-sm-3 control-label']").eq(4).should('be.visible')
cy.get("input[value='FeMale']").check().should('be.checked')

cy.get(':nth-child(6) > .col-md-3').should('be.visible')
cy.get('#checkbox1').check().should('be.checked')
cy.get('#checkbox2').check().should('be.checked')
cy.get('#checkbox3').check().should('be.checked')

cy.get(':nth-child(7) > .col-md-3').should('exist')

cy.get(':nth-child(8) > .col-md-3').should('contain','Skills')
cy.get('#Skills').select('Android').should('have.value','Android')

//cy.get("select[name='country']").select('India');

cy.get('.select2-selection').click();   // click the field
cy.get("input[type='search']").type('India') // search field in the dropdown
cy.get('.select2-results__option').first().click(); // searched filter result


  cy.get('#yearbox').select('1999')
  cy.get("select[placeholder='Month']").select('December')
  cy.get('#daybox').select('18')

  cy.get('#firstpassword').should('be.enabled').type('12345')
  cy.get('#secondpassword').should('be.enabled').type('12345')
 
  const upload = 'Butterfly.png'
  cy.get('#imagesrc').should('be.visible').attachFile(upload)

 // cy.get('#submitbtn').click()

})






})