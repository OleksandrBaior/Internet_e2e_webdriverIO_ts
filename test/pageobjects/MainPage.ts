import { BasePage } from "./BasePage";


export const mainUrl = 'http://the-internet.herokuapp.com/';

export class MainPage extends BasePage {   
    
    public get aBTesting(){ return $('//a[@href="/abtest"]')};
    public get addRemoveElements(){ return $('//a[@href="/add_remove_elements/"]')};
    public get alllElements(){ return $$('//*[@id="content"]/ul/li/a')};
    public get addRemoveElement(){ return $('//*[@id="content"]/ul/li[2]/a')};
    public get basicAuthLink(){return $('//*[@id="content"]/ul/li[3]/a') }


    public async openUrl(){
        await super.openUrl(mainUrl)
    }   
    
   
}

export const Main = new MainPage();




