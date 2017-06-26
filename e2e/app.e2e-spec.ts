import { MyohPage } from './app.po';

describe('myoh App', () => {
  let page: MyohPage;

  beforeEach(() => {
    page = new MyohPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
