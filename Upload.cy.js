describe('Upload',()=>{
   
   //  To avoid 'uncaught:exception', add this code as a before hook
    before(() => {
        // Ignore uncaught exceptions from the application
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
        });
      });

it('Upload Test',()=>{

// Use your file path here that is present in fixture folder
const filepath = 'Butterfly.png';

cy.visit('https://practice.expandtesting.com/upload')

// Attach the file
cy.get('input[type="file"]').attachFile(filepath);
// Upload the file
cy.get('#fileSubmit').click(); 
cy.title().should('be.equal','Uploaded file page for Automation Testing Practice') // Title Assertion

})
})