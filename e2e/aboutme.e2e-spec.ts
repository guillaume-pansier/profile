import { AppPage } from './app.po';
import { protractor, element } from 'protractor';
import { AboutMePage } from './aboutme.po';

describe('profile AboutMe', () => {
  let page: AboutMePage;

  beforeEach(() => {
    page = new AboutMePage();
  });

  it('should display email and linkedin contacts in side drawer', () => {
    page.navigateTo();
    expect(page.getDrawerSideSectionsWithTitle('CONTACTS').count()).toBe(1);
    expect(page.getDrawerSideSectionsWithTitle('CONTACTS').first().isDisplayed()).toBeTruthy();
    expect(page.getDrawerSideContacts() .map(title => title.getAttribute('href')))
    .toEqual(jasmine.arrayContaining([
      'mailto:guillaume.pansier@gmail.com?Subject=Contact',
      'https://www.linkedin.com/in/gpansier',
      protractor.browser.baseUrl + '/'
    ]));
  });

  it('should display skills in side drawer', () => {
    page.navigateTo();
    expect(page.getDrawerSideSectionsWithTitle('SKILLS').count()).toBe(1);
    expect(page.getDrawerSideSectionsWithTitle('SKILLS').first().isDisplayed()).toBeTruthy();
  });

  it('should display languages in side drawer', () => {
    page.navigateTo();
    expect(page.getDrawerSideSectionsWithTitle('LANGUAGES').count()).toBe(1);
    expect(page.getDrawerSideSectionsWithTitle('LANGUAGES').first().isDisplayed()).toBeTruthy();
  });


  it('should display work experience in main drawer', () => {
    page.navigateTo();
    expect(page.getDrawerMainSectionsWithTitle('Work Experience').count()).toBe(1);
    expect(page.getDrawerMainSectionsWithTitle('Work Experience').first().isDisplayed()).toBeTruthy();
  });

  it('should display education in main drawer', () => {
    page.navigateTo();
    expect(page.getDrawerMainSectionsWithTitle('Education').count()).toBe(1);
    expect(page.getDrawerMainSectionsWithTitle('Education').first().isDisplayed()).toBeTruthy();
  });

  it('should display certifications in main drawer', () => {
    page.navigateTo();
    expect(page.getDrawerMainSectionsWithTitle('Certifications').count()).toBe(1);
    expect(page.getDrawerMainSectionsWithTitle('Certifications').first().isDisplayed()).toBeTruthy();
  });

});
