import {BasicAuth, text} from "../pageobjects/basicAuthLinkPage";
import * as chai from "chai"
var expect = chai.expect;

describe('basicAuth', () => {
    it('should enter with valid credentials', async () => {
        await BasicAuth.openUrl()
        expect(await(BasicAuth.Congtext.getText())).to.be.eql(text)
    });
});

