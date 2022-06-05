describe('common-react: HeaderBar component', () => {
  describe('AnonymousDefault', () => {
    beforeEach(() => cy.visit('/iframe.html?id=headerbar--AnonymousDefault'));

    // TODO: Disabled due to not being included in ci/cd yet, and runtime performance.
    // it('should render', () => {
    //   cy.get('h1').should('contain', 'Welcome to HeaderBar!');
    // });
  });
  // describe('AuthenticatedEmptyDefault', () => {
  //   beforeEach(() =>
  //     cy.visit('/iframe.html?id=headerbar--AuthenticatedEmptyDefault')
  //   );

  //   it('should render');
  // });
  // describe('WithSearchExample', () => {
  //   beforeEach(() => cy.visit('/iframe.html?id=headerbar--WithSearchExample'));

  //   it('should render');
  // });
});
