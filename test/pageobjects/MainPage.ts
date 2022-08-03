import { assert } from "chai";
import { BasePage } from "./BasePage";


export const mainUrl = 'http://the-internet.herokuapp.com/';

export class MainPage extends BasePage {   
    
    public get aBTesting(){ return $('//a[@href="/abtest"]')};
    public get addRemoveElements(){ return $('//a[@href="/add_remove_elements/"]')};
    public get alllElements(){ return $$('//*[@id="content"]/ul/li/a')};
  
    public async openUrl(){
        await super.openUrl(mainUrl)
    }   
    
   
}

export const Main = new MainPage();




