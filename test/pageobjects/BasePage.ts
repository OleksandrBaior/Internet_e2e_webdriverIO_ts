

export class BasePage {
    
    // @param path path of the sub page (e.g. /path/to/page.html)
    public open (path: string) {
        return browser.url(path)
    }
    
}

export const Base = new BasePage();