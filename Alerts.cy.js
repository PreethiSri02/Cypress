    describe('Alerts', ()=>{
//1. Simple Alert

     it('simple alert', ()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("[onclick='jsAlert()']").click();
  
    //  Assertion 1-To validate the simple alert prompt
    cy.on('window:alert', (t)=>{
        expect(t).to.contains('I am a JS Alert');
    })
  
    //Assertion 2 - To validate the result because prompt will be closed automatically, then how we'll know the button is clicked
            cy.get("#result").should('have.text', 'You successfully clicked an alert');
  })

// 2. Confirm Alert- ok
    it('confirm alert- ok button', ()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("[onclick='jsConfirm()']").click();

    //  Assertion 1-To validate the prompt
    cy.on('window:confirm', (t)=>{
        expect(t).to.contains('I am a JS Confirm');
    })
     //Assertion 2 - By clicking on 'ok'  button
     cy.get("#result").should('have.text', 'You clicked: Ok');

    })

// Confirm Alert - cancel
it('confirm alert- cancel button', ()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("[onclick='jsConfirm()']").click();

    //  Assertion 1-To validate the prompt
    cy.on('window:confirm', (t)=>{
        expect(t).to.contains('I am a JS Confirm');
    })
    // Cypress will close prompt by clicking 'cancel' button
    cy.on('window:confirm', ()=> false);
    //Assertion 2 - By clicking on 'ok'  button
    cy.get("#result").should('have.text', 'You clicked: Cancel');

})

//3. Prompt Alert- OK

it('Prompt alert-ok button', ()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
   //before clicking the prompt button, we need to trigger some event to pass some text inside the prompt
   cy.window().then((win)=> {
   cy.stub(win, 'prompt').returns('Welcome');
   })
   // now can click on the elemet
    cy.get("[onclick='jsPrompt()']").click();

    //  Assertion 1-To validate the prompt
    cy.on('window:confirm', (t)=>{
        expect(t).to.contains('I am a JS Prompt');
    })
    //Assertion 2 - By clicking on 'ok'  button
    cy.get("#result").should('have.text', 'You entered: Welcome');

})

// Prompt Alert- Cancel

it.only('Prompt alert-cancel button', ()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
   //before clicking the prompt button, we need to trigger some event to pass some text inside the prompt
   cy.window().then((win)=> {
   cy.stub(win, 'prompt').returns('null');
   })
   // now can click on the elemet
    cy.get("[onclick='jsPrompt()']").click();

    // Cypress will close prompt by clicking 'cancel' button
    cy.on('window:prompt', ()=> false);

    //Assertion 2 - By clicking on 'cancel'  button
    cy.get("#result").should('have.text', 'You entered: null');

})

// 4. Authenticated alert - approach 1
    it('Auth alert - 1', ()=>{
   
   // approach 1 - Provide username and password inside the parameter inside visit method

    cy.visit("https://the-internet.herokuapp.com/basic_auth", 
             {auth:
            {username:"admin", password:"admin"}
            });
    cy.get("[class='example'] p").should('have.contain',"Congratulations");
})

//Authenticated alert - approach 2

    it('Auth alert - 2', ()=>{
   
        // approach 2 - Give username and Password along with the url

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("[class='example'] p").should('have.contain',"Congratulations");
      })


})