import * as chai from "chai"
import { ContextMenu } from '../pageobjects/ContextMenuPage';
var expect = chai.expect;

describe('Context Menu', async () => {
    it('should open the Context Menu page', async () => {
       await ContextMenu.openUrl(ContextMenu.contextMenuLink);
       expect(await ContextMenu.getUrl()).to.equal(ContextMenu.contextMenuLink);
    });

    it('should display the context menu', async () => {
        await ContextMenu.openUrl(ContextMenu.contextMenuLink);
        await ContextMenu.clickRightContextMenu();      
        await browser.acceptAlert();
    });



});