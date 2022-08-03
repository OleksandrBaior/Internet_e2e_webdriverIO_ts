import { BasePage } from "./BasePage";

export class ABTestControlPage extends BasePage {   
    
    public get title(){ return $('//div[@id="content"]/div/h3')};
     
}


export const ABTestControl =  new ABTestControlPage();