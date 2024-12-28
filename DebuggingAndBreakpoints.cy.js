describe('DebuggingAndBreakpoints',()=>{
it('Debugging and Breakpoints',()=>{

    // debugger;   // Opens DevTools and pauses here and manual inspection of functions, and the call stack in DevTools to find the root cause of issues
   
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.wait(3000);
    cy.title().should('eq','OrangeHRM')
    cy.url().should('include', 'orangehrmlive')
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('123'); // invalid password
  
    cy.get("button[type='submit']").debug().click()   // use debug()- to inspect elements while test execution continues in the DevTools console.

    //cy.pause();              //Use pause() breakpoint-to pause the execution and run step byt step manually
     cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')

})
})