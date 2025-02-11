let orderNo;
describe('ReadData',()=>{

    it('fixture 1',function(){
        // custom command 'parseXlsx'
        cy.parseXlsx('cypress/fixtures/AdactinData.xlsx').then((excelData)=>{  // load the data from file into 'excelData'
            const rowCount = Cypress.$(excelData[0].data).length                // exceData[0] represents 1st sheet
            cy.log(rowCount)                   // This will log the number of rows in the sheet

            for(let i = 1; i < rowCount; i++){              // 1 = 1st row [index 0,1]  ; [because 0 contains header]
                let value = excelData[0].data[i]            // excelData[0].data[i] represents the current row's data
               
         // Get data from xl     
                cy.visit(value[0]);                         // 0 = 0th column => {row 1, col 0}
                cy.get("#username").type(value[1]);         // 1 = 1st column => {row 1, col 1}
                cy.get("#password").type(value[2]);         // 2 = 2nd column => {row 1, col 2}
                cy.get("#login").click()

                cy.get('.login_title').should('contain.text','Search Hotel');
                cy.get("#location").select(value[3])        // {row 1, col 3}
                cy.get("#hotels").select(value[4])          // {row 1, col 4}   
                cy.get("#room_type").select(value[5])       // {row 1, col 5}
                cy.get("#room_nos").select(value[6])        // {row 1, col 6}
                cy.get("#datepick_in").type(value[7])       // {row 1, col 7}
                cy.get("#datepick_out").type(value[8])      // {row 1, col 8}
                cy.get("#adult_room").select(value[9])      // {row 1, col 9}
                cy.get("#child_room").select(value[10])     // {row 1, col 10}
                cy.get("#Submit").click();
                cy.get('.login_title').should('contain.text','Select Hotel');
                
                cy.get('#radiobutton_0').should('be.visible').check();
                cy.get('#continue').should('be.enabled').click();

                cy.get(':nth-child(2) > .login_title').should('contain.text','Book A Hotel');

                // Book A hotel
                cy.url().should('eq', 'https://adactinhotelapp.com/BookHotel.php');
                cy.get('#first_name').should('be.visible').type(value[11])          // {row 1, col 11}
                cy.get('#last_name').should('be.visible').type(value[12])           // {row 1, col 12}
                cy.get('#address').should('be.visible').type(value[13])             // {row 1, col 13}
                cy.get('#cc_num').should('be.visible').type(value[14])              //  Use 16 digit Dummy Data
                cy.get('#cc_type').should('be.visible').select(value[15]);          // {row 1, col 15}
                cy.get('#cc_exp_month').should('be.visible').select(value[16]);     // {row 1, col 16}
                cy.get('#cc_exp_year').should('be.visible').select('2028');

                cy.get('#cc_cvv').type(value[18]);                                  // {row 1, col 18}
                cy.get('#book_now').should('be.enabled').click({force:true});
                cy.wait(8000);
// Booking Confirmation
                cy.get('.login_title').should('contain.text', 'Booking Confirmation');
// Log the dynamic order id
                cy.get('#order_no').invoke('val').then((orderNo) => {
                    cy.log("Order Number: " + orderNo);     // Logs in Cypress Test Runner
                    console.log("Order Number:", orderNo);  // Logs in DevTools Console
                });
// Itineray
                cy.get('#my_itinerary').should('be.enabled').click();
                cy.get('.login_title').should('contain.text', 'Booked Itinerary');
            }

     
        })
    })
})
   
        


