const price = 299;

describe('Flipkart',function(){
    before(function(){
        cy.fixture('flipkart').then(function(data){    // Fixture data
            this.data=data                                 
        });
    });
   beforeEach(function(){
            cy.visit('https://www.flipkart.com/', { failOnStatusCode: false });
            cy.url().should('include', 'flipkart');
            cy.title().should('include', 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');  
        });  

it('Login',function(){
    cy.get('._1jKL3b').should('exist').click({ force: true });          // Login button
    cy.get('.azBkHf').should('be.visible').click({ force: true });      // login in
    cy.wait(2000);
    cy.get("a[class='QqFHMw twnTnD OD+dVw']").should('be.visible').click({ force: true });      // Existing user
    cy.get('.r4vIwl').should('be.visible').type(this.data.phone);       // phone number
    cy.get('.QqFHMw').should('be.visible').click();                     // Request OTP button
    })

it.skip('SignUp',function(){
        cy.get('._1jKL3b').should('exist').click({ force: true });          // Login button
        cy.get('.azBkHf').should('be.visible').click({ force: true });      // login in
        cy.wait(2000);
        cy.get("a[class='QqFHMw twnTnD OD+dVw']").should('be.visible').click({ force: true });      // Existing user
        cy.get('.r4vIwl').should('be.visible').type(this.data.phone);       // phone number
        cy.get('.QqFHMw').should('be.visible').click();                     // Request OTP button
        })

it('Home Page',function(){
    cy.wait(3000);
    cy.get("a[aria-label='Kilos'] div div[class='YBLJE4']").should('exist');
    cy.get("a[aria-label='Mobiles'] div div[class='YBLJE4']").should('exist');
    cy.get("div[aria-label='Fashion'] div div[class='YBLJE4']").should('exist');
    cy.get("div[aria-label='Electronics'] div div[class='YBLJE4']").should('exist');
    cy.get("div[aria-label='Home & Furniture'] div div[class='YBLJE4']").should('exist');
    cy.get("a[aria-label='Appliances'] div div[class='YBLJE4']").should('exist');
    cy.get("a[aria-label='Flight Bookings'] div div[class='YBLJE4']").should('exist');
    cy.get("div[aria-label='Beauty, Toys & More'] div div[class='YBLJE4']").should('exist');
    cy.get("div[aria-label='Two Wheelers'] div div[class='YBLJE4']").should('exist');
    cy.get("input[placeholder='Search for Products, Brands and More']").should('exist');
})

it('Search Product, Add to cart', function () {
    cy.viewport(1280, 800); // Set viewport to a larger screen

    cy.get("input[placeholder='Search for Products, Brands and More']")
        .should('be.visible')
        .type('Windchimes{enter}');
    cy.wait(5000);

    // Remove target="_blank" from the link before clicking
    cy.get('[data-id="WCHGVFDH9UHZAPNV"] > .slAVV4 > .wjcEIp')
        .invoke('removeAttr', 'target')
        .click({ force: true });
    cy.wait(5000);

    // Verify product details
    cy.get('.VU-ZEz').should('contain.text', 'Buyab factory Wood, Stainless Steel Windchime');

     // Click Add to Cart Button
     cy.wait(5000);
     cy.get('.aRL84z > .QqFHMw')
     .scrollIntoView()
     .should('exist')
     .should('be.visible')
     .dblclick({ force: true });
   
    // Verify the added product
    cy.get('.JxFEK3').should('contain.text', 'Buyab factory Wood, Stainless Steel Windchime')
    .and('contain.text', price)
    .and('contain.text','Buyab factory Wood, Stainless Steel Windchime');

    // Total Calculation
    cy.wait(10000);
    cy.get('.WMMwb0').should('exist').should('contain.text', 'Price details');
    cy.get('._3j-e05 > :nth-child(3)').should('contain.text', 'Free');
    cy.get('form > .QqFHMw').should('exist');
});

});