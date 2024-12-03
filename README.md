# Testing
Exercise for testing.

## Setup
```bash
git clone https://github.com/aureyia/exercise
```
### Starting the frontend
```bash
cd frontend
npm install
npm run dev
```
### Starting the backend
```bash
cd backend
npm install
npm run start
```

## Excercise
The developers have created a new BMI entry page. Which has one BDD scenario written for it.
```gherkin
Feature: BMI Checker

Scenario: Add BMI
  Given a user is on the BMI checker page
  And they select "log BMI"
  And they fill out the BMI form
  When they submit the form
  Then they should see the entry in the BMI log
```
Map-out and write both API and UI tests that would cover this and any additional functionality.

## API Tests
Use whichever API testing framework you are comfortable with, we use Postman, to cover the endpoints. 

## UI Tests
### NPM Commands
Once the tests have been set up, we can run them with the Cypress UI:
```bash
npm run cypress:open:local
```
We can also run it using the headless electron browser:
```bash
npm run cypress:test:local
```
## Reporting
We are using the allure mocha plugin for creating our reports since it offers us great support with Jenkins. To generate the report we can simply run:
```bash
npm run cypress:report
```
This will open up a browser similar to this:
![Allure](docs/allure.png)
