///<reference types="cypress" />
import HomeBolPage from '/automation/BOLCypressUp/cypress/support/Pages/mainPageUp'
import HomeBetOnline from '../../support/Pages/bolmainpage'

describe('Verfiy that all objects are displayed in the home page',function(){

    beforeEach(function(){
        cy.visit('/')
    })
    
    it('Verify that Headers are displayed in the site',function(){
        //homeBolPage.verifyHeaders();
        const homeBetOnline=new HomeBetOnline();
        //homeBolPage.verifyHeaders();
        homeBetOnline.bankingBtn().should('be.visible')
        homeBetOnline.loginBtn().should('be.visible')
        homeBetOnline.loginJoinBtn().should('be.visible')
        homeBetOnline.sportsIcon().should('be.visible')
        homeBetOnline.livebettingIcon().should('be.visible')
        homeBetOnline.casinoIcon().should('be.visible')
        homeBetOnline.raceBookIcon().should('be.visible')
        homeBetOnline.pokerIcon().should('be.visible')
        homeBetOnline.esportIcon().should('be.visible')
        homeBetOnline.contestIcon().should('be.visible')
        homeBetOnline.promosIcon().should('be.visible')
        homeBetOnline.logobetonline().should('be.visible')
    })

    it('Verify that footers are displayed in the site',function(){  
        const homeBolPage=new HomeBolPage();
        homeBolPage.verifyFooters();
    })
    
})