describe ('Swagger API',function(){
    const baseUrl = "https://petstore.swagger.io/v2/pet";
    const petID = 12345;
    const updatedpetId = 10001;  
    const petName = "Ronaldo";
    const updatedPetName = "Cristiano Ronaldo";
    const status = "Open for Sale";
    const updatedStatus = "sold";
 
    it("Uploads a file for a pet", function () {
        // Load the file from the fixtures folder
        cy.fixture("sample.txt", "binary").then((fileContent) => {
            const blob = Cypress.Blob.binaryStringToBlob(fileContent, "text/plain");
    
            const formData = new FormData();
            //"file" → API expects this key for file upload, "blob" → The actual file content, "sample.txt" - actual file
            formData.append("file", blob, "sample.txt");  
    
            cy.request({
                method: "POST",
                url: `${baseUrl}/${petID}/uploadImage`,
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                body: formData,
                encoding: "binary",
            }).then((response) => {
        // Assertions
            expect(response.status).to.eq(200);
            cy.log("File uploaded successfully!");
            });
        });
    });
    
    
// POST
    it("POST - Add a new pet to the store", () => {
        cy.request("POST", baseUrl, {
    // Replace the actual data            
           "id" : petID,
            "category": {
                "id": 1,
                "name": "Cat"
                },
            "name": petName,
            "tags": [
                {
                "id": 2,
                "name": "Hyper"
                  }],
            "status": status
        }).then((response) => {
     // Assertions
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(petName);
        expect(response.body.id).to.eq(petID);
        expect(response.body.status).to.eq(status);

        })
    })

// PUT
    it("PUT - Update an existing pet", () => {
    cy.request("PUT", baseUrl, {
       // Replace the actual data 
       "id" : updatedpetId,          
       "category": {
           "id": 1,
           "name": "Cat-updated"
           },
       "name": updatedPetName,
       "tags": [
           {
           "id": 2,
           "name": "Hyper-updated"
             }],
       "status": updatedStatus
    }).then((response) => {
    // Assertions
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(updatedPetName);
      expect(response.body.id).to.eq(updatedpetId);
      expect(response.body.status).to.eq(updatedStatus);
    });
  });

// GET
  it("GET - Fetch the pet details", () => {  
    // Define petId and name
    cy.request("GET", `${baseUrl}/${petID}`).then((response) => {  // load the variable data in the url
    // Assertions
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(petID);
        expect(response.body.name).to.eq(petName);
        expect(response.body.status).to.eq(status);

    });
});

// DELETE
    it("DELETE - Delete the existing pet using petID", function () {
    cy.request("DELETE", `https://petstore.swagger.io/v2/pet/${updatedpetId}`).then((response) => { // load the variable data in the 
    // Assertions    
        expect(response.status).to.eq(200);
        expect(response.body.code).to.eq(200);
    });
});

    });

