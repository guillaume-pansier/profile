import { browser, by, element } from 'protractor';

export class InterestsPage {
  navigateTo() {
    return browser.get('/interests');
  }


  getAllCards() {
    return element.all(by.css('mat-card mat-card-title-group mat-card-title')).map(title => title.getText());
  }

  getCardWithTitle(cardTitle: string) {
    return element.all(by.css('mat-card.mat-card mat-card-title-group mat-card-title'))
    .filter(title => title.getText().then(titleText => titleText === cardTitle));
  }

  getCardButtonAction(buttonText: string) {
    return element(by.buttonText(buttonText));
  }

}
