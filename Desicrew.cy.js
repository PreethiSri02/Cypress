Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Desicrew',function(){
    before(function(){
        cy.fixture('Desicrew').then(function(data){    // Fixture data
            this.data=data                                 
        });
    });
it('Login',function(){
    cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex');
    cy.title().should('contain','Employee Information Portal');
    cy.url().should('include',this.data.Url);
    cy.get("div[id='login-box'] div h4[class='center']").should('contain.text','Login');
    cy.wait(2000);
    cy.get('#Username').should('be.visible').type(this.data.Username);
    cy.get('#Password').should('be.visible').type(this.data.Password);
    cy.get('.forgot-password-link').should('exist');
    cy.get('#btnLogin').should('be.enabled').click({force : true});
    cy.wait(2000);

// Left menu
    cy.url().should('include',this.data.HomeUrl);
    cy.get("a[class='navbar-brand'] small").should('contain.text','DesiCrew Solutions Pvt Ltd');
    cy.get('#sidebar-shortcuts-mini').should('be.visible');
    cy.get('.menu-icon.fa.fa.fa-home').should('be.visible');       //Home
    cy.get('.menu-icon.fa.fa.fa-calendar').should('be.visible');   //Calendar
    cy.get('.menu-icon.fa.fa-users').should('be.visible')       //EIP
    cy.get('.menu-icon.fa.fa-tasks').should('be.visible')       //Tasks  
    cy.get('.menu-icon.fa.fa-sign-out').should('be.visible');   //Exit
    cy.get('.menu-icon.fa.fa-bullhorn').should('be.visible');   //Grievance
    cy.get('.menu-icon.fa.fa-question').should('be.visible');   //Ticketing
    cy.get('.menu-icon.fa.fa-clock-o').should('be.visible');    //Attendance  
    cy.get('#sidebar-toggle-icon').should('be.visible');
// Centre options
    cy.get('.btn.btn-success.btn-app.btn-sm.btn-block.btn-card-type.initPageDone')
    .should('be.visible').should('contain.text','ESS');
    cy.get('.btn.btn-primary.btn-app.btn-sm.btn-block.btn-card-type.initPageDone.active')
    .should('be.visible').should('contain.text','MSS');
    cy.get('.btn.btn-purple.btn-app.btn-sm.btn-block.btn-card-type').should('be.visible')
    .should('contain.text','Information');
// User dropdown
    cy.get(".dropdown-toggle[data-toggle='dropdown']").should('contain.text','Welcome')
    .and('contain.text',this.data.UserName)
    .click({force:true});
    cy.get("a[href='/Account/CardSettings']").should('exist');
    cy.get("a[href='/Account/ChangePassword?returnUrl=%2FHome%2FIndex']").should('exist');
    cy.get("a[href='/Account/UserInfo']").should('exist');
    cy.get("a[href='/Home/ChangeUIVersion/1?returnUrl=%2FHome%2FIndex']").should('exist');
//Log out
    cy.get("a[href='/Account/Logout']").should('exist').click({force:true});
    cy.wait(1000);
    cy.url().should('eq',this.data.Url);   
})
 
it.only('Services & Solutions', function () {
    cy.visit('https://desicrew.in/');
    
    // Set viewport to full screen
    cy.viewport(1920, 1080); // You can adjust the resolution as needed
    
    // Alternative: Resize browser window dynamically
    cy.window().then(win => {
        win.resizeTo(1920, 1080); // Set width and height
    });
    cy.get('.elementor-sticky--active > .elementor-element-3f72148 > .elementor-widget-container > a > .attachment-full')
    .should('be.visible');
    cy.get('.elementor-sticky--active > .elementor-element-aeb515c > .elementor-widget-container > .elementor-nav-menu--main')
    .should('be.visible');
    cy.get('.elementor-sticky--active > .elementor-element-4afcd71 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text')
    .should('be.visible').click({force:true});

    cy.wait(3000);
    cy.get('.elementor-element-ea6ec6a > .elementor-element > .elementor-widget-container > .elementor-heading-title')
    .should('be.visible');
    cy.get('#form-field-first_name').should('be.visible').type("Preethi");
    cy.get('#form-field-field_c3d76e4').should('be.visible').type("Srinivasan");
    cy.get('#form-field-email').should('be.visible').type("abc@gmail.in");
    cy.get('#form-field-phone_number').should('be.visible').type("9874563210");
    cy.get('#form-field-comapny_name').should('be.visible').type("ABC");
    cy.get('#form-field-how_can_we_help').should('be.visible').type("Testing");
    cy.get('#form-field-field_66094c6-2').should('be.visible').check();
    cy.get('.elementor-field-type-submit > .elementor-button').should('be.visible');

// Services   
    cy.get('.elementor-element-47deeee').scrollIntoView().should('be.visible');
    cy.get('.elementor-element-be5c397 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text')
    .should('be.visible').and('contain.text','Software Testing')
    cy.get('.elementor-element-be5c397 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text')
    .should('be.visible').and('contain.text','Computer Vision')
    cy.get('.elementor-element-be5c397 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text')
    .should('be.visible').and('contain.text','IT Automation')
    cy.get('.elementor-element-be5c397 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(5) > a > .elementor-icon-list-text')
    .should('be.visible').and('contain.text','Finance & Accounting')
   
    cy.get('.elementor-element-be5c397 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(4) > a > .elementor-icon-list-text')
    .should('be.visible').and('contain.text','LLM Support Services').click({force : true});
    cy.wait(2000);
    
    cy.url().should('eq','https://desicrew.in/solution/llm-support-services-lang-ops/');
    cy.get('.elementor-image-box-title').should('be.visible').and('contain.text','Reliable LLM Support');
    cy.get('.elementor-element-36c7806 > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text')
    .should('be.visible').click({force : true});
    cy.get('.elementor-element-3b797e1').should('be.visible').and('contain.text','DesiCrew Hub for Intelligent Solutions for Humanizing AI');
    cy.get('.elementor-element-2874048e > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text')
    .should('be.visible');

// Solutions
    cy.go(-2);
    // Ignore uncaught exceptions from cross-origin scripts
    Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Script error.")) {
        return false; // Prevent test failure due to cross-origin errors
    }
    return true; // Let Cypress fail for other errors
});
    cy.get('.elementor-element-be5c397 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text')
    .should('be.visible')
    .and('contain.text', 'Software Testing')
    .click({ force: true });

    cy.url().should('eq', 'https://desicrew.in/solution/software-testing/');
    cy.get('.elementor-element-8fc49b3')
    .should('be.visible')
    .and('contain.text', 'Superior Software Testing');

    cy.get('.elementor-element-36c7806 > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text')
    .should('be.visible')
    .click({ force: true });

cy.wait(3000);

// Handle cross-origin navigation
cy.origin('https://www.qaoncloud.com', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes("Script error.")) {
            return false; // Prevent test failure due to cross-origin errors
        }
        return true;
    });
    cy.get("[class='elementor-button-text']").should('be.visible').click();
    cy.wait(3000);
    cy.get("[name='name']").eq(0).should('be.visible').type("Preethi123");
    cy.get("[name='email']").eq(0).should('be.visible').type("preethiqa@gmail.com");
    cy.get("[name='phone']").eq(0).should('be.visible').type("9629466261");
    cy.get("[name='companyname']").eq(0).should('be.visible').type("ABC company");
    cy.get("[name='role']").eq(0).should('be.visible').type("QA");
    cy.get("[name='requirements']").eq(0).should('be.visible').type("XYZ");
});
})
})