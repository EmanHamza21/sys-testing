import { BasePage } from "../../../../fixtures/base.page";
import { String } from 'typescript-string-operations';
/// <reference types="cypress" />

export class ForgetPasswordPage extends BasePage {
    protected url = '/forgot_password';
    protected elementSelectors = {
        fieldName: '#{0}',
        retrievePasswordBtn: '#form_submit',
    };

    get retrievePasswordBtn(){
        return this.getElement(this.elementSelectors.retrievePasswordBtn);
    };

    getInputFields(fieldName){
        const fieldSelector = String.format(this.elementSelectors.fieldName, fieldName);
        return this.getElement(fieldSelector);
    };

    enterValueInputField(fieldName, value){
        const fieldSelector = String.format(this.elementSelectors.fieldName, fieldName);
        this.addTextToInputField(fieldSelector, value);
    };
    
    clickRetrievePasswordBtn(){
        this.click(this.elementSelectors.retrievePasswordBtn);
    };
}