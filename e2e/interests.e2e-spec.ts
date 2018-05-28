import { AppPage } from './app.po';
import { protractor, element, browser } from 'protractor';
import { InterestsPage } from './interests.po';

describe('interests', () => {
  let page: InterestsPage;

  beforeEach(() => {
    page = new InterestsPage();
  });

  it('should display card for travel', () => {
    page.navigateTo();
    expect(page.getCardWithTitle('Travels').count()).toBe(1);
    expect(page.getCardWithTitle('Travels').first().isDisplayed()).toBeTruthy();
  });

  it('should display links from travel card to travel page', () => {
    page.navigateTo();

    const button = page.getCardButtonAction('Discover visited countries');
    expect(button.isDisplayed()).toBeTruthy();
    button.click();
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/interests/travel');
  });

  it('should display card for sport', () => {
    page.navigateTo();
    expect(page.getCardWithTitle('Sports').count()).toBe(1);
    expect(page.getCardWithTitle('Sports').first().isDisplayed()).toBeTruthy();
  });

  it('should display card for languages', () => {
    page.navigateTo();
    expect(page.getCardWithTitle('Languages').count()).toBe(1);
    expect(page.getCardWithTitle('Languages').first().isDisplayed()).toBeTruthy();
  });

  it('should display card for video games', () => {
    page.navigateTo();
    expect(page.getCardWithTitle('Video Games').count()).toBe(1);
    expect(page.getCardWithTitle('Video Games').first().isDisplayed()).toBeTruthy();
  });

  it('should display card for books', () => {
    page.navigateTo();
    expect(page.getCardWithTitle('Reading').count()).toBe(1);
    expect(page.getCardWithTitle('Reading').first().isDisplayed()).toBeTruthy();
  });
});
