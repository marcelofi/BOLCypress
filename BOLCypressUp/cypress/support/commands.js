// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception',(err,runnable)=>{
    //returning false here prevents Cypress from
    //failing the test
    return false
})

Cypress.Commands.add('VerifyFooters',()=>{
    cy.fixture('footers').then((footersobjects)=>{
    
        cy.get(footersobjects.aboutUsFooter).should('be.visible')        
        cy.get(footersobjects.areferAFriendFooter).should('be.visible')        
        cy.get(footersobjects.rulesFooter).should('be.visible')
        cy.get(footersobjects.privacyPolicyLnk).should('be.visible')
        cy.get(footersobjects.affilitatesLnk).should('be.visible')
        cy.get(footersobjects.termsAndConditions).should('be.visible')
        cy.get(footersobjects.sportsLnkFooter).should('be.visible')
        cy.get(footersobjects.raceBookLnFooter).should('be.visible')        
        cy.get(footersobjects.casinoLnkFooter).should('be.visible')        
        cy.get(footersobjects.pokerLnkFooter).should('be.visible')        
        cy.get(footersobjects.promosLnkFooter).should('be.visible')
        cy.get(footersobjects.liveChatFooter).should('be.visible')
        cy.get(footersobjects.emailUSFooter).should('be.visible') 
        cy.get(footersobjects.faqBtnFooter).should('be.visible')             
        cy.get(footersobjects.helpCenterBtn).should('be.visible') 
    })
})

Cypress.Commands.add('VerifyHeaders',()=>{
    cy.fixture('headers').then((headersobjects)=>{
        cy.get(headersobjects.bankingBtn).should('be.visible')    
        cy.get(headersobjects.loginBtn).should('be.visible')    
        cy.get(headersobjects.loginJoinBtn).should('be.visible')    
        cy.get(headersobjects.sporstIcon).should('be.visible')
        cy.get(headersobjects.livebettingIcon).should('be.visible')   
        cy.get(headersobjects.casinoIcon).should('be.visible')
        cy.get(headersobjects.raceBookIcon).should('be.visible')
        cy.get(headersobjects.pokerIcon).should('be.visible')        
        cy.get(headersobjects.esportIcon).should('be.visible')        
        cy.get(headersobjects.contestIcon).should('be.visible')        
        cy.get(headersobjects.promosIcon).should('be.visible')
        cy.get(headersobjects.logobetonline).should('be.visible')
    })

})