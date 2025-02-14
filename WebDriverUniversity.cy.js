describe('1)WebdriverUniversity',function(){

it('1. Contact Us',function(){
    cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get("h2[name='contactme']").should('be.visible').and('contain.text','CONTACT US');
    cy.get("input[placeholder='First Name']").should('be.visible').type('Preethi');
    cy.get("input[placeholder='Last Name']").should('be.visible').type('Srinivasan');
    cy.get("input[placeholder='Email Address']").should('be.visible').type('preethi@qaoncloud.com');
    cy.get("textarea[placeholder='Comments']").should('be.visible').type('ABC');
    cy.get("input[value='RESET']").should('exist');
    cy.get("input[value='SUBMIT']").should('exist')
    .click({force:true});
    cy.wait(2000);
    cy.url().should('eq','http://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
    cy.get('h1').should('contain.text','Thank You for your Message!');
 
    cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.wait(2000);
    cy.get('#nav-title').should('be.visible').and('contain.text','WebdriverUniversity.com (New Approach To Learning)')
    .click();
    cy.get('#udemy-promo-thumbnail').should('be.visible')

    cy.get('#contact-us > .thumbnail').should('be.visible')
    cy.get('#login-portal > .thumbnail').should('be.visible')
    cy.get('#button-clicks > .thumbnail').should('be.visible')
    cy.get('#to-do-list > .thumbnail').should('be.visible')
    cy.get('#to-do-list > .thumbnail').should('be.visible')
    cy.get(':nth-child(5) > #page-object-model > .thumbnail').should('be.visible')
    cy.get(':nth-child(6) > #page-object-model > .thumbnail').should('be.visible')
    cy.get('#dropdown-checkboxes-radiobuttons > .thumbnail').should('be.visible')
    cy.get('#ajax-loader > .thumbnail').should('be.visible')
    cy.get('#actions > .thumbnail').should('be.visible')
    cy.get('#scrolling-around > .thumbnail').should('be.visible')
    cy.get('#popup-alerts > .thumbnail').should('be.visible')
    cy.get('#iframe > .thumbnail')
    cy.get('#hidden-elements > .thumbnail').should('be.visible')
    cy.get('#data-table > .thumbnail').should('be.visible')
    cy.get('#autocomplete-textfield > .thumbnail').should('be.visible')
    cy.get('#file-upload > .thumbnail').should('be.visible')
    cy.get('#datepicker > .thumbnail').should('be.visible')
})

it('2. Login-Portal', function () {
    cy.visit('http://webdriveruniversity.com/Login-Portal/index.html?');
    cy.url().should('include', 'Login-Portal');
    cy.get('.bg-bubbles').should('be.visible');
    cy.get('#text').should('be.visible').type('Preethi');
    cy.get('#password').should('be.visible').type('12345');
    cy.wait(1000);
    // Spy on alert to ensure Cypress detects it
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get('#login-button').click({ force: true }).then(() => {
        expect(alertStub).to.have.been.calledWith('validation failed'); // Validate alert text
        });
    });
});

describe('2. WebdriverUniversity- Click Buttons Automation', () => {
  
    beforeEach(() => {
        cy.visit('http://webdriveruniversity.com/Click-Buttons/index.html');
        cy.url().should('include', 'Click-Buttons');
    });

    it('1. WebElement Click -xpath', () => {
        cy.get("div[class='row'] div:nth-child(1) div:nth-child(1) h2:nth-child(1)").should('be.visible').and('contain.text','WebElement Click');
    // Use XPath
        cy.xpath("//p[normalize-space()='CLICK ME!']").click();         
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Congratulations! Well done for successfully using the click() method!');  // Validate alert text  
        });
        cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-footer > .btn').click();        //close the alert
    });

    it('2.JavaScript Click', () => {
        cy.get("div[class='row'] div:nth-child(2) div:nth-child(1) h2:nth-child(1)").should('be.visible').and('contain.text','JavaScript Click');
    // Use JavaScript .invole(click)
        cy.get('#button2').invoke('click');         
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal("It’s that Easy!! Well I think it is.....");  // Validate alert text            
        });
        cy.get('#myModalJSClick > .modal-dialog > .modal-content > .modal-footer > .btn').click();      //close the alert
    });

    it('3.Action Move & Click', () => {
        cy.get("div[class='row'] div:nth-child(3) div:nth-child(1) h2:nth-child(1)").should('be.visible').and('contain.text','Action Move & Click');
    // Hover before clicking
        cy.get('#button3').trigger('mouseover').click();            
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal("Well done! the Action Move & Click can become very useful!");  // Validate alert text          
        });
        cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-footer > .btn').click();    //close the alert
    });
});
