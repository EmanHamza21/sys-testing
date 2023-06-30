import { String } from 'typescript-string-operations';
/// <reference types="cypress" />

export abstract class BasePage {
    protected url: string;
    protected abstract elementSelectors: { [key: string]: string };

    visit(extraPram: string = ''): void {
        cy.visit(String.format(this.url, extraPram));
    };

    getElement(selector: string, timeOut?: number): any {
        return cy.get(selector);
    };

    click(selector: string, forceClick: boolean = true): void {
        cy.get(selector).click({ force: forceClick });
    };

    addTextToInputField(selector: string, text: string, forceType?: boolean): void {
        cy.get(selector).type(text, ({ force: forceType ?? false }));
    };


}