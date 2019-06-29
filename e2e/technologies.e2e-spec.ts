import { protractor, element, browser } from 'protractor';
import { InterestsPage } from './interests.po';
import { TechnologiesPage } from './technologies.po';

describe('technologies', () => {
  let page: TechnologiesPage;

  beforeEach(() => {
    page = new TechnologiesPage();
  });

  it('should display website technologies card', () => {
    page.navigateTo();
    expect(page.getCardTitle('Website').count()).toBe(1);
    expect(page.getCardTitle('Website').first().isDisplayed()).toBeTruthy();
  });

  it('should display cicd technologies card', () => {
    page.navigateTo();
    expect(page.getCardTitle('CI/CD').count()).toBe(1);
    expect(page.getCardTitle('CI/CD').first().isDisplayed()).toBeTruthy();
  });

  it('should not display any technologies before click', () => {
    page.navigateTo();
    expect(page.getAngularTechnologiesPortal().isPresent()).toBeFalsy();
    expect(page.getCiCdTechnologiesPortal().isPresent()).toBeFalsy();
  });

  it('should display website technologies after click on card Website', () => {
    page.navigateTo();
    page.clickOnWebsiteCard().then(() => {
      expect(page.getAngularTechnologiesPortal().isDisplayed()).toBeTruthy();
    });
  });

  it('should display cicd technologies after click on card Website', () => {
    page.navigateTo();
    page.clickOnCiCdCard().then(() => {
      expect(page.getCiCdTechnologiesPortal().isDisplayed()).toBeTruthy();
    });
  });
});
