describe('Singup Modal spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display Homepage with Sign up button correctly', () => {
    // Verify the Sign up button is visible in the Home Page if the user not logged in
    cy.get('button').contains(/^Sign up$/).should('be.visible');
  });

  it('should display Singup Modal/Form when the Sign up button clicked', () => {
    // Click Sign Up Button in the Home Page
    cy.get('button').contains(/^Sign up$/).click();

    // Verify all the element inside the sign up modal is visible
    cy.get('input[id=name_signup]').should('be.visible');
    cy.get('input[id=email_signup]').should('be.visible');
    cy.get('input[id=password_signup]').should('be.visible');
    cy.get('button').contains(/^Sign up to Blaast$/).should('be.visible');
  });

  it('should display alert when name is empty', () => {
    // Click Sign Up Button in the Home Page
    cy.get('button').contains(/^Sign up$/).click();

    // Click Sign Up to Blass from Sign up modal
    cy.get('button').contains(/^Sign up to Blaast$/).click();

    // verify the window.alert to pops the message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"name" is not allowed to be empty');
    });
  });

  it('should display alert when email is empty', () => {
    // Click Sign Up Button in the Home Page
    cy.get('button').contains(/^Sign up$/).click();

    // Click the input name element and type the name inside of it
    cy.get('input[id=name_signup]').click();
    cy.get('input[id=name_signup]').type('Tester');

    // Click Sign Up to Blass from Sign up modal
    cy.get('button').contains(/^Sign up to Blaast$/).click();

    // verify the window.alert to pops the message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when email is not a valid email', () => {
    // Click Sign Up Button in the Home Page
    cy.get('button').contains(/^Sign up$/).click();

    // Click the input name element and type the name inside of it
    cy.get('input[id=name_signup]').click();
    cy.get('input[id=name_signup]').type('Tester');
    // Click the input email element and type the invalid email inside of it
    cy.get('input[id=email_signup]').click();
    cy.get('input[id=email_signup]').type('nodomaintest');

    // Click Sign Up to Blass from Sign up modal
    cy.get('button').contains(/^Sign up to Blaast$/).click();

    // verify the window.alert to pops the message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });

  it('should display alert when password is empty', () => {
    // Click Sign Up Button in the Home Page
    cy.get('button').contains(/^Sign up$/).click();

    // Click the input name element and type the name inside of it
    cy.get('input[id=name_signup]').click();
    cy.get('input[id=name_signup]').type('Tester');
    // Click the input email element and type the valid email inside of it
    cy.get('input[id=email_signup]').click();
    cy.get('input[id=email_signup]').type('test@gmail.com');

    // Click Sign Up to Blass from Sign up modal
    cy.get('button').contains(/^Sign up to Blaast$/).click();

    // verify the window.alert to pops the message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });
});
