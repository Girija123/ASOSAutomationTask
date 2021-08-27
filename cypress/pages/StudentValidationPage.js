import BasePage from "./BasePage";

export default class StuDentValidationPage extends BasePage {
    constructor()
    {
        super();
    }
   
   firsNameTxtFld = '#firstName'
   lastNameTxtFld = '#lastName'
   regionSlct = '#territory'
   asosEmailTxtFld = '#asosEmail'
   studentEmailTxtFld = '#studentEmail'
   graduationYearRadio = '[name="graduationYear"]'
   graduationYearLabel = '//legend[text()="What year will you graduate?"]'
   fashionGenderRadio = '[name="fashionGender"]'
   asosEmailOptinCheckBox = '#asosEmailOptin'
   termsAndConditionsLink = '.form__terms >a'
   submitButton = '#submitButton'
   termsAndConditionsModal = '[role="dialog"]'
   closeTermsAndConditionsModal = '[role="dialog"]>[aria-label="Close"]'
   verificationMsg = '//*[@id="creative"]/div[2]/section[2]/div/div/p';
   firstNameErrorMsg = '#firstName-error'
   asosEmailErrorMsg = '#asosEmail-error'
   studentEmailErrorMsg = '#studentEmail-error'
   graduationYearErrorMsg = '#graduationYear-error'
   fashionGenderErrorMsg = '#fashionGender-error'

   doStudentValidation(firstnameVal, lastNameVal, region, asosRegisteredEmail, studentEmail, graduationYear, fashionGender )
   {
    cy.get(this.firsNameTxtFld).type(firstnameVal);
    cy.get(this.lastNameTxtFld).type(lastNameVal);
    cy.get(this.regionSlct).select(region);
    cy.get(this.asosEmailTxtFld).type(asosRegisteredEmail);
    cy.get(this.studentEmailTxtFld).type(studentEmail);
    cy.get(this.graduationYearRadio).check(graduationYear);
    cy.get(this.fashionGenderRadio).check(fashionGender,  {force: true });
    cy.get(this.submitButton).click();
   }

   verifyValidationMsg(verificationMsgText)
   {
      cy.getTextAndVerify(this.verificationMsg, verificationMsgText);
   }

    verifyHeaderText(discountHeaderText)
    {
        cy.xpath("//h1[text()='"+discountHeaderText+"']").should('be.visible');
    }

    verifyPresenceOfFields()
    {
        cy.get(this.firsNameTxtFld).should('be.visible');
        cy.get(this.lastNameTxtFld).should('be.visible');
        cy.get(this.regionSlct).should('be.visible');
        cy.get(this.asosEmailTxtFld).should('be.visible');
        cy.get(this.studentEmailTxtFld).should('be.visible');
        cy.xpath(this.graduationYearLabel).should('be.visible');
        cy.get(this.termsAndConditionsLink).should('be.visible');
        cy.get(this.submitButton).should('be.visible');

    }

    enterFirstName(firstName)
    {
        cy.get(this.firsNameTxtFld).type(firstName);
    }

    enterLastName(lastName)
    {
        cy.get(this.lastNameTxtFld).type(lastName);
    }
    
    selectRegion(region)
    {
        cy.get(this.regionSlct).select(region);
    }

    enterAsosEmail(asosRegisteredEmail)
    {
        cy.get(this.asosEmailTxtFld).type(asosRegisteredEmail);
    }

    enterStudentEmail(studentEmail)
    {
        cy.get(this.studentEmailTxtFld).type(studentEmail);
    }

    chooseGraduationYear(graduationYear)
    {
        cy.get(this.graduationYearRadio).check(graduationYear);
    }

    chooseFashionGender(fashionGender)
    {
        cy.get(this.fashionGenderRadio).check(fashionGender,  {force: true });
    }

    optInForNewsLetters()
    {
        cy.get(this.asosEmailOptinCheckBox).click({force: true});
    }

    viewTermsAndConditions()
    {
        cy.get(this.termsAndConditionsLink).click();
        cy.get(this.termsAndConditionsModal).scrollTo('bottom', { ensureScrollable: false })
        cy.get(this.closeTermsAndConditionsModal).click();
    }

    submitStudentDataForValidation()
    {
        cy.get(this.submitButton).click();
    }

    validateErrorMessages(expectedFirstNameErrorMsg, expectedAsosEmailErrorMsg, expectedStudentEmailErrorMsg, expectedGraduateYearErrorMsg, expectedFashionGenderErrorMsg)
    {
        cy.getTextAndVerifyCss(this.firstNameErrorMsg, expectedFirstNameErrorMsg)
        cy.getTextAndVerifyCss(this.asosEmailErrorMsg, expectedAsosEmailErrorMsg)
        cy.getTextAndVerifyCss(this.studentEmailErrorMsg, expectedStudentEmailErrorMsg)
        cy.getTextAndVerifyCss(this.graduationYearErrorMsg, expectedGraduateYearErrorMsg)
        cy.getTextAndVerifyCss(this.fashionGenderErrorMsg, expectedFashionGenderErrorMsg)

    }
}
