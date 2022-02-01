describe('Cypress auto test', () => {
  it('Check login', () => {
    cy.visit('https://birta.staki.is/tr-web')
    // cy.visit('http://localhost:3000/tr-web')

    // Type in phonenumber
    cy.get('.tel').type('8552222')

    // Login
    cy.get('form').click()
    
    // Check if login page contains 'Umsóknir'
    cy.contains('Umsóknir')
  })
})
