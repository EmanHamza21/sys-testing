import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ForgetPasswordPage } from '../page/forget-password.page';
import { expect } from 'chai'

const forgetPasswordPage = new ForgetPasswordPage();

Given("user navigates to forget password page", function () {
    forgetPasswordPage.visit();
});

When("user enters email {string} in the {string} field", function (emailAddress, fieldName) {
	forgetPasswordPage.enterValueInputField(fieldName,emailAddress);
});

When("user clicks on Retrieve password button", function (emailAddress, fieldName) {
  forgetPasswordPage.clickRetrievePasswordBtn();
});

Then("{string} field should exist in the page", (fieldName) => {
	expect(forgetPasswordPage.getInputFields(fieldName)).to.exist;
});

Then("Retrieve Password button should exist in the page", () => {
	expect(forgetPasswordPage.retrievePasswordBtn).to.exist;
});


