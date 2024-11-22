describe('Assertions', ()=> {

// 1. Implicit Assertions

// it('Implicit assertion- should', ()=>{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// The below steps are asserting the url that's why weve used cy.url
//keywords- should & and
//should--include and contain works similarly
cy.url().should('include', 'orangehrmlive')
cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.url().should('contain', 'orangehrm')

// To avoid repeating the same 'cy.url()', we can simplify it as '.should()' by following the 1st line

cy.url().should('include', 'orangehrmlive')
.should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
.should('contain', 'orangehrm')

// To avoid repeating the same 'should()', we can simplify it as 'and()' by following the 1st line

cy.url().should('include', 'orangehrmlive')
.and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
.and('contain', 'orangehrm')
// //negative assertion- we can use 'not.' in any keyword as negative assertion
.and('not.contain', 'test')

// // To validate the title of the web page
cy.title().should('include', 'Orange')
.and('include', 'OrangeHRM')
.and('include', 'HRM')

// // To validate the logo or web element or images of a webpage present or not (by getting locator from cypress)
cy.get('.orangehrm-login-branding > img').should('be.visible')
.and('exist')  // logo exists 


// //Provide value into an input box
cy.get("[name='username']").type("Admin")

// // To check whether the value got entered or not
cy.get("[name='username']").should('have.value','Admin')
})




// 2. Explicit Assertions

    it('Explicit assertion- should', ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("[name='username']").type("Admin")
    cy.get("[name='password']").type("admin123")
    cy.get("[type='submit']").click();

    //We need to write User defined function whenever we use explicit assertion- because it is a customized one 
  
    // we've written this as an expected result because new id is generated for each login - so initially it throws error, change the name from error
    let expectedName = "FirstName LastName";  // mention any random value initially

    // locate the element (userid) and capture the id in 'x'
    cy.get("[class='oxd-userdropdown-name']").then((x)=>{

    // store the value that we captured in x into another variable name
        let actualName = x.text();  // actual

// BDD approach
    expect(actualName).to.equal(expectedName)
    // expect(actualName).to.not.equal(expectedName)  // negative test

// TDD approach
    assert.equal(actualName,expectedName)
     // assert.not.equal(actualName,expectedName)  // negative test
})
















    })

})