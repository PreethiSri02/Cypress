let createdPostId; // Variable to store the created post's ID;

describe('Json Placeholder API', function () {

it('GET - 1. Validate first post from Json', function () {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {     
        var user = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                };
    expect(response.status).to.eq(200);
    expect(response.body[0].userId).to.eq(user.userId); // 0 = first object from json
    expect(response.body[0].id).to.eq(user.id);
    expect(response.body[0].title).to.eq(user.title);
    expect(response.body[0].body).to.eq(user.body);
    cy.log(JSON.stringify(response.body[0]));       // Logging only first object
    cy.log(JSON.stringify(response.body));          // Logging all objects
        });
    });
    
it('GET - 2. Validate PostID 1 from Json',function(){
    // Either define response body as 'var' or load the data in the assertion from Json
    cy.request('GET','https://jsonplaceholder.typicode.com/posts/1').then((response)=>{  // '1' at the end of the URL is the Post ID
        expect(response.status).to.eq(200);
        expect(response.body.userId).to.eq(1);
        expect(response.body.id).to.eq(1);
        expect(response.body.title).to.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
        expect(response.body.body).to.eq('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
        cy.log(JSON.stringify(response.body))
        })
    })

it('GET - 3. Validate response structure and comment data of Post 1 as specified in Url', function () {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments').then((response) => {
            expect(response.status).to.eq(200);
    // Validate response is an array - When the response starts with '[' and ends with ']', indicating an array.
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.at.least(5);      // Validate the array contains at least 5 comments
    // Validate each comment has required properties
        response.body.forEach((comment) => {
            expect(comment).to.have.all.keys('postId', 'id', 'name', 'email', 'body');
            });
    // Validate specific comment (First comment)
        const firstComment = response.body[0];
        expect(firstComment.postId).to.eq(1);
        expect(firstComment.id).to.eq(1);
        expect(firstComment.name).to.eq("id labore ex et quam laborum");
        expect(firstComment.email).to.eq("Eliseo@gardner.biz");
        expect(firstComment.body).to.eq("laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium");
        cy.log(JSON.stringify(response.body));
        });
    });

it('GET - 4. Validate response structure and comments filtered by postId=1', function () {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/comments?postId=1').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');        //When the response starts with '[' and ends with ']', indicates an array.
        expect(response.body.length).to.be.at.least(5);      // Validate the array contains at least 5 comments
// Validate each comment has required properties and postId = 1
        response.body.forEach((comment) => {
            expect(comment).to.have.all.keys('postId', 'id', 'name', 'email', 'body');
            expect(comment.postId).to.eq(1);            // Ensure postId is always 1
                });
        cy.log(JSON.stringify(response.body));
            });
        });
 
it('POST - Create a new post and store its ID', function () {
    var newPost = {
        "userId": 5,
        "title": "Manual Title 5",
        "body": "Manual Body 5"
            };       
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', newPost).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.userId).to.eq(newPost.userId);
        expect(response.body.title).to.eq(newPost.title);
        expect(response.body.body).to.eq(newPost.body);
    // Store the created post's ID
        createdPostId = response.body.id;  
        cy.log("Created Post ID: " + createdPostId);
            });
        });
              
it('PUT - Update existing post', function () {
    var updatedUser = {
        "userId": 8,
        "title": "Updated Title 8",
        "body": "Updated Body 8"
            };
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', updatedUser).then((response) => {
        expect(response.status).to.eq(200);         // PUT and PATCH return either 200 or 204 status code
        expect(response.body.userId).to.eq(updatedUser.userId);
        expect(response.body.title).to.eq(updatedUser.title);
        expect(response.body.body).to.eq(updatedUser.body);
    // JSONPlaceholder always returns the same id in PUT responses
        expect(response.body.id).to.eq(1);
        cy.log(JSON.stringify(response.body));   // Log response body
            });
        });
    
it('PATCH - Partiallly Update existing post', function () {
    var partiallyUpdatedUser = {
        "userId": 8,
        "title": "Partially Updated Title 8",
        "body": "Partially Updated Body 8"
    };
    cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', partiallyUpdatedUser).then((response) => {
    expect(response.status).to.eq(200);         // PUT and PATCH return either 200 or 204 status code
    expect(response.body.userId).to.eq(partiallyUpdatedUser.userId);
    expect(response.body.title).to.eq(partiallyUpdatedUser.title);
    expect(response.body.body).to.eq(partiallyUpdatedUser.body);
// JSONPlaceholder always returns the same id in PUT responses
    expect(response.body.id).to.eq(1);
    cy.log(JSON.stringify(response.body));   // Log response body
    });
});

it('DELETE - Delete the created post', function () {
    cy.request('DELETE', `https://jsonplaceholder.typicode.com/posts/${createdPostId}`).then((response) => {
    expect(response.status).to.eq(200);       // DELETE returns 200 status code
    });
});

});




