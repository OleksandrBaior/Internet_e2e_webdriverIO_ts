import { BasePage } from "./BasePage";

class CheckboxesPage extends BasePage {

    public get checkboxLink() {return 'http://the-internet.herokuapp.com/checkboxes'};
    public get checkbox1() { return $('//*[@id="checkboxes"]/input[1]') }
    public get checkbox2() { return $('//*[@id="checkboxes"]/input[2]') }

    public async clickCheckbox1() {
        await this.checkbox1.click();
    }   

    public async clickCheckbox2() {
        await this.checkbox2.click();
    }
}

export const Checkboxes = new CheckboxesPage();