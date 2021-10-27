
const homeobjects=require('../../fixtures/homename.json')
///<reference types="cypress" />
describe('Verfiy that all objects are displayed in the home page',function(){

    beforeEach(function(){
        cy.visit('/')
    })

    homeobjects.forEach(objects=>{
        
        it(objects.objectName,function(){
            cy.get(objects.domobject).should('be.visible')
        })

    })
    

})