describe('Multiple files upload',function(){

    beforeEach(function(){
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.title().should('eq','Multiple File Upload Input Example');
        cy.url().should('include','davidwalsh');
    })
        it('Mulitple files',function(){
        cy.get("div[class='demo-wrapper'] h1").should('have.text','Demo:  Multiple File Upload Input');
        cy.xpath("//strong[normalize-space()='Upload Files:']").should('have.text','Upload Files:');
        cy.get("ul[id='fileList'] li").should('have.text','No Files Selected');
        cy.wait(2000);
    // Upload multiple files from the fixtures folder
        const fileNames = ['AdactinData.xlsx', 'Allocations.xlsx', 'Rates Data.xlsx'];
        cy.wait(2000);
        cy.get('#filesToUpload').should('be.visible').attachFile(fileNames);        // Locate 'choose files' button and attach files
        cy.wait(2000);
    // Validate if files were uploaded
        cy.get('#fileList').should('be.visible').invoke('text').then((attachedfiles)=>{
            cy.log("Attached Files: " + attachedfiles);     // Log the attached file names
        })
    });
});