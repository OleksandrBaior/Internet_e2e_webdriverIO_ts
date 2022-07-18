import {Main} from '../pageobjects/MainPage';
import * as assert from 'assert';

describe('The main page', () => {

    it('shoud open', async() => {
       await Main.open();
       await browser.pause(2000);

       const acrtualUrl = await browser.getUrl();
       await console.log('TEST '+ acrtualUrl);
       
       assert(acrtualUrl ===  Main.mainUrl);
    });

});


