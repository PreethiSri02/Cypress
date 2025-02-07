const baseUrl = "https://restful-booker.herokuapp.com";

describe('Restful Booker PUT & PATCH & DELETE', () => {

  let bookingid;  // Declare globally to share between tests
  let authToken;  // Declare globally to store the generated token
  let UserId;     // Declare globally for use in both tests

  before(() => {  // Use hooks to create token and create booking before all it blocks and by storing the created token & booking id globally, other it blocks can access them without creating token and booking again
// 1. Create a token
    const tokenID = {
      "username": "admin",
      "password": "password123"
    };

    cy.request("POST", `${baseUrl}/auth`, tokenID).then((response) => {
      expect(response.status).to.eq(200);
      authToken = response.body.token;  // Store the token
      cy.log("Token:", authToken);

// 2. Create Booking
      const Booking = {
        "firstname": "Preethi",
        "lastname": "Srinivasan",
        "totalprice": 1500,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2025-05-01",
          "checkout": "2025-05-06"
        },
        "additionalneeds": "Breakfast"
      };

      cy.request("POST", `${baseUrl}/booking`, Booking).then((response) => {
        expect(response.status).to.eq(200);
        bookingid = response.body.bookingid;    // Store booking ID
        UserId = bookingid;                     // Assign globally
        cy.log("Booking ID:", UserId);
      });
    });
  });

  it('PUT-Update Booking', function () {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/booking/${UserId}`,
      headers: {
        "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
      },
      body: {
        "firstname": "Maya",
        "lastname": "Krishnan",
        "totalprice": 2000,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2028-03-02",
          "checkout": "2028-03-08"
        },
        "additionalneeds": "Lunch"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.firstname).equal("Maya");
      expect(response.body.lastname).to.eq("Krishnan");
      expect(response.body.totalprice).equal(2000);
      expect(response.body.depositpaid).equal(true);
      expect(response.body.bookingdates.checkin).equal("2028-03-02");
      expect(response.body.bookingdates.checkout).equal("2028-03-08");
      expect(response.body.additionalneeds).equal("Lunch");
    });
  });

  it('PATCH-Partial Update Booking', () => {
    cy.request({
      method: 'PATCH',
      url: `${baseUrl}/booking/${UserId}`,
      headers: {
        "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
      },
      body: {
        "firstname": "Dev",
        "totalprice": 1000,
        "additionalneeds": "Dinner"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);   
      expect(response.body.firstname).equal("Dev");
      expect(response.body.totalprice).equal(1000);
      expect(response.body.additionalneeds).equal("Dinner");
    });
  });

  it("DELETE - Delete the existing booking using UserId", function () {
    cy.request({
        method: "DELETE",
        url: `${baseUrl}/booking/${UserId}`,
        headers: {
            "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
        }
    }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.eq('Created');
        cy.log(JSON.stringify(response));
    });
});

it('GET - Ping-HealthCheck',function(){
    cy.request("GET", `${baseUrl}/ping`).then((response)=>{  
        expect(response.status).to.eq(201) 
        expect(response.body).to.eq('Created');
        cy.log(JSON.stringify(response)) 
    });
});


});

