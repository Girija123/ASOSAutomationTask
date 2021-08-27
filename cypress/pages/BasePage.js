export default class BasePage {

    acceptCookieSettings = '[data-testid="close-button"]'
    cookieDisclaimer = '[data-testid="cookie-disclaimer"]>div>div>p'
    baseUrl = Cypress.env('baseUrl');


    navigate(path) {
        cy.visit(this.baseUrl + path);
      }
    
      getPageTitleAndVerify(pageTitle) {
        cy.title().should('eq', pageTitle)
    }    
     
      assertCookieSettingsMessageAppears(){
        cy.get(this.cookieDisclaimer).should('be.visible');
      }

      handlecookieMsg()
      {
        cy.get(this.acceptCookieSettings).click();
      }

      assertCookieMsgContains(msgcontent){
          cy.getTextAndVerify(this.cookieDisclaimer, msgcontent);
      }

  


}