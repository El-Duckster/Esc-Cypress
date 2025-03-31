describe('home page', () => {
  it('should load the homepage on port 3000 and display Hacker Escape Rooms as a h1 text', () => {
    cy.visit( '/' );
    
    cy.request(' http://localhost:3000/EscapeRoom-grupp2/').then((response) => {
      expect(response.status).to.equal(200);
    });
   
    cy.get( 'h1' ).should( 'contain', 'Hacker Escape Rooms' );
  } );
})