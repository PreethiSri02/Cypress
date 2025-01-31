Cypress.on("uncaught:exception", (err) => {
    console.error("Uncaught Exception:", err);
    return false; // Prevent test from failing
  });
describe('Swaglab Website', function () {

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://www.saucedemo.com');
        cy.get('input[id="user-name"]').should('be.visible').type("visual_user");
        cy.get('[id="password"]').should('be.visible').type("secret_sauce");
        cy.get('[id="login-button"]').should('be.enabled').click();
        });

it("Add to cart (A to Z)", function ()  {
        cy.get("#header_container > div.header_secondary_container > div.right_component > span > select").select("Name (A to Z)");
        cy.get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]').scrollIntoView()
        .should('be.visible').and('contain.text','Sauce Labs Fleece Jacket').click({force : true});
        cy.get('[data-test="add-to-cart"]').should('be.visible').click({force : true});
        cy.get('#back-to-products').click({force : true});
        cy.wait(2000);

    //  });
// it("Add to cart (Z to A)", function ()  {
        cy.get("#header_container > div.header_secondary_container > div.right_component > span > select").select("Name (Z to A)");
        cy.get("a[id='item_4_title_link'] div[class='inventory_item_name ']").scrollIntoView()
        .should('be.visible').and('contain.text','Sauce Labs Backpack').click({force : true});
        cy.get('[data-test="add-to-cart"]').should('be.visible').click({force : true});
        cy.get('#back-to-products').click({force : true});
        cy.wait(2000);
        //  });

//  it("Add to cart (Price low to high)", function ()  {
        cy.get("#header_container > div.header_secondary_container > div.right_component > span > select").select("Price (low to high)");
        cy.get("a[id='item_2_title_link'] div[class='inventory_item_name ']").scrollIntoView()
        .should('be.visible').and('contain.text','Sauce Labs Onesie').click({force : true});
        cy.get('[data-test="add-to-cart"]').should('be.visible').click({force : true});
        cy.get('#back-to-products').click({force : true});
        cy.wait(2000);
        //  });

// it("Add to cart (Price high to low)", function ()  {
        cy.get("#header_container > div.header_secondary_container > div.right_component > span > select").select("Price (high to low)");
        cy.get("a[id='item_3_title_link'] div[class='inventory_item_name ']").scrollIntoView()
        .should('be.visible').and('contain.text','Sauce Labs Fleece Jacket').click({force : true});
        cy.get('[data-test="add-to-cart"]').should('be.visible').click({force : true});
        cy.get('#back-to-products').click({force : true});
        cy.wait(2000);
        //  });
// it("My cart ", function ()  {
cy.get('.shopping_cart_link').should('exist').click({force : true});
cy.get('.title').should('contain.text','Your Cart');

});
});



