import { AppPage } from './app.po';
import { protractor } from 'protractor';

describe('profile App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('more than a digital profile page: a technological playground');
  // });

  it('should go to page', () => {
    page.navigateTo();
  });

});
