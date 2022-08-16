import { BasePage } from "./BasePage";


const AddRemoveElementsLink = 'http://the-internet.herokuapp.com/add_remove_elements/';


export class AddRemoveElementsPage extends BasePage {

    public get addElementButton (){return $('//*[@id="content"]/div/button')}
    public get deleteButton (){return $('//*[@id="elements"]/button')}
    public get deleteButtonElements (){return $$('//*[@id="elements"]/button')}

    public async openUrl() {
       await super.openUrl(AddRemoveElementsLink)
    }

    


}

export const AddRemoveElements = new AddRemoveElementsPage();