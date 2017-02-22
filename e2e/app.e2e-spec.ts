import { AvengersAppPage } from './app.po';

describe('avengers-app App', function() {
  let page: AvengersAppPage;

  beforeEach(() => {
    page = new AvengersAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
