import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { expect } from 'chai'
import { LoginPage } from "../../page-object/login.page";
import { HomePage } from "../../page-object/home.page";

const loginPage = new LoginPage();
const homePage = new HomePage();
const readXlsxFile = require('read-excel-file/node');
const validCredentialsfilePath: string = './testData/valid_credentials.xlsx';
let columnIndex: number;
let value: string;

Given("user navigates to the application", function () {
    loginPage.visit();
});

When("user enters valid credentials exists in {int} in into the {string} field", async (index: number, fieldName: string) => {
    const headerIndex = 0;
    readXlsxFile(validCredentialsfilePath).then(async (sheetData) => {
        columnIndex = await loginPage.getColumnIndexByValue(sheetData, headerIndex, fieldName);
        value = await sheetData[index][columnIndex];
        loginPage.enterUsernameOrPassword(fieldName, value);
    });
});

When("user clicks on {string}", (buttonName) => {
    loginPage.clickOnBtn(buttonName);
});

Then("user should land on the home page", () => {
    homePage.shoppingCardIcon.should('be.visible');
});


