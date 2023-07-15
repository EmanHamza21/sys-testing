import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { expect } from 'chai'
import { LoginPage } from "../page/login.page";
import { SecureAreaPage } from "../../secure-area/page/secure-area.page";

const loginPage = new LoginPage();
const secureAreaPage = new SecureAreaPage();

Given("user navigates to login page", () => {
    loginPage.visit();
});

When("user enters {string} in {string} field",  (value, fieldName) => {
     loginPage.enterValueInUsernameOrPasswordFields(fieldName, value);
});

When("user clicks on {string} button", (buttonName) => {
    if(buttonName == 'Login'){
        loginPage.clickLoginBtn();
    } else{
        secureAreaPage.clickLogoutBtn();
    }
});

Then("{string} field should exist in the login page", (fieldName) => {
    expect(loginPage.getUsernameOrPasswordFields(fieldName)).to.exist;
});

Then("login button should exist in the login page", () => {
    expect(loginPage.loginBtn).to.exist;
});

Then("{string} message {string} should disaplay on login page", (status,errorOrSuccessMessage) => {
    loginPage.errorOrSuccessMessage.invoke('text').then(txt =>{
        console.log('ERROR', txt);
        expect(txt).to.contain(errorOrSuccessMessage);
    });
});

Then("success message {string} should disaplay on secure page", (successMessage) => {
    secureAreaPage.successMessage.invoke('text').then(txt =>{
        console.log('SUCCESS', txt);
        expect(txt).to.contain(successMessage);
    });
});

Then("the header should contain {string}", (headerText) => {
    secureAreaPage.headerText.invoke('text').then(txt =>{
        console.log('SUCCESS', txt);
        expect(txt).to.contain(headerText);
    });
});