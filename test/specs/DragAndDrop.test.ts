import { DragAndDrop } from "../pageobjects/DragAndDropPage";
import * as chai from "chai";
import { Main } from "../pageobjects/MainPage";
var expect = chai.expect;

describe('Drag and Drop', () => {
    it('should click checkbox1', async () => {
        await DragAndDrop.openUrl(DragAndDrop.dragAndDropLink);
        await DragAndDrop.dragAndDrop();
    });



    // it.only('should click checkbo2',  () => {
    //      browser.url('http://the-internet.herokuapp.com/dynamic_loading/2');
    //      $('//*[@id="start"]/button').click();
    //     // expect(await $('//*[@id="finish"]/h5').getText()).to.equal('Hello World!');
    //      browser.waitUntil( async () => {
    //         return await () =>{ };
    //     }, {
    //         timeout: 5000,
    //         timeoutMsg: 'expected text to be different after 5s'
    //     });
    // });


});