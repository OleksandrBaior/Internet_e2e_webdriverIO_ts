
export class BasePage {
    
    // @param path path of the sub page (e.g. /path/to/page.html)
    open (path: string) {
         browser.url(path)
    }
    
}

export const Base = new BasePage();