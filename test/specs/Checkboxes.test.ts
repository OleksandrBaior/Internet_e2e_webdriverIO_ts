import * as chai from "chai";
var expect = chai.expect;
import { Checkboxes } from "../pageobjects/CheckboxesPage";
import { Main } from "../pageobjects/MainPage";

describe('Checkboxes', () => {
    it('shuold click checkbox1', async () => {
        await Checkboxes.openUrl(Checkboxes.checkboxLink);
        await Checkboxes.clickCheckbox1();
        expect(await Checkboxes.checkbox1.isSelected()).to.be.true;

    });

    it('shuold click checkbox2', async () => {
        await Checkboxes.openUrl(Checkboxes.checkboxLink);
        await Checkboxes.clickCheckbox2();
        expect(await Checkboxes.checkbox2.isSelected()).to.be.false;
        expect(await Checkboxes.checkbox1.isSelected()).to.be.false;
    });

    it ('shuold enter from Main page', async () => {
        await Main.openUrl();
        await (await Main.checkboxesLink).click();
        expect(await Checkboxes.getUrl()).to.be.equal(Checkboxes.checkboxLink);
    });
    
});