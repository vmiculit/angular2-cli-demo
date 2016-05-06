export class Angular2CliDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-cli-demo-app h1')).getText();
  }
}
