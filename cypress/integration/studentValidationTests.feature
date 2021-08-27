Feature: Student Validation for Discount

    Student should be validaated for discount eligibility

    Background: Land on the page and handle Cookie Disclaimer

        Given I am on Student Validation Page "discover/students/asos-on-campus/student-validation/" with title "SOS Student Discount Code & Offers | ASOS"

    Scenario: Verify the presence of texts, labels and fields

        Then I should see the elements discountTitle, firstname, lastname, territory, asosEmail, studentEmail, graduationYear, fashionGender, submitButton, emailOptIn, termsAndConditionsLink are avaliable


    Scenario Outline: verify the student validation with varied  (Condition 1: Registred Asos email and University domain email, 2: Different Region 3.Not Registered, Not a University email, 4. Without Lastname)

        When I provide data for validation "<firstName>", "<lastName>", "<territory>", "<asosEmail>", "<studentEmail>", "<graduationYear>", "<fashionGender>"
        Then I should see the verification message as "<message>"

        Examples:
            | firstName | lastName | territory      | asosEmail             | studentEmail                | graduationYear | fashionGender | message                                                                                                                   |
            | George    | Lynn     | United Kingdom | GeorgeLynn@sample.com | geogeLynn@university.ac.uk  | 2023           | Male          | We've just sent a verification email to your student email address! Click on the link inside to get your discount code... |
            | Adam      | Smith    | Australia      | AdamSmith@sample.com  | adamSmith@university.ac.uk  | 2024           | Male          | We've just sent a verification email to your student email address! Click on the link inside to get your discount code... |
            | Emma      | Haldon   | United Kingdom | emmaHaldon@sample.com | emmaHaldon@university.ac.uk | 2022           | Female        | We've just sent a verification email to your student email address! Click on the link inside to get your discount code... |


    Scenario: verify the student validation opt in for Newsletter and viewing terms before submission

        When I enter all data for validation
            | firstName | lastName | territory      | asosEmail               | studentEmail                  | graduationYear | fashionGender |
            | Georgia   | Gower    | United Kingdom | GoergiaGower@sample.com | GoergiaGower@university.ac.uk | 2026           | Female     |
        And I opt in for Newsletter
        And I read the terms and conditions to submit
        Then I should see the verification message after submission as "We've just sent a verification email to your student email address! Click on the link inside to get your discount code..."

    Scenario: verify the student is not validated until required data is provided

        When I provided no data
        Then I should see the following error messages
            | missingFirstName             | missingAsosEmail                   | missingStudentEmeil                | missingGraduationYear                         | missingFashionGender    |
            | Please enter your first name | Please enter a valid email address | Please enter a valid email address | Please select which year you will graduate in | Please select an option |