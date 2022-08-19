import { BasePage } from "./BasePage";

class DragAndDropPage extends BasePage {
    
    public get dragAndDropLink() { return 'http://the-internet.herokuapp.com/drag_and_drop' };
    public get boxA() { return $('//*[@id="column-a"]')};
    public get boxB() { return $('//*[@id="column-b"]')};

    public async dragAndDrop() {
        let elemA = await $("#column-a")
        let elemB = await $("#column-b")
        await browser.pause(2000);
        // await elemA.dragAndDrop(elemB) https://github.com/webdriverio/webdriverio/issues/4134 (wait for answer)
        await browser.pause(2000);
    }
    
}

export const DragAndDrop = new DragAndDropPage();