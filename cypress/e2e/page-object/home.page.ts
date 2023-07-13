import { BasePage } from "./base/base.page";
import { String } from 'typescript-string-operations';

export class HomePage extends BasePage {
  protected elementSelectors = {
    shoppingCardIcon: '#shopping_cart_container'
  };

  get shoppingCardIcon(){
    return this.getElement(this.elementSelectors.shoppingCardIcon);
  }
 
}