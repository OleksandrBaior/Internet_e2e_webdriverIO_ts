import * as chai from "chai"
import { DisappearingElements } from "../pageobjects/DisappearingElementsPage";
var expect = chai.expect;

describe('Disappearing Elements', () => {
    it('should open page', async () => {
        await DisappearingElements.openUrl(DisappearingElements.disappearingElementsLink);
        expect(await DisappearingElements.getUrl()).to.be.equal(DisappearingElements.disappearingElementsLink);
    });

    it('should  the <gallaryButton> button appears', async () => {
        await DisappearingElements.openUrl(DisappearingElements.disappearingElementsLink);
        const button = await DisappearingElements.waitButtonAppears(await DisappearingElements.gallaryButton);
        expect(button).to.be.true;
    });

    it('should click the <gallaryButton> button', async () => {
        await DisappearingElements.openUrl(DisappearingElements.disappearingElementsLink);
        await DisappearingElements.waitButtonAppears(await DisappearingElements.gallaryButton);
        await DisappearingElements.clickGallaryButton();
        expect(await DisappearingElements.getUrl()).to.be.equal(DisappearingElements.gallarybuttunUrl);
    });

});