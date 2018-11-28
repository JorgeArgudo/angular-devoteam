import { HomePage } from './home.po';
import { TasksPage } from './tasks.po';
import { AboutPage } from './about.po';

describe('Home page de la app', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Saludos a angular-devoteam!');
  });
});

describe('TasksPage', () => {
  let page: TasksPage;

  beforeEach(() => {
    page = new TasksPage();
  });

  it('should display a P element', () => {
    page.navigateTo();
    expect(page.getTextTest()).toEqual('tasks works!');
  });
})

describe('AboutPage', () => {
  let page: AboutPage;

  beforeEach(() => {
    page = new AboutPage();
  });

  it('should display a P element', () => {
    page.navigateTo();
    expect(page.getTextTest()).toEqual('about works!');
  });
})