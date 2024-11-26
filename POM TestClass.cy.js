import LoginPage from "./POM PageClasses.cy.js/LoginPage.cy"

describe('POM TestClass', function(){
    it('Adactin app', function(){
        const login = new LoginPage  // object of the class
        login.visit()
        login.userName("PreethiSri")
        login.passWord("pree@0212")
        login.loginButton()

        cy.title().should('be.equal','Adactin.com - Search Hotel')


    })
    
    
    
    
   } )