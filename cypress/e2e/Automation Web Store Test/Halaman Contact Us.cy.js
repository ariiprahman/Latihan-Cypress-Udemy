/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Testing Web Store", () => {
   
    it("Mengunjungi Contact Us Web Store",()=>{
        cy.visit("https://automationteststore.com");
        cy.document().should('have.property','charset').and('eq','UTF-8'); 
        cy.title().should('include','A place to practice your automation skills!');      
    });
    it("Sukses Submit Contact Us", () => {
        cy.visit("https://automationteststore.com");
        cy.document().should('have.property','charset').and('eq','UTF-8'); 
        cy.title().should('include','A place to practice your automation skills!');
        cy.get("a[href$='contact']").click();
        // cy.xpath("//a[contains(@href,'contact')]").click();       
        cy.url().should('include','contact');
        cy.title().should('include','Contact Us'); 
        cy.get('[id="ContactUsFrm_first_name"]').type("Goku");
        cy.get('[id="ContactUsFrm_first_name"]').should('have.attr','type','text','name','first_name');
        cy.get('#ContactUsFrm_email').type("goku@mail.co");
        cy.get('#ContactUsFrm_email').should('have.attr','name','email');
        cy.get('#ContactUsFrm_enquiry').type("Aku adalah super sayaian");
        cy.get("button[title='Submit']").click(); 
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!');
    });
    it.only("Gagal Submit Contact Us", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href$='contact']").click();
        cy.url().should('include','contact');
        cy.title().should('include','Contact Us');
        cy.get("button[title='Submit']").click();
        cy.get('.form-horizontal.form_fields > div:nth-of-type(1)  .element_error.has-error').should('have.attr','class','element_error has-error', 'First name: is required field! Name must be between 3 and 32 characters!');
        cy.get('.form_field:nth-of-type(2) .element_error').should('have.attr','class', 'element_error has-error', 'style','Email: is required field! E-Mail Address does not appear to be valid!');
        cy.get('div:nth-of-type(3)  .element_error.has-error').should('have.attr','class','element_error has-error','style','Enquiry: is required field! Enquiry must be between 10 and 3000 characters!');


    });
})