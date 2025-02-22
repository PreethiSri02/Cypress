describe('Single file upload - 3 scenarios',function(){

    beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.title().should('eq','The Internet');
        cy.url().should('include','herokuapp');
        cy.get("div[class='example'] h3").should('have.text','File Uploader');
        cy.get("div[class='example'] p")
        .should('have.text','Choose a file on your system and then click upload. Or, drag and drop a file into the area below.');    
    });

    it('Single file Upload',function(){
    // Upload single file from the fixtures folder
        const fileName = 'AdactinData.xlsx';
        cy.wait(1000);
        cy.get('#file-upload').should('be.visible').attachFile(fileName);   // Locate 'choose files' button and attach file
        cy.log("Attached File: " + fileName);
        cy.wait(1000);
        cy.get('#file-submit').should('be.visible').click({force:true})     // Upload button
    // Validate if file was uploaded
        cy.wait(1000);
        cy.get('#content').should('be.visible');
        cy.get('h3').should('have.text','File Uploaded!');
        cy.get('#uploaded-files')
        .invoke('text')                 // Get the text content
        .then((text) => text.trim())    // Trim any extra spaces or newlines
        .should('include', fileName);    
    });

    it('Drag and Drop',function(){
    // Upload single file from the fixtures folder
        const fileName = 'AdactinData.xlsx';
        cy.wait(1000);
        cy.get('#drag-drop-upload').attachFile(fileName, { subjectType: 'drag-n-drop' });
        cy.log("Attached file in Drop Area: " + fileName);
        cy.get('#drag-drop-upload')
        .invoke('text')            // Get the text content
        .then((text) => text.replace(/\s+/g, ' ').trim())   // Normalize whitespace and extra characters
        .should('include', fileName);  
    });

    it('Upload a file with a different name', function () {

        const originalFile = 'AdactinData.xlsx';    // File in fixtures folder
        const renamedFile  = 'TestFile.xlsx';        // New name during upload

    // Upload the file but rename it before submission
        cy.get('#file-upload').should('be.visible').attachFile({ filePath: originalFile, fileName: renamedFile });
        cy.wait(1000);
        cy.get('#file-submit').should('be.visible').click({force:true})     // Upload button
    // Validate the uploaded file name is displayed as the renamed one
        cy.get('#uploaded-files')
            .invoke('text')
            .then((text) => text.trim())
            .should('eq', renamedFile);
    });
});