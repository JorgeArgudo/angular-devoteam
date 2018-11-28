import { browser, by, element } from 'protractor';

export class AboutPage{
    navigateTo() {
        return browser.get('/about');
      }
    
      getTextTest() {
        return element(by.css('dvt-about p')).getText();
      }
}