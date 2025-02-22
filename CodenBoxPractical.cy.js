import 'cypress-iframe';
import 'cypress-downloadfile/lib/downloadFileCommand';

describe('CodenBox Automation Lab', () => {

    it('CodenBox Automation', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.url().should('include','codenboxautomationlab');
        cy.get('.page-title').should('be.visible').and('contain.text','Automation Practice');

        cy.get("li[id='menu-item-62'] a").should('be.visible');
        cy.get('#menu-item-63 > [href="https://codenboxautomationlab.com/courses/"]').should('exist').trigger('mouseover');
        cy.get('#menu-item-72 > .sf-with-ul').should('exist').trigger('mouseover');
        cy.get('#menu-item-73 > .sf-with-ul').should('exist').trigger('mouseover');
        cy.get('#menu-item-202 > .sf-with-ul').should('exist').trigger('mouseover');

// Radio Button
        cy.xpath("//legend[normalize-space()='Radio Button Example']").should('contain.text','Radio Button Example');
        cy.get('input[value="radio1"]').check().should('be.checked');
        cy.get('input[value="radio2"]').check().should('be.checked');
        cy.get('input[value="radio3"]').check().should('be.checked');

// Dynamic Dropdown
        cy.get("div[id='select-class-example'] fieldset legend").should('contain.text','Dynamic Dropdown Example');
 
        cy.get('#autocomplete').type('Ind', { delay: 500 });
    // Wait for dropdown options to appear
        cy.get('.ui-menu-item div').should('be.visible');
    // Iterate through options and select "India"
        cy.get('.ui-menu-item div').each(($el) => {
            if ($el.text().trim() === 'India') {
                cy.wrap($el).click();
            }
        });
    // Verify that "India" is selected
        cy.get('#autocomplete').should('have.value', 'India');
        
// Static Dropdown
        cy.get(':nth-child(8) > :nth-child(3) > fieldset > legend').should('contain.text','Static Dropdown Example');
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1');
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2');
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3');

//Checkbox
        cy.get('#checkbox-example > fieldset > legend').should('contain.text', 'Checkbox Example');
        cy.get('#checkBoxOption1').check().should('be.checked');    // First checkbox
        cy.get('#checkBoxOption2').check().should('be.checked');     // Second checkbox
        cy.get('#checkBoxOption3').check().should('be.checked');    // Last checkbox

// Switch Window
        cy.xpath("//legend[normalize-space()='Switch Window Example']")
        .should('contain.text', 'Switch Window Example');
        cy.get('#openwindow').should('be.visible').click();
        cy.maximize();
        // Validate the new page
        cy.url().should('include', 'codenbox');

// Switch Tab
         // Verify 'Switch Tab Example' section
        cy.get("div[class='cen-align'] fieldset legend").should('contain.text', 'Switch Tab Example');
        cy.get('#opentab').should('exist').click({ force: true });
        cy.wait(2000);
        cy.visit('https://codenboxautomationlab.com/practice/');
        cy.wait(2000);

// Switch To Alert
        cy.get("fieldset[class='alert_example'] legend").scrollIntoView().should('contain.text', 'Switch To Alert Example');
        cy.get('#name').should('be.enabled').type('Preethi');
    // Handle JavaScript Alert (Not a Confirmation)
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal("Hello Preethi, share this practice page who love to learn automation");           
        });
        cy.get('#alertbtn').should('be.visible').click({ force: true });

        cy.get('#name').should('be.enabled').type('Preethi');
    // Handle JavaScript Confirm (Cancel Button)
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.equal("Hello Preethi, Are you sure you want to confirm?");
            return false; // Click 'Cancel'
        });
        cy.get('#confirmbtn').should('be.visible').click({ force: true });

// Verify a Web Table Entry
        cy.get('#product').should('exist');     // validate the table
    // Verify no.of rows and columns(header)
        cy.get("table[class='table-display']>tbody>tr").should('have.length', '12')
        cy.get("table[class='table-display'] > thead > tr > th:nth-child(1), th:nth-child(2), th:nth-child(3)").should('have.length', 2);
    // Validate data from table
        cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text','Instructor');
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain.text','Course');
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should('contain.text','Price');

        cy.get('tbody > :nth-child(2) > :nth-child(1)').should('contain.text','Sariful Islam');
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain.text','Selenium Webdriver with Java Basics + Advanced + Interview Guide');
        cy.get("tbody tr:nth-child(2) td:nth-child(3)").should('contain.text','10');

        cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain.text','Learn SQL in Practical + Database Testing from Scratch');
        cy.get('tbody > :nth-child(3) > :nth-child(3)').should('contain.text','10');

        cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain.text','Appium (Selenium) – Mobile Automation Testing from Scratch');
        cy.get('tbody > :nth-child(4) > :nth-child(3)').should('contain.text','20');

        cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain.text','WebSecurity Testing for Beginners-QA knowledge to next level');
        cy.get('tbody > :nth-child(5) > :nth-child(3)').should('contain.text','25');

        cy.get('tbody > :nth-child(6) > :nth-child(2)').should('contain.text','Learn JMETER from Scratch – (Performance + Load) Testing Tool');
        cy.get(':nth-child(6) > :nth-child(3)').should('contain.text','22');

        cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain.text','WebServices / REST API Testing with SoapUI');
        cy.get(':nth-child(7) > :nth-child(3)').should('contain.text','30');

        cy.get(':nth-child(8) > :nth-child(2)').should('contain.text','QA Expert Course :Software Testing + Bugzilla + SQL + Agile');
        cy.get(':nth-child(8) > :nth-child(3)').should('contain.text','40');

        cy.get(':nth-child(9) > :nth-child(2)').should('contain.text','Master Selenium Automation in simple Python Language');
        cy.get(':nth-child(9) > :nth-child(3)').should('contain.text','45');

        cy.get('tbody > :nth-child(10) > :nth-child(2)').should('contain.text','Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C');
        cy.get('tbody > :nth-child(10) > :nth-child(3)').should('contain.text','45');

        cy.get('tbody > :nth-child(11) > :nth-child(2)').should('contain.text','Write effective QA Resume that will turn to interview call');
        cy.get('tbody > :nth-child(11) > :nth-child(3)').should('contain.text','50');

        cy.get('tbody > :nth-child(12) > :nth-child(1)').should('contain.text','Total');
        cy.get(':nth-child(12) > :nth-child(3)').should('contain.text','297');

        cy.get('table[class="table-display"] > tbody').then(($tbody) => {
            cy.log($tbody.html());  // This will log the HTML of the tbody to verify its structure.
        });

//Element Displayed
        cy.get("body > div:nth-child(18) > div:nth-child(3) > div:nth-child(1) > main:nth-child(1) > article:nth-child(1) > div:nth-child(2) > div:nth-child(10) > div:nth-child(2) > fieldset:nth-child(1) > legend:nth-child(1)")
        .should('contain.text','Element Displayed Example') ;
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').should('be.visible').click({force:true});
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').should('be.visible').click({force:true});
        cy.get('#displayed-text').should('be.visible');

// Enabled/Disabled
        cy.get("div[id='enabled-example-div'] fieldset legend").should('contain.text','Enabled/Disabled Example');
        cy.get('#enabled-example-input').should('be.enabled').type("Preethi").and('contain.value','Preethi');
        cy.get('#disabled-button').should('be.visible').click({force:true});
        cy.get('#enabled-example-input').should('not.be.enabled');
        cy.get('#enabled-button').should('be.visible').click({force:true});
        cy.get('#enabled-example-input').should('be.enabled').clear().type("Preethi").and('contain.value','Preethi');

// Mouse Hover
        cy.xpath("//legend[normalize-space()='Mouse Hover Example']").should('be.visible').trigger("mouseover");
        cy.get("div[class='mouse-hover-content']").then($el => {
            cy.log($el.html());         // Log the HTML of the hovered content to inspect visibility
        });

// Calendar
        cy.xpath("//legend[normalize-space()='Calendar Example']").should('contain.text','Calendar Example');
        cy.get("a[href='https://codenboxautomationlab.com/about/booking/'][target='_blank']").should('be.visible')
        .invoke('removeAttr', 'target').click({ force: true });
        cy.wait(2000);
        cy.url().should('include','booking');
        cy.title().should('eq','Book Appointment - CodenBox AutomationLab');
        cy.get('.sql_date_2025-02-27 > .wpbc-cell-box > .date-cell-content > a').should('be.visible').click({force:true});
        cy.get("label[for='rangetime1']").should('contain.text','Time Slots');
        cy.get('#rangetime1').should('be.visible').select('12:00 PM (Noon) - 1:00 PM');
        cy.get('#name1').should('be.enabled').type('Preethi').and('contain.value','Preethi');
        cy.get('#secondname1').should('be.enabled').type('Srinivasan').and('contain.value','Srinivasan');
        cy.get('#email1').should('be.visible').type('abc@gmail.in').and('contain.value','abc@gmail.in');
        cy.get('#phone1').should('be.enabled').type('9874563210').and('contain.value','9874563210');
        cy.get('#details1').should('be.enabled').type('ABC XYZ').and('contain.value','ABC XYZ');
        cy.get('.wpbc_button_light').should('exist').click({force:true})
        cy.wait(8000);
    //Booking confirmation
        cy.get('.wpbc_ty__message').should('be.visible').and('contain.text','Your booking is received. We will confirm it soon. Many thanks!');
        cy.get(".wpbc_ty__header").should('contain.text','Your booking id')
    //Log dynamic Booking Id  
        cy.get("div[class='wpbc_ty__header'] strong")
        .invoke('text')
        .should('not.be.empty') // Ensures the booking ID is not blank
        .then((bookingId) => {
            cy.log("Captured Booking ID:", bookingId);
        });

// iFrame
        cy.xpath("//legend[normalize-space()='iFrame Example']").should('contain.text','iFrame Example');
      
        cy.get('iframe').should('have.attr', 'src', 'https://www.codenbox.com/');  // Ensure src is set
        cy.get('iframe').should('be.visible');  // Ensure iframe is visible

    // Get the iframe and extract the src URL
        cy.get('iframe').invoke('attr', 'src').then((iframeUrl) => {
        cy.log("Iframe URL:", iframeUrl);  // Log the iframe URL
});

// Download APK files
    //sample 1
        cy.get('.wp-block-button__link').should('be.visible').and('contain.text','Download Apk files')
      .click({force:true})

    //sample 2
            cy.get('.wp-block-button__link').should('be.visible').and('contain.text','Download Apk files')
            .click({force:true})
            cy.wait(10000);
        // Use cy.task() to get the latest downloaded file in the 'cypress/downloads' folder
            cy.task('getLatestFile', 'cypress/downloads').then((latestFile) => {
            cy.log('Latest downloaded file:', latestFile);
        // Validate file name follows expected pattern
            expect(latestFile).to.match(/^APKFiles-\d+\.zip$/);
        // Verify file exists
            cy.readFile(`cypress/downloads/${latestFile}`).should('exist');
        });
    //sample 3
        cy.get('.wp-block-button__link').should('be.visible').and('contain.text','Download Apk files').click({ force: true });
        cy.downloadFile('https://www.codenbox.com/your-apk-file-url', 'cypress/downloads', 'APKFiles-1.zip');   
          
    });
});
