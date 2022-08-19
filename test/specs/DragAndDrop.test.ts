import { DragAndDrop } from "../pageobjects/DragAndDropPage";
import * as chai from "chai";
var expect = chai.expect;

describe('Drag and Drop', () => {
    it('should click checkbox1', async () => {
        await DragAndDrop.openUrl(DragAndDrop.dragAndDropLink);
        await DragAndDrop.dragAndDrop();
       
    });
});