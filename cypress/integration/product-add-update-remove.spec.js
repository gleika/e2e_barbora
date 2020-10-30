// Before running the test make sure the basket is empty. If not, please clear it.
describe('5. Product adding, update and removal from basket', () => {
    beforeEach(() => {
        // Preserves lang and .BRBAUTH cookies for multiple tests, because otherwise Cypress by default automatically clears all cookies before each new test start
        Cypress.Cookies.preserveOnce('lang', '1595dc26-9ecc-4c7d-b26e-badffc19c6b5')
        Cypress.Cookies.preserveOnce('.BRBAUTH', 'zYM8KK2Mk_fcqsyqES2mvATZ8TomiAxcxXVCr3T-4RXNcW_0xn6DT4Kztbp07YmnrUbiNXVzq9HhkPDjMfAJ6xbm5olhd5qqNeHkdEeZNViacUE9GS8SOYlpm4XBKyzG0bZecgZNRJH9ZaTK4HQWsA2')
    })

    // Custom command description can be found /support/commands.js
    it('Action preconditions', () => {
        cy.precondlogin()
    })

    // Test case actions
    it('5.1. Click on product title or product image in product list', () => {
        cy.get('.b-product--desktop-grid').first().click()
    })

    it('5.2. Enter Units field: 2', () => {
        cy.get('.b-quantity-select--input').type('2')
    })

    it('5.3. Click Add to basket button', () => {
        cy.get('.b-add-to-cart').click()
    })

    // Check expected result
    it('5.4. Check if product added to the basket successfully', () => {
        cy.get('.b-cart-item--content').should('be.visible')
    })

    it('5.5. Click + button to increase added product units', () => {
        cy.get('.b-quantity-select--plus').click()
    })

    // Check expected result
    it('5.6. Check if product units are increased correctly', () => {
        cy.get('.b-quantity-select--input').should('have.value', '3')
    })

    it('5.7. Click - button to decrease added product units', () => {
        cy.get('.b-quantity-select--minus').click()
    })

    // Check expected result
    it('5.8. Check if product units are decreased correctly', () => {
        cy.get('.b-quantity-select--input').should('have.value', '2')
    })

    it('5.9. Click X button to remove added item from basket', () => {
        cy.get('.c-btn--no-paddings').last().click()
    })

    // Check expected result
    it('5.10. Check if product is removed from basket successfully', () => {
        cy.get('.b-sidebar-cart-empty').contains('Your basket is empty.')
    })
})
