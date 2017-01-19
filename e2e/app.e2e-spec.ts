import { FirebaseAuth01Page } from './app.po';

describe('firebase-auth01 App', function() {
  let page: FirebaseAuth01Page;

  beforeEach(() => {
    page = new FirebaseAuth01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
