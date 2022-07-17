

class MainPage {
    
    // @param path path of the sub page (e.g. /path/to/page.html)
    public open (path: string) {
        return browser.url(`http://the-internet.herokuapp.com/${path}`)
    }
    
}


export const Main =  new MainPage();
