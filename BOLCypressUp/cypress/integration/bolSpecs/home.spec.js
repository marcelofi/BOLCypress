
///<reference types="cypress" />
describe('Verfiy that all objects are displayed in the home page',function(){

    beforeEach(function(){
        cy.visit('/')
    })
    
    it('Verify that all objects are displayed',function(){
        cy.fixture('home').then((homeobjects)=>{
    
            cy.get(homeobjects.bankingBtn).should('be.visible')
    
            cy.get(homeobjects.loginBtn).should('be.visible')
    
            cy.get(homeobjects.loginJoinBtn).should('be.visible')
    
            cy.get(homeobjects.sporstIcon).should('be.visible')

            cy.get(homeobjects.livebettingIcon).should('be.visible')   
    
            cy.get(homeobjects.casinoIcon).should('be.visible')

            cy.get(homeobjects.raceBookIcon).should('be.visible')

            cy.get(homeobjects.pokerIcon).should('be.visible')
        
            cy.get(homeobjects.esportIcon).should('be.visible')
        
            cy.get(homeobjects.contestIcon).should('be.visible')
        
            cy.get(homeobjects.promosIcon).should('be.visible')
        
            cy.get(homeobjects.imageButton).should('be.visible')    
        
            cy.get(homeobjects.footerJoinNowBtn).should('be.visible')

            cy.get(homeobjects.aboutUsFooter).should('be.visible')
        
            cy.get(homeobjects.areferAFriendFooter).should('be.visible')
        
            cy.get(homeobjects.rulesFooter).should('be.visible')

            cy.get(homeobjects.privacyPolicyLnk).should('be.visible')

            cy.get(homeobjects.affilitatesLnk).should('be.visible')

            cy.get(homeobjects.termsAndConditions).should('be.visible')

            cy.get(homeobjects.sportsLnkFooter).should('be.visible')

            cy.get(homeobjects.raceBookLnFooter).should('be.visible')
        
            cy.get(homeobjects.casinoLnkFooter).should('be.visible')
        
            cy.get(homeobjects.pokerLnkFooter).should('be.visible')
        
            cy.get(homeobjects.promosLnkFooter).should('be.visible')   
        })

    })
})