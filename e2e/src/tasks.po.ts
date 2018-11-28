import { browser, by, element } from 'protractor';

export class TasksPage{
    navigateTo() {
        return browser.get('/tasks');
      }
    
      getTextTest() {
        return element(by.css('dvt-tasks p')).getText();
      }
}