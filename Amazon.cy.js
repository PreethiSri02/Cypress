    describe("Amazon", function () {

beforeEach(function() {  
  cy.clearCookies();
  cy.clearLocalStorage();
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
      cy.wait(3000);
      cy.get("#nav-link-accountList").should("be.visible").click("center");
      cy.wait(2000);
      cy.contains("Create your Amazon account").click({ force: true });
      cy.wait(2000);
      cy.get("#ap_customer_name").type("Preethi", { timeout: 1000 });
      cy.get("#ap_phone_number").type("1234569870", { timeout: 1000 });
      cy.get("#ap_password").type("preethi@000", { timeout: 1000 });
      cy.get("#continue").should("be.visible");
    });

    it('login', () =>{
      cy.wait(5000);
      cy.get("#nav-link-accountList").should("be.visible").click("center");
      cy.wait(5000);
      cy.get('#ap_email_login').should("be.visible").type("9629466261");
      cy.wait(2000);
      cy.get("#continue").should("be.visible").click("center");
      cy.get("#ap_password").clear();
      cy.get("#ap_password").should("be.visible").type("nozama");
      cy.get("#signInSubmit").click({ force: true });
    });
  
    it('Search Product-1 and Add to cart', () => {
      cy.get("#twotabsearchtextbox").should("be.visible").type("windchimes");
      cy.get("#nav-search-submit-button").should("be.visible").click();
      cy.wait(5000);
      cy.get("h2[aria-label='Paradigm Pictures Home Decoration Items Wind Chimes for Home (Golden,Pipe & Hanging Bells)']")
      .scrollIntoView().should('exist').click({force : true});
      cy.visit("https://www.amazon.in/Paradigm-Originals-Positive-Balcony-Bedroom/dp/B07CHKNRN2/ref=sr_1_9?crid=3PP2KADIIGWH2&dib=eyJ2IjoiMSJ9.ifaBGakBq1bbs9d1qbdCIHK6UXBIdR8OP6BqVJcFb40MX_Qw0t1wow6bUodziE04rl0Mal7KVQzK1At-w-ISaqhUpHM4q--OjT_pIK4uQeQaZIB3iaFnX1V-e6XczKBq39IfzXI3KqLebk7elTBXrilvI_pTn-IZ50pnoSANtB4tybkwxKT2Y0_Aalj9eoo4n8CsjA8DUgvfubpaTFI2meBjpBIEUNC-tyzxCWdv9y6G1zeEye6XWDvDbqpZ1VU3HpKj1O7BQSq9rdLE3NDV7taGWuhrayJrKhTs7IcrSG2A33HOms3pBWQWPPi_ZQ2HOQer5ejnyCeKNpWoyUpoDzYMwkLtcxPdX4sjlbeUkwb_9ud3CWPell9Bz9GOp_Uux101GLUwA_Z5lQ7GtKDZff3ONOGHtYK7u2-2mY_Gely8ala2lP5zNXZwYwhmNGMK.lTSHR0KPWz2QsAzKvIPK9mXTq_L-3EsX70ovNbfrXjE&dib_tag=se&keywords=windchimes&qid=1737789248&sprefix=wi%2Caps%2C1157&sr=8-9")
      cy.wait(5000);
      cy.get('#add-to-cart-button').scrollIntoView().should('exist').click({force : true});
      cy.wait(3000);
      cy.get("h1[class='a-size-medium-plus a-color-base sw-atc-text a-text-bold']").should('be.visible').and('contain.text', 'Added to cart');
    });
  
    it.skip('Search Product-2 and Add to cart', () => {
      cy.get("#twotabsearchtextbox").should("be.visible").type("Wizard stick");
      cy.get("#nav-search-submit-button").should("be.visible").click();
      // cy.go(-1);       // navigate backward
      cy.wait(5000);
      cy.get("h2[aria-label='MilesMagic Harry Potter Wands | Light Up Wizard Wand Halloween Cosplay Accessories Witchcraft Magic Stick For Harrypotter Fans Sorcerer Spell Gifts | 33 Cm | (Moody),Multicolor']")
      .scrollIntoView().should('exist').click({force : true});
      cy.visit("https://www.amazon.in/MilesMagic-Halloween-Magicians-Witchcraft-Accessory/dp/B0BDX73CLJ/ref=sr_1_19?crid=13IIHQSA8OX3B&dib=eyJ2IjoiMSJ9.mRkW5dHDLzJmbUA2mKlG5F5Erct1zaN9mEYU17YRZBEK52fTfd9AiPYiLJsvuvEvRN5VJWq1WLCJD3v5rf2N82YWismSN50UFefZPtUD7-ns2HxsbHsVU0hFqYSrc8aQn8LUyxbCV4CDaJSZNnvTWuPEFokMBueVpAzU5BeZPR7wxwGkoPTgMlzz75d5mKoBQ-tUlYHSwNikcVtMJOMAh5Ib1k9FXNhVK8k4W7tQnItD2u9OBUVRz7AqR1PNwo5Jn1_o73KEw5cB4XC5iXJ9R8XTxYdwjRCxaAMgBWfCas02WlnYHXXro8NZgSvQRf7hLlzERG0VYDZ0t9hkqn0BmatGI8mo9NmLHZLDSqeQL5d0R-THM08KMaxtmnv_NbU-6yVuzQOYcZJLnndtarxo3kkpvRlMzC1ZXrXuKku1ywPsLFcRcPj9I-JMJ24JIO0S.Y8mtGw2dHnWaapY-cOAbaHS64Th_7KvjYlmZ4sh2KA8&dib_tag=se&keywords=Wizard%2Bstick&qid=1737787232&sprefix=%2Caps%2C584&sr=8-19&th=1")
      cy.wait(5000);
      cy.get('#add-to-cart-button').scrollIntoView().should('exist').click({force : true});
      cy.wait(3000);
      cy.get("h1[class='a-size-medium-plus a-color-base sw-atc-text a-text-bold']")
      .should('be.visible').and('contain.text', 'Added to cart');
    });
  });




    
