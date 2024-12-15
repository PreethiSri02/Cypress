
import LoginPage from "./POM PageClasses.cy.js/LoginPage.cy"

describe('Response',function(){
it('WebpageResponse',function(){
cy.visit('https://adactinhotelapp.com/')
cy.get("#username").type("PreethiSri")
cy.get("#password").type("pree@0212")
cy.get("#login").click()
cy.title().should('eq','Adactin.com - Search Hotel')

})

// By getting data from POM
it('Viewport', function(){
    const login = new LoginPage  // object of the POM class
    cy.viewport('iphone-6+')     // get this view option from viewport document from cypress.io
    login.visit()
    login.userName("PreethiSri")
    login.passWord("pree@0212")
    login.loginButton()
    cy.title().should('eq','Adactin.com - Search Hotel')
})
})