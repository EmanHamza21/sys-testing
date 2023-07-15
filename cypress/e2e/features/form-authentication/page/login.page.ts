import { String } from 'typescript-string-operations';
import { BasePage } from "../../../../fixtures/base.page";
/// <reference types="cypress" />

export class LoginPage extends BasePage {
    protected url = '/login';
    protected elementSelectors = {
        usernameOrPassword: '#{0}',
        loginBtn: '.radius',
        errorOrSuccessMsg: '#flash',
    };

    get loginBtn(){
        return this.getElement(this.elementSelectors.loginBtn);
    };

    get errorOrSuccessMessage(){
        return this.getElement(this.elementSelectors.errorOrSuccessMsg);
    }

    getUsernameOrPasswordFields(fieldName){
        const fieldSelector = String.format(this.elementSelectors.usernameOrPassword, fieldName);
        return this.getElement(fieldSelector);
    };

    enterValueInUsernameOrPasswordFields(fieldName, value){
        const fieldSelector = String.format(this.elementSelectors.usernameOrPassword, fieldName);
        this.addTextToInputField(fieldSelector, value);
    };
    
    clickLoginBtn(){
        this.click(this.elementSelectors.loginBtn);
    };
}