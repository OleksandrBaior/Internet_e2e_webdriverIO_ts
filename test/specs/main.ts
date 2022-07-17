import {Main} from '../pageobjects/MainPage'

describe('The main page', () => {
    it('shoud open', async() => {
       await Main.open('/');
       await browser.pause(5000)
    });
});


