import {AddRemoveElements} from '../pageobjects/RemoveElementsPage'
import * as chai from "chai";
import { Main } from '../pageobjects/MainPage';

var expect = chai.expect;

describe('Add/Remove Elements', () => {
    it('should add and delete elemenet', async() => {
        await AddRemoveElements.openUrl();
        await (await AddRemoveElements.addElementButton).click();
        await (await AddRemoveElements.deleteButton).click();
        expect(await AddRemoveElements.deleteButton.isExisting()).to.be.false;
    });

    it('should double click on button', async () => {
        await AddRemoveElements.openUrl();
        await (await AddRemoveElements.addElementButton).doubleClick();
        expect(await AddRemoveElements.deleteButtonElements.length).to.eql(2)
    });

    it('should delete second element', async () => {
        await AddRemoveElements.openUrl();
        await (await AddRemoveElements.addElementButton).doubleClick();
        await (await AddRemoveElements.deleteButtonElements[1]).click();
        expect(await AddRemoveElements.deleteButtonElements.length).to.eql(1)

        await Main.openUrl()
        await (await Main.addRemoveElement).click()
        expect(await AddRemoveElements.deleteButtonElements.length).to.eql(0)

    })
});