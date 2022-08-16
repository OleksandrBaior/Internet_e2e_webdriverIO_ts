import { BasePage } from "./BasePage";

class ContextMenuPage extends BasePage {
      
        public get contextMenuLink() {return 'http://the-internet.herokuapp.com/context_menu'};
        public get contextMenu() { return $('//*[@id="hot-spot"]') }
        
        public async clickRightContextMenu() {
            await this.contextMenu.click({ button: 2, x: -100, y: 10, skipRelease: true });
        }   
    

}

export const ContextMenu = new ContextMenuPage();