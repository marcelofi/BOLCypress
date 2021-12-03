import homeBolPage from '/automation/BOLCypressUp/cypress/support/Pages/mainpage'
///<reference types="cypress" />
describe('Verfiy that all objects are displayed in the home page',function(){

    beforeEach(function(){
        cy.visit('/')
    })
    
    it('Verify that Headers are displayed in the site',function(){
        //cy.VerifyHeaders();
        homeBolPage.verifyHeaders();

    })

    it('Verify that footers are displayed in the site',function(){
        //cy.VerifyFooters();
        homeBolPage.verifyFooters();

    })
    
})