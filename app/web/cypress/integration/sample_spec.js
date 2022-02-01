describe('Cypress auto test', () => {
  it('Check login', () => {
    cy.visit('https://birta.staki.is/tr-web')
    // cy.visit('http://localhost:3000/tr-web')

    // Type in phonenumber
    cy.get('#mobileNumber').type('8552222')

    // Login
    cy.contains('Auðkenna').click()
    
    // Check if login page contains 'Umsóknir'
    cy.contains('Umsóknir')
  })
})
