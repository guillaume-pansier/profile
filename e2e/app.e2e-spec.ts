import { AppPage } from './app.po';
import { protractor } from 'protractor';

describe('profile App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('more than a digital profile page: a technological playground');
  });

  it('should contain docker logo with link', () => {
    page.navigateTo();

    page.getDockerLogo().then( a => console.warn('tag', a));
    /*page.getDockerLogo().then( a => {
        expect(a).toEqual('dad');
        return;
      }

    );*/
    //expect(page.getDockerLogo()).toEqual('dad');

   /* page.getDockerLogo().click().then(
      () => expect(protractor.browser.getCurrentUrl())
      .toBe('https://www.docker.com/what-docker')
    );*/
  });
});
