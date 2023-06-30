import { BasePage } from "./base/base.page";
import { String } from 'typescript-string-operations';


export class HomePage extends BasePage{
    protected elementSelectors ={
      linkName: 'a[href="/{0}"]',
      link: '#content > ul > li:nth-child(20) > a'
    };

    clickOnLink(linkName){
        const fieldSelector = String.format(this.elementSelectors.linkName, linkName);
        this.click(fieldSelector);
    }
}