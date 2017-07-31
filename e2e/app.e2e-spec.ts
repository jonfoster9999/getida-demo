import { GetidaLoginPage } from './app.po';

describe('getida-login App', () => {
  let page: GetidaLoginPage;

  beforeEach(() => {
    page = new GetidaLoginPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
