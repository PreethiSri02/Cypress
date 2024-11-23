describe('Webtable', () => {
    beforeEach('Login', () => {
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
    
    });
    it('check no.of rows and columns in the table', () => {
        cy.get("table[class='table table-light traversal-table']>tbody>tr").should('have.length', '3')
        cy.get("table[class='table table-light traversal-table']>thead>tr>th").should('have.length', '3')
});
it('Check the data from specific row and column', () => {
    cy.get("table[class='table table-light traversal-table']>tbody>tr:nth-child(3)>td:nth-child(2)").contains('Larry')
    cy.get("table[class='table table-light traversal-table']>tbody>tr:nth-child(2)>td:nth-child(2)").contains('Jacob')
    cy.get("table[class='table table-light traversal-table']>tbody>tr:nth-child(1)>td:nth-child(2)").contains('Andy')
});
    it('Read all rows & columns data in table', () => {
    cy.get("table[class='table table-light traversal-table']>tbody>tr")
    .each(($row, index, $rows)=>{             // data from each and evry row
            cy.wrap($row).within( ()=>{       // data within in a row
               
            cy.get("td").each(($col, index, $cols)=>{     // data within each columns from a row
            
            cy.log($col.text());                           // To print the data in console   
                });
            });
        });
    });
});