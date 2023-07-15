import { BasePage } from "./base.page";


export abstract class BaseFile extends BasePage {
    async getIndexByValue(reportData, value: string) {
        return await reportData.findIndex((row: string[]) => row.toString().includes(value));
    }

    async getRowIndexByValueUsingCoulmnIndex(reportData, index: number, value: string) {
        return await reportData.findIndex((row: string[]) => row[index]?.toString().trim() == value);
    }

    async getColumnIndexByValue(reportData, index: number, value: string) {
        return await reportData[index].findIndex((row) => row?.includes(value));
    }

}
