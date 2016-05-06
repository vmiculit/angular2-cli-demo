import { Angular2CliDemoPage } from './app.po';

describe('angular2-cli-demo App', function() {
  let page: Angular2CliDemoPage;

  beforeEach(() => {
    page = new Angular2CliDemoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-cli-demo works!');
  });
});
