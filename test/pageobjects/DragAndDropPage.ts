import { BasePage } from "./BasePage";

class DragAndDropPage extends BasePage {
    
    public get dragAndDropLink() { return 'http://the-internet.herokuapp.com/drag_and_drop' };
    public get boxA() { return $('//*[@id="column-a"]')};
    public get boxB() { return $('//*[@id="column-b"]')};

    public async dragAndDrop() {
        await this.boxA.dragAndDrop(await this.boxB);
    }
    
}

export const DragAndDrop = new DragAndDropPage();