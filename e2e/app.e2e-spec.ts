import { CmPage } from './app.po';

describe('cm App', () => {
  let page: CmPage;

  beforeEach(() => {
    page = new CmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
