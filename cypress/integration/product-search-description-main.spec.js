// Test case title
describe('4. Product search and product description display', () => {
    // Automatically preserves lang cookie for multiple tests, because otherwise Cypress by default automatically clears all cookies before each new test starts.
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('lang', 'r1595dc26-9ecc-4c7d-b26e-badffc19c6b5token')
    })

    // Precondition
    it('Visit https://pagrindinis.barbora.lt/ website', () => {
        cy.visit('https://pagrindinis.barbora.lt/')
    })

    // Precondition
    it('Select English language', () => {
        cy.get('.b-select-lang--input').select('1595dc26-9ecc-4c7d-b26e-badffc19c6b5')
        cy.wait(250)
    })

    // Test case actions 1-11
    it('4.1. Enter to Enter search text field specific keyword: hellmann', () => {
        cy.get('.b-search--large').clear()
        cy.get('.b-search--large').type('hellmann')
    })

    it('4.2. Click search icon button', () => {
        cy.get('.b-search--initiate').click()
    })

    // Check expected result
    it('4.3. Check if search results are filtered by product title keyword: hellmann', () => {
        cy.get('.b-product--desktop-grid').its('length').should('equal', 13)
    })

    it('4.4. Select Sort by dropdown value: Alphabetical order (A-Z)', () => {
        cy.get('.b-orderby.form-control').select('name')
    })

    // Check expected result
    it('4.5. Check if search results are sorted by: Alphabetical order (A-Z)', () => {
        cy.get('.b-product--desktop-grid span:first').contains('Aitriųjų paprikų padažas HELLMANNS, 250 ml')
    })

    it('4.6. Click Filter button', () => {
        cy.get('.b-filter-order--filter-toggle').click()
    })

    it('4.7. Select Country of origin dropdown value: Holland', () => {
        cy.get('.b-multiselect--header').contains('Country of origin').click().get('.b-input-checkbox--label').contains('Holland').click()
    })

    it('4.8. Click Filter button', () => {
        cy.get('.b-filter--filter-btn.c-btn--font-size-s').click()
    })

    // Check expected result
    it('4.9. Check if search results are filtered by: Holland', () => {
        cy.get('.b-product--desktop-grid').its('length').should('equal', 1)
    })
  
    it('4.10. Click on product title in the product list', () => {
        cy.get('a').contains('Česnakinis padažas HELLMANN\'S, 250 ml').click()
    })

    // Check expected result
    it('4.11. Check if product description page is visible', () => {
     cy.get('.b-page-specific-content').should('be.visible')
     cy.get('.b-product-info--pictures-wrap').should('be.visible')
     cy.get('.b-product-info--title').should('be.visible')
     cy.get('.b-product-prices-block').should('be.visible')
     cy.get('.b-product-info--info1').should('be.visible')
     cy.get('.b-product-info--info-2').should('be.visible')
     cy.get('.col-md-4').should('be.visible')
     cy.get('.b-nutrients--item').should('be.visible')
    })    

})