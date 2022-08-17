import { BasePage } from "./BasePage";


class DisappearingElementsPage extends BasePage{

    public get disappearingElementsLink() {return 'http://the-internet.herokuapp.com/disappearing_elements'};
    public get gallaryButton() { return $('//*[@id="content"]/div/ul/li[5]/a ')};
    public get gallarybuttunUrl() { return 'http://the-internet.herokuapp.com/gallery/'}

    public async clickGallaryButton() {
        await this.gallaryButton.click();
    };

    public async waitButtonAppears(button: WebdriverIO.Element) {
        if (await button.isExisting()) {
            return true;
        } else {
            await browser.refresh();
            await this.waitButtonAppears(button);
        }
        
    }
    
}

export const DisappearingElements = new DisappearingElementsPage();