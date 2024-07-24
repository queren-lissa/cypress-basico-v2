Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Queren')
    cy.get('#lastName').type('Garcia')
    cy.get('#email').type('queren.garcia@ericsson.com')
    cy.get('#open-text-area').type('Test')
    cy.get('button[type="submit"]').click()
})