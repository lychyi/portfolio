import { LchyiIoPage } from './app.po';

describe('lchyi-io App', function() {
  let page: LchyiIoPage;

  beforeEach(() => {
    page = new LchyiIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
