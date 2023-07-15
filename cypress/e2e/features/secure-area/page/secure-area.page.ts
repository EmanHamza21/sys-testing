import { BasePage } from "../../../../fixtures/base.page";
/// <reference types="cypress" />

export class SecureAreaPage extends BasePage {
    protected url = '/secure';
    protected elementSelectors = {
        logoutBtn: '.button',
        successMsg: '#flash',
        header: '.subheader'
    };

    get logoutBtn(){
        return this.getElement(this.elementSelectors.logoutBtn);
    };

    get successMessage(){
        return this.getElement(this.elementSelectors.successMsg);
    }

    get headerText(){
        return this.getElement(this.elementSelectors.header);
    };
    
    clickLogoutBtn(){
        this.click(this.elementSelectors.logoutBtn);
    };
}