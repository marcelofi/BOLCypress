class HomeBetOnline{
    bankingBtn(){
        return cy.get(".banking-logout")
    }

    loginBtn(){
        return cy.get("#btnOpenLogin")
    }

    loginJoinBtn(){
        return cy.get(".btn.btn-sm.layout-auth-nav-join.pophover.amb-trackeable-event")
    }

    sportsIcon(){
        return cy.get(".categories > [href='/sportsbook']")
    }

    livebettingIcon(){
        return cy.get(".categories > [href='/sportsbook/live-betting']")
    }

    casinoIcon(){
        return cy.get(".categories > [href='/casino']")
    }

    raceBookIcon(){
        return cy.get(".categories > [href='/horse-betting']")
    }

    pokerIcon(){
        return cy.get(".categories > [href='/poker']")
    }

    esportIcon(){
        return cy.get(".categories > [href='/esports']")
    }

    contestIcon(){
        return cy.get(".categories > [href='/contests']")
    }
    
    promosIcon(){
        return cy.get(".categories > [href='/promotions']")
    }

    logobetonline(){
        return cy.get(".logo-betonline")
    }

}
export default HomeBetOnline