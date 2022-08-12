import axios from "axios";
import {BasePage} from "./BasePage";
import {mainUrl} from './MainPage'

export const brokenImagesLink = 'http://the-internet.herokuapp.com/broken_images';

export class BrokenImagesPage extends BasePage {

    public get images() { return $$('#content img'); }

    public async openUrl(): Promise<void> {
       await super.openUrl(brokenImagesLink);
    }

    public getImages(): Promise<WebdriverIO.Element[]> {
        return this.images;
    }

    public getAbsolutePath(relativePath: String) {
        return mainUrl + relativePath;
    }
    async getData(url: string): Promise<any> {
        const response = await axios(url).then().catch((error) => {return error.response});
        return response
     }

}

export const BrokenImages = new BrokenImagesPage();