import { HTCPortalTemplatePage } from './app.po';

describe('HTCPortal App', function() {
  let page: HTCPortalTemplatePage;

  beforeEach(() => {
    page = new HTCPortalTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
