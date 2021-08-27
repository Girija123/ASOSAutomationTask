
//Get Text and Verify the text - xpath
Cypress.Commands.add('getTextAndVerify', (locator, expectedText) => {
    cy.xpath(locator).should('have.text', expectedText)
 })

 //Get Text and Verify the text
Cypress.Commands.add('getTextAndVerifyCss', (locator, expectedText) => {
  cy.get(locator).should('have.text', expectedText)
})

 //Get a button with label
 Cypress.Commands.add('clicbuttonWithLabel', (locator, label) => {
    cy.get(locator).contains(label).click()
  })

  //Get a form element with label
  Cypress.Commands.add('getElementByLabel', (label, options = {}) => {
 
   const document = cy.state('document')
  
   const getValue = () => {
     const $label = Cypress.$(document).find(
       'label:contains("' + label + '")',
     )
     if (!$label.length) {
       return
     }
     const forId = $label.attr('for')
     if (!forId) {
       return
     }
     const input = document.getElementById(forId)
     return input
   }
 
 })