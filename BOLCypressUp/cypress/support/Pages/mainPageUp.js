class mainPageBOL{
    headers={
        bankingBtn:()=>cy.get(".banking-logout"),
        loginBtn:()=>cy.get("#btnOpenLogin"),
        loginJoinBtn:()=>cy.get(".btn.btn-sm.layout-auth-nav-join.pophover.amb-trackeable-event"),
        sporstIcon:()=>cy.get(".categories > [href='/sportsbook']"),
        livebettingIcon:()=>cy.get(".categories > [href='/sportsbook/live-betting']"),
        casinoIcon:()=>cy.get(".categories > [href='/casino']"),
        raceBookIcon:()=>cy.get(".categories > [href='/horse-betting']"),
        pokerIcon:()=>cy.get(".categories > [href='/poker']"),
        esportIcon:()=>cy.get(".categories > [href='/esports']"),
        contestIcon:()=>cy.get(".categories > [href='/contests']"),
        promosIcon:()=>cy.get(".categories > [href='/promotions']"),
        logobetonline:()=>cy.get(".logo-betonline")
    }

    footers={        
        aboutUsFooter:()=>cy.get("#btnAboutUs"),
        areferAFriendFooter:()=>cy.get("a[href='/referafriend']"),
        rulesFooter:()=>cy.get("#btnRules"),
        privacyPolicyLnk:()=>cy.get("#btnPolicy"),
        affilitatesLnk:()=>cy.get("a[href='https://www.commissionkings.ag/']"),
        termsAndConditions:()=>cy.get("#btnTerms"),
        sportsLnkFooter:()=>cy.get("a[role='button'][href='#footer-menu-sportsbook']"),
        raceBookLnFooter:()=>cy.get("a[role='button'][href='#footer-menu-racebook']"),
        casinoLnkFooter:()=>cy.get("a[role='button'][href='#footer-menu-casino']"),
        pokerLnkFooter:()=>cy.get("a[role='button'][href='#footer-menu-poker']"),
        promosLnkFooter:()=>cy.get("#footer-menu > ul.links.links--2 > li:nth-child(5) > a"),
        liveChatFooter:()=>cy.get(".btn-live-chat"),
        emailUSFooter:()=>cy.get("a.tile"),
        faqBtnFooter:()=>cy.get("#btnFaq"),
        helpCenterBtn:()=>cy.get("#btnHelp")
    }

    verifyHeaders(){
        this.headers.bankingBtn().should('be.visible')
        this.headers.loginBtn().should('be.visible')
        this.headers.loginJoinBtn().should('be.visible')
        this.headers.sporstIcon().should('be.visible')
        this.headers.livebettingIcon().should('be.visible')
        this.headers.casinoIcon().should('be.visible')
        this.headers.raceBookIcon().should('be.visible')
        this.headers.pokerIcon().should('be.visible')
        this.headers.esportIcon().should('be.visible')
        this.headers.contestIcon().should('be.visible')
        this.headers.promosIcon().should('be.visible')
        this.headers.logobetonline().should('be.visible')
        }

    verifyFooters(){        
        this.footers.aboutUsFooter().should('be.visible')
        this.footers.areferAFriendFooter().should('be.visible')
        this.footers.rulesFooter().should('be.visible')
        this.footers.privacyPolicyLnk().should('be.visible')
        this.footers.affilitatesLnk().should('be.visible')
        this.footers.termsAndConditions().should('be.visible')
        this.footers.sportsLnkFooter().should('be.visible')
        this.footers.raceBookLnFooter().should('be.visible')
        this.footers.casinoLnkFooter().should('be.visible')
        this.footers.pokerLnkFooter().should('be.visible')
        this.footers.promosLnkFooter().should('be.visible')
        this.footers.liveChatFooter().should('be.visible')
        this.footers.emailUSFooter().should('be.visible')
        this.footers.faqBtnFooter().should('be.visible')
        this.footers.helpCenterBtn().should('be.visible')
    }
}
//module.exports=new mainPageBOL();
export default mainPageBOL