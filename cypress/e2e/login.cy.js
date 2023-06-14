describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display Homepage with Log in button correctly', () => {
    // Verify the Log in button is visible in the Home Page if the user not logged in
    cy.get('button').contains(/^Log in$/).should('be.visible');
  });

  it('should display Login Modal/Form when the login button clicked', () => {
    // Click Log in Button in the Home Page
    cy.get('button').contains(/^Log in$/).click();

    // Verify all the element inside the Log in modal is visible
    cy.get('input[id=email_login]').should('be.visible');
    cy.get('input[id=password_login]').should('be.visible');
    cy.get('button').contains(/^Log in to your account$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    // Verify the Log in button is visible in the Home Page if the user not logged in
    cy.get('button').contains(/^Log in$/).click();

    // Click Log in to your account from Log in modal
    cy.get('button').contains(/^Log in to your account$/).click();

    // verify the window.alert to pops the message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when email is not a valid email', () => {
    // Verify the Log in button is visible in the Home Page if the user not logged in
    cy.get('button').contains(/^Log in$/).click();

    // Click the input email element and type the invalid email inside of it
    cy.get('input[id=email_login]').click();
    cy.get('input[id=email_login]').type('nodomaintest');

    // Click Log in to your account from Log in modal
    cy.get('button').contains(/^Log in to your account$/).click();

    // verify the window.alert to pops the message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });

  it('should display alert when password is empty', () => {
    // Verify the Log in button is visible in the Home Page if the user not logged in
    cy.get('button').contains(/^Log in$/).click();

    // Click the input email element and type the valid email inside of it
    cy.get('input[id=email_login]').click();
    cy.get('input[id=email_login]').type('test@gmail.com');

    // Click Log in to your account from Log in modal
    cy.get('button').contains(/^Log in to your account$/).click();

    // verify the window.alert to pops the message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when username and password are wrong', () => {
    // Verify the Log in button is visible in the Home Page if the user not logged in
    cy.get('button').contains(/^Log in$/).click();

    // Click the input email element and type the valid email inside of it
    cy.get('input[id=email_login]').click();
    cy.get('input[id=email_login]').type('test@gmail.com');
    // Click the input email element and type the wrong password inside of it
    cy.get('input[id=password_login]').click();
    cy.get('input[id=password_login]').type('wrongpasswrodfortest');

    // Click Log in to your account from Log in modal
    cy.get('button').contains(/^Log in to your account$/).click();

    // verify the window.alert to pops the message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage with profile avatar', () => {
    // Verify the Log in button is visible in the Home Page if the user not logged in
    cy.get('button').contains(/^Log in$/).click();

    // Click the input email element and type the valid email inside of it
    cy.get('input[id=email_login]').click();
    cy.get('input[id=email_login]').type('ciki@gmail.com');
    // Click the input email element and type the correct password inside of it
    cy.get('input[id=password_login]').click();
    cy.get('input[id=password_login]').type('cikiciki');

    // Click Log in to your account from Log in modal
    cy.get('button').contains(/^Log in to your account$/).click();

    // The name and email user must be visible if user Log in successfully
    cy.get('[data-cy="user-avatar"]').should('be.visible');
  });
});
