import { BasePage } from "./BasePage";


export class MainPage extends BasePage {
    
    mainUrl = 'http://the-internet.herokuapp.com/';

    open() {
        super.open(this.mainUrl)
    }
        

}


export const Main =  new MainPage();
