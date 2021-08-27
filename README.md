# Asos Automation Task
A Cypress project utilising Cucumber with Page Object Model.   
Can be run locally, additionally a basic example of CI with Github actions and Cypress dashboard is included.

## Prerequisites

Node v12+ to install and run locally.
Java JDK to enable showing Allure reports.

## Installation

"npm i" in the project folder to be able to run locally.

## Usage
###Scripts

"npm run cypress:run"
Runs Cypress locally with the dashboard key added

"npm run cypress:open"
Opens Cypress GUI on local.

"npm run cy:smoke:generate:report"
This runs the tests tagged with @smoke-test

 "npm run cy:run :generate:report"
This runs all the tests 

"npm run cy:browserstack:run"
This runs tests in browserstack (When Provided with credentails in browserstack.json)

Scripts can be seen and altered in the package.json file

#### Open mode

Running cypress in open allows for more direct interaction with the tests, for example stopping the tests mid run, or waiting for the tests to end, will allow the user to select specific stages of the test and see what is happening in the DOM at the time. This mode is best for troubleshooting failed tests and narrowing down issues, or for testing newly written tests. Tests ran in open mode do not produce saved test results or screenshots.

#### Run mode

Will run through all the feature files outlined in the config on after another and produce test results for each.

## Configuration

Handled in the cypress.json file

Allure report is enabled on this project & the test Results that will be used in the allure report will be saved in "allure-results" , & allure is set to use cypress output.

## Tests

Tests are in feature file and implemented in steps

## Test Data
Test data are maintained in Gherkin files in Examples table

## Plugins
This project uses the Cypress Cucumber Preprocessor plugin, documentation at https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
This project uses Allure for reporting , documentation at https://docs.qameta.io/allure/

## Environmental Variables
Environment variables can be added via the cypress.env.json file and accessed within the code with: Cypress.env('keyValue')

## Creating Test Suites
To make cypress run with specific feature files or specific scenarios within the feature files you can tag them with @whateverYouWant either at the top of the feature file for the complete feature to be tagged, or above specific scenarios. Then then run the command:

npx cypress-tags run --browser chrome --headless -e TAGS='@whateverYouWant'
A couple of examples have already been tagged with @smoke-test, run the above command with @smoke-test to see.

## Reporting - Allure Report

This project integrates with Allure report , its flexible lightweight report tool that shows a very concise representation of what have been tested along with screenshots & videos when needed. There are two configured cmd commands to run tests and see the automatically generated allure report : 1- npm run cy:smoke:generate:report --> this runs the tests tagged with 2- npm run cy:run :generate:report --> this runs all the tests Before running a new tests , the previous report information(if exist) will be deleted from the reports folder in this framework.

## Troubleshooting issues with tests

Exploring any issues with the tests themselves is best done with Cypress in Open mode, as explained previously this allows for greater exploration of test behaviour. Cypress will show the error, and if it is related to a section of code, will show a snippet of the code and it's location in the project.This should make locating the error causing line simple, from there you can find the definition of the method causing the error and any selectors it uses to investigate further and solve the issue.

## Continuous integration

A basic example of CI with Github actions and Cypress dashboard is included but is not functional unless a valid on[] is selected, eg. on push, which will run the tests on GA when code is pushed to any branch in the repository.

## Cross Browser Testing and Parallelisation in BrowserStack

BrowserStack is integrated, on providing the corresponding browerstack's credentials in browserstack.json file, tests will be executed in BrowserStack in the configured browsers in browserstack.json file
