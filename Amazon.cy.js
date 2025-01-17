    describe("Amazon", function () {

beforeEach(function() {  
    cy.visit("https://www.amazon.in/ ");
    cy.title().should("eq", "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
    cy.url().should("include", "amazon");
        })

    it('Homepage', () => {
      cy.get("#nav-hamburger-menu").should("be.visible");
      cy.get("#nav-xshop > a:nth-child(2)").should("be.visible");
      cy.get("#nav-xshop > a:nth-child(3)").should("be.visible");
      cy.get("#nav-xshop > a:nth-child(4)").should("be.visible");
      cy.get("#nav-xshop > a:nth-child(5)").should("be.visible");
      cy.get("#nav-xshop > a:nth-child(6)").should("be.visible");
    });

    it('Sign up', () => {
      cy.get("#nav-link-accountList").should("be.visible").click("center");
      cy.contains("Create your Amazon account").click({ force: true });
      cy.wait(1000);
      cy.get("#ap_customer_name").type("Preethi", { timeout: 1000 });
      cy.get("#ap_phone_number").type("1234569870", { timeout: 1000 });
      cy.get("#ap_password").type("preethi@000", { timeout: 1000 });
      cy.get("#continue").should("be.visible");
    });

    it('login', () =>{
      cy.wait(5000);
      cy.get("#nav-link-accountList").should("be.visible").click("center");
      cy.wait(1000);
      cy.get("#ap_email").should("be.visible").type("9629466261");
      cy.get("#continue").should("be.visible").click("center");
      cy.get("#ap_password").clear();
      cy.get("#ap_password").should("be.visible").type("nozama");
      cy.get("#signInSubmit").click({ force: true });
    });
  
    it('Search Products', () => {
      cy.get("#twotabsearchtextbox").should("be.visible").type("windchimes");
      cy.get("#nav-search-submit-button").should("be.visible").click();
      cy.wait(5000);
      cy.go(-1);
      cy.get("#twotabsearchtextbox").should("be.visible").type("Trolley");
      cy.get("#nav-search-submit-button").should("be.visible").click();
      cy.go(-1);
      cy.wait(5000);
      cy.get("#twotabsearchtextbox").should("be.visible").type("Wizard stick");
      cy.get("#nav-search-submit-button").should("be.visible").click();
      cy.go(-1);
      cy.title().should("eq", "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
    });

  })


    