describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=samplecomponent--primary'));

  it('should render the component', () => {
    cy.get('aquascape-diary-sample').should('exist');
  });
});
