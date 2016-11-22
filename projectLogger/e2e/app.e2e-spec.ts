import { ProjectLoggerPage } from './app.po';

describe('project-logger App', function() {
  let page: ProjectLoggerPage;

  beforeEach(() => {
    page = new ProjectLoggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
