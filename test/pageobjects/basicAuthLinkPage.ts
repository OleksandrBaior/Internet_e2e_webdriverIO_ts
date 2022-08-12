import { BasePage } from "./BasePage";

export const basicAuthLinkLink: String = 'the-internet.herokuapp.com/basic_auth';
export const user: String = 'admin';
export const password: String = 'admin';
export const text: String = 'Congratulations! You must have the proper credentials.'

class BasicAuthPage extends BasePage {

        public get Congtext() {return $('//*[@id="content"]/div/p')}

        public async openUrl(){
            await super.openUrl('https://'+user+':'+password+'@'+basicAuthLinkLink);
    }

}

export const BasicAuth = new BasicAuthPage()