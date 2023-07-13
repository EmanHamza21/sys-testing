import { BaseFile } from "./base/base.file";
import { String } from 'typescript-string-operations';

export class LoginPage extends BaseFile{
    protected elementSelectors ={
      usernameOrPassword: '#{0}',
      loginBtn: '#{0}'
    };

    getUsernameOrPassword(fieldName){
        const fieldSelector = String.format(this.elementSelectors.usernameOrPassword, fieldName);
        return this.getElement(fieldSelector);
    };

    enterUsernameOrPassword(fieldName,usernameOrPassword){
        const fieldSelector = String.format(this.elementSelectors.usernameOrPassword, fieldName);
        this.addTextToInputField(fieldSelector,usernameOrPassword);
    };

    clickOnBtn(btnName){
        const fieldSelector = String.format(this.elementSelectors.loginBtn, btnName);
        this.click(fieldSelector);
    };
}