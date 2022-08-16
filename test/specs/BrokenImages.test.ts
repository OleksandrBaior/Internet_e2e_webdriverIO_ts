import { BrokenImages, brokenImagesLink } from "../pageobjects/BrokenImagesPage";
import * as chai from "chai";
import { Main } from "../pageobjects/MainPage";
var expect = chai.expect;

describe('BrokenImages', () => {
    it('should show all images', async() => {
        await BrokenImages.openUrl();
        expect(await BrokenImages.getImages()).to.be.lengthOf(3)

        const images = await BrokenImages.getImages();
            for await (const image of images) {
            const AbsolutePath = BrokenImages.getAbsolutePath(await image.getAttribute('src'));
            const response = await BrokenImages.getData(AbsolutePath);
            expect(response.status, `The broken image is <${await image.getAttribute('src')}>`).to.be.equal(200);
        }
    });

    it('should enter from Main page', async() => {
        await Main.openUrl();
        await Main.brokenImagesLink.click();
        expect(await BrokenImages.getUrl()).to.be.equal(brokenImagesLink);
    });
});