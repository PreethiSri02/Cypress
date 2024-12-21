describe('Download',()=>{
it('Download Test',()=>{
 
    // Url + Foldername + Filename.filetype
    cy.downloadFile('https://www.w3schools.com/w3images/fjords.jpg','MyDownloads','Meditation.png')
    cy.downloadFile('https://t3.ftcdn.net/jpg/06/43/07/12/240_F_643071289_I60pgWvCavlK0pswqkibpeYudr0HY9Ft.jpg','MyDownloads','Sample 2.png')

    // Download a pdf
    cy.downloadFile('https://www.w3.org/WAI/WCAG21/quickref/','MyDownloads','Sample.pdf')

})
})
