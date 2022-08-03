import {mainUrl, Main} from '../pageobjects/MainPage';
import * as chai from "chai"
var expect = chai.expect;



describe('Landing page', async () => {
    
    beforeEach(async() => {
        await Main.openUrl();
    });

    it('shoud open url', async() => {
     
       await browser.pause(2000);
       console.log('TEST ' + Main.getUrl());
       expect(await Main.getUrl()).to.be.eql+(mainUrl)
    //    assert((await Main.getUrl()) === mainUrl);
    });

    it('should open link', async () => {
        await Main.aBTesting.click();
        // assert((await ABTestControl.title).isDisplayed)
        
        await browser.back();
        // assert((await Main.getUrl()) === mainUrl);
    });
 

    it('should check all elements is clickable', async () => {
        const arrayElements = await Main.alllElements 
        if(arrayElements.length>=1){
            for await (const element of arrayElements) {
                expect(await element.isClickable()).to.be.true;
            }
        } else {
            throw new Error(`No elements on this page`)
        } 
    });
  

        



});


