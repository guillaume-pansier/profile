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
    expect(page.getDrawerSideContacts() .map(title => title.getAttribute('href')))
    .toEqual(['mailto:guillaume.pansier@gmail.com?Subject=Contact', 'https://be.linkedin.com/in/guillaume-pansier-8b479587']);
  });

  it('should display skills in side drawer', () => {
    page.navigateTo();
    expect(page.getDrawerSideSectionsWithTitle('Skills').count()).toBe(1);
    expect(page.getDrawerSideSectionsWithTitle('Skills').first().isDisplayed()).toBeTruthy();
  });

  it('should display languages in side drawer', () => {
    page.navigateTo();
    expect(page.getDrawerSideSectionsWithTitle('Languages').count()).toBe(1);
    expect(page.getDrawerSideSectionsWithTitle('Languages').first().isDisplayed()).toBeTruthy();
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
