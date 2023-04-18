/// <reference types="cypress" />

describe("Halaman Contact Us", () => {
   
    it("Dapat Mengisi Field Contact Us",()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.document berguna untuk melakukan cek pada "Head" suatu halaman 
        cy.document().should('have.property','charset').and('eq','UTF-8'); 
        cy.title().should('include','WebDriver | Contact Us');
        cy.url().should('include','contactus');    
        cy.get('[name="first_name"]').type("Gohan");
        cy.get('[name="last_name"]').type("Baik");
        cy.get('[name="email"]').type("gohan@mail.co");
        cy.get('textarea.feedback-input').type("Gohan adalah anak dari Son Goku yang merupakan keturunan dari Bangsa Saiyan");
        cy.get('[type="submit"]').click();
        //cy.get(h1): Untuk mengecek apakah teks dan css nya sudah sesuai dan benar
        cy.get('h1')
        .should('have.text', 'Thank You for your Message!')
        .should('have.css', 'color', 'rgb(220, 220, 220)')
        .should('have.css', 'font-size', '60px')
        .should('have.css', 'font-family', 'Nunito, sans-serif')
        .should('have.css', 'font-weight', '100')
        .should('have.css', 'text-align', 'center');

    });

    it("Gagal Saat mengisi Field Contact Us", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");           
        cy.get('[name="first_name"]').type("Gohan");
        cy.get('[name="last_name"]').type("Baik");
        cy.get('textarea.feedback-input').type("Gohan adalah anak dari Son Goku yang merupakan keturunan dari Bangsa Saiyan");
        cy.get('[type="submit"]').click();
        //cy.get('body').contains: Untuk mengecek apakah ada teks yg mengandung kata tsb
        cy.get('body').contains('Error: all fields are required');
    });

   

})

