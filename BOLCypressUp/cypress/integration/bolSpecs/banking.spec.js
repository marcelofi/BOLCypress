///<reference types="cypress" />
describe('Verfiy that header and footer objects are displayed in the banking page',function(){

    beforeEach(function(){
        cy.visit('/');
        cy.fixture('headers').then((headersobjects)=>{
            cy.get(headersobjects.bankingBtn).click();
        })
    })

    it('Displays the banking page',function(){       
        cy.url().should('include','banking');
        
    })

    it('Displays the header elements of the banking page',function(){

        cy.VerifyHeaders();

    })

    it('Verify that footers are displayed in the banking site',function(){
       
        cy.VerifyFooters();
    })

    it.only('Displays the objects in banking',function(){
        cy.fixture('banking').then((bankingobjects)=>{
            cy.get(bankingobjects.depositNowBtn).should('be.visible')
            cy.get(bankingobjects.liveChatBtn).should('be.visible')
            cy.get(bankingobjects.peerToPeerExchBtn).should('be.visible')
            cy.get(bankingobjects.liveChatBtn).should('be.visible')
            cy.get(bankingobjects.depositOptions).should('be.visible')
            cy.get(bankingobjects.payoutOptions).should('be.visible')
            cy.get(bankingobjects.bankingcombo).should('be.visible')
            cy.get(bankingobjects.cashierBtn).should('be.visible')
            cy.get(bankingobjects.regExchageBtn).should('be.visible')
            cy.get(bankingobjects.peerToPeerExchBtn).should('be.visible')
            cy.get(bankingobjects.btcATMExch).should('be.visible')
            cy.get(bankingobjects.mobPaymentExchan).should('be.visible')
            cy.get(bankingobjects.walletypesMobile).should('be.visible')
            cy.get(bankingobjects.walltetypeDesktop).should('be.visible')
            cy.get(bankingobjects.liveChatLnk).should('be.visible')
            
        })
    })

    it("Verify the login page when deposit now button is clicked ",function(){
        cy.fixture('banking').then((bankingobjects)=>{
            cy.get(bankingobjects.depositNowBtn).click();            
        })
        cy.fixture('login').then((loginobjects)=>{
            cy.get(loginobjects.titlePage).should('have.text','Log In')         
        })
    })

})