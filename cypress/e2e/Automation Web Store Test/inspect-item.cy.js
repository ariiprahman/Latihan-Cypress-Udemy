/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe(" Inspect Automate Store Item using Chain of Commands", () => {
   
    it("Mengakses item produk dengan klik di Header Item",()=>{
        cy.visit("https://automationteststore.com");
        cy.xpath("html//section[@id='featured']/div[@class='container-fluid']/div[@class='block_frame block_frame_featured']//a[@title='Skinsheen Bronzer Stick']").click(); 
    })
    it("Mengakses item produk dengan klik nama item",()=>{
        cy.visit("https://automationteststore.com");
        // mengkombinasi get dengan contains, pastikan contains nya berdasarkan header pada nama produk yaitu untuk contoh ini BeneFit Girl Meets Pearl
        // link produk seharusnya, yg didapat dari selector cypress adalah
        //  cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(2) > .fixed_wrapper > .fixed > .prdocutname')
        // maka yg diambil adalah yg belakangnya saja yaitu .prdocutname, dilanjut contain nama detail produknya
        cy.get('.prdocutname').contains('BeneFit Girl Meets Pearl').click(); 
    })
    it.only("Mengakses item produk dengan menggunakan Index",()=>{
        cy.visit("https://automationteststore.com");
        // mengkombinasi get dengan find dan eq
        // link produk seharusnya, yg didapat dari selector cypress adalah
        //  cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(2) > .fixed_wrapper > .fixed > .prdocutname')
        // maka yg diambil adalah .fixed_wrapper
        cy.get('.fixed_wrapper').find('.prdocutname').eq(1).click(); 
    })
});