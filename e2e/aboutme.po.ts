import { browser, by, element } from 'protractor';

export class AboutMePage {
  navigateTo() {
    return browser.get('/aboutme');
  }


  getDrawerSideSectionTitles() {
    return element.all(by.css('.drawer-side .side-section h4.lead')).map(title => title.getText());
  }

  getDrawerSideSectionsWithTitle(sectionTitle: string) {
    return element.all(by.css('.drawer-side .side-section h4.lead'))
    .filter(title => title.getText().then(titleTex => titleTex === sectionTitle));
  }

  getDrawerMainSectionsWithTitle(sectionTitle: string) {
    return element.all(by.css('.main-content.mat-drawer-content h2'))
    .filter(title => title.getText().then(titleTex => titleTex === sectionTitle));
  }

  getDrawerSideContacts() {
    return element.all(by.css('.drawer-side .side-section .contact-container a'));
  }

  getDockerLogo() {
    return element(by.css('.logo-container a')).getTagName();
  }
}
