class LoginPage {
    visit()
    {cy.visit("https://adactinhotelapp.com/")}

    userName(value)  // action method
    {
        const field = cy.get("#username")
        field.clear()
        field.type(value)
        return this
    }
    passWord(value)
    {
        const field = cy.get("#password")
        field.clear()
        field.type(value)
        return this
    }
    loginButton()
    {
        const button = cy.get("#login")
        button.click()
    } 
}
export default LoginPage   // to access this class