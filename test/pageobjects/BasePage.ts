
export class BasePage {
       
   public async openUrl (path: string) {
        await browser.url(path)
    }

    public async getElement(element: string) {
        return await $(element);
      }
      
    public async getElements(element: string) {
      return await $$(element);
    }

    public async clickElement(element: string): Promise<void> {
       (await this.getElement(element)).click();
    }

    public async getValue(element: string){
       await this.getElement(element)
    }

    public async getUrl() {
       return await browser.getUrl();
    }
    
}

