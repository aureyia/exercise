import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { BMIPage } from '../pages/bmi.page'

Given(/^a user is on the BMI checker page$/, () => {
  BMIPage.exampleMethod()
})
