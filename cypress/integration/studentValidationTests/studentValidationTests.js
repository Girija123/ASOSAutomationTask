import { Given, When, And, Then, Before } from "cypress-cucumber-preprocessor/steps";
import BasePage from "../../pages/BasePage";
import StuDentValidationPage from "../../pages/StudentValidationPage";


const basePage = new BasePage();
const stuDentValidationPage = new StuDentValidationPage();

before(()=>{
    basePage.navigate('');
    basePage.assertCookieSettingsMessageAppears();
    basePage.handlecookieMsg();
    });

Given('I am on Student Validation Page {string} with title {string}', (path, pageTitle) => {
    basePage.navigate(path)
   // basePage.getPageTitleAndVerify(pageTitle);
})

And('I should see and accept the cookie', () => {
    basePage.assertCookieSettingsMessageAppears();
    basePage.handlecookieMsg();
})

Then('I should see the elements discountTitle, firstname, lastname, territory, asosEmail, studentEmail, graduationYear, fashionGender, submitButton, emailOptIn, termsAndConditionsLink are avaliable', () => {
    stuDentValidationPage.verifyPresenceOfFields();
})


When('I provide data for validation {string}, {string}, {string}, {string}, {string}, {string}, {string}', (firstName, lastName, territory, asosEmail, studentEmail, graduationYear, fashionGender) => {
    stuDentValidationPage.doStudentValidation(firstName, lastName, territory, asosEmail, studentEmail, graduationYear, fashionGender);
})


Then('I should see the verification message as {string}', (emailVerificationMsg) => {
    stuDentValidationPage.verifyValidationMsg(emailVerificationMsg);
})

When('I enter all data for validation', (dataTable) => {

    const studentDetails = dataTable.hashes();
    for (const i in studentDetails) {
        const studentDetail = studentDetails[i];
        stuDentValidationPage.enterFirstName(studentDetail.firstName)
        stuDentValidationPage.enterLastName(studentDetail.lastName)
        stuDentValidationPage.selectRegion(studentDetail.territory)
        stuDentValidationPage.enterAsosEmail(studentDetail.asosEmail)
        stuDentValidationPage.enterStudentEmail(studentDetail.studentEmail)
        stuDentValidationPage.chooseGraduationYear(studentDetail.graduationYear)
        stuDentValidationPage.chooseFashionGender(studentDetail.fashionGender)

    }
})

When ('I opt in for Newsletter', ()=> {
    stuDentValidationPage.optInForNewsLetters();
})

When ('I read the terms and conditions to submit', ()=>{
    stuDentValidationPage.viewTermsAndConditions();
    stuDentValidationPage.submitStudentDataForValidation();
})

Then ('I should see the verification message after submission as {string}', (emailVerificationMsg)=>
{
    stuDentValidationPage.verifyValidationMsg(emailVerificationMsg);
})

When ('I provided no data', ()=>{
    stuDentValidationPage.submitStudentDataForValidation();
})

Then ('I should see the following error messages', (dataTable)=>{

    const errorMessages = dataTable.hashes();
    for (const i in errorMessages) {
        const errorMessage = errorMessages[i];
            stuDentValidationPage.validateErrorMessages(errorMessage.missingFirstName, errorMessage.missingAsosEmail,
                                                        errorMessage.missingStudentEmeil, errorMessage.missingGraduationYear, errorMessage.missingFashionGender);
          
    }

})



