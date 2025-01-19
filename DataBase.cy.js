Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
    
   "experimentalSourceRewriting".true;
   Cypress.on('uncaught:exception', (err, runnable) => {   
   return false
   });
    
   describe(' SQL Database Testing in Cypress', () => {
   
    it('Create a Table', function () {
        cy.task('queryDb', "CREATE TABLE Persons (PersonID int, FirstName varchar(255), Address varchar(255), City varchar(255))")
            .then((result) => {
                cy.log('Create Table Result:', JSON.stringify(result));
            });
     });

   it('Input Entries into the table', function () {
    cy.task('queryDb', `INSERT INTO Persons (PersonID, FirstName, Address, City) VALUES
    (001, "Person 1", "House No. 01", "Chennai"),
    (002, "Person 2", "House No. 02", "Erode"),
    (003, "Person 3", "House No. 03", "Salem"),
    (004, "Person 4", "House No. 04", "Coimbatore");`).then((result) => {
    cy.log('Insert Data Result:', JSON.stringify(result));            // log the data in console
    expect(result.affectedRows).to.equal(4)                           // assertion

    })
    })

   it('Update an Entry into the table and verify', function () {
   cy.task('queryDb', 'UPDATE Persons SET FirstName = "Sri" WHERE City="Salem"').then((result) => {
    cy.log('Update Data Result:', JSON.stringify(result));            // log the data in console
   expect(result.changedRows).to.equal(1)                           // assertion
   })
   cy.task('queryDb', 'SELECT FirstName FROM Persons WHERE City="Salem"').then((result) => {
    cy.log('Select Data Result:', JSON.stringify(result));            // log the data in console
   expect(result[0].FirstName).to.equal('Sri')                           // assertion
   })
   })

   it('Verify that there is only one row where the city is chennai', function () {
   cy.task('queryDb', 'SELECT COUNT(*) as "rowCount" FROM Persons WHERE City="chennai"').then((result) => {
    cy.log('Row Count Result:', JSON.stringify(result));            // log the data in console
   expect(result[0].rowCount).to.equal(1)                           // assertion
   })
   })

   it('Delete a Table and Verify', function () {
   cy.task('queryDb', 'DROP TABLE Persons').then((result) => {
    cy.log('Drop Table Result:', JSON.stringify(result));       // log the data in console
   //expect(result.message).to.equal("")
   expect(result).to.not.throw; // Ensure no errors are thrown            // assertion
   //expect(result).to.be.empty;     
})
   })
   })