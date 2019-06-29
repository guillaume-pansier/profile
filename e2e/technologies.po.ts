import { browser, by, element } from 'protractor';

export class TechnologiesPage {

  navigateTo() {
    return browser.get('/technologies');
  }

  getAllCards() {
    return element.all(by.css('mat-card mat-card-title-group mat-card-title')).map(title => title.getText());
  }

  getCardTitle(cardTitle: string) {
    return element.all(by.css('mat-card mat-card-header mat-card-title'))
    .filter(title => title.getText().then(titleText => titleText === cardTitle));
  }

  clickOnWebsiteCard() {
    return element(by.id('website-card')).click();
  }

  clickOnCiCdCard() {
    return element(by.id('cicd-card')).click();
  }

  getAngularTechnologiesPortal() {
    return element(by.id('website-technologies'));
  }

  getCiCdTechnologiesPortal() {
    return element(by.id('cicd-technologies'));
  }

}
