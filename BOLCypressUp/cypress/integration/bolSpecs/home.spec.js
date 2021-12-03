///<reference types="cypress" />
import HomeBolPage from '/automation/BOLCypressUp/cypress/support/Pages/mainPageUp'


describe('Verfiy that all objects are displayed in the home page',function(){

    beforeEach(function(){
        cy.visit('/')
    })
    
    it('Verify that Headers are displayed in the site',function(){
        //homeBolPage.verifyHeaders();
        const homeBolPage=new HomeBolPage();
        homeBolPage.verifyHeaders();
    })

    it('Verify that footers are displayed in the site',function(){  
        const homeBolPage=new HomeBolPage();
        homeBolPage.verifyFooters();
    })
    
})