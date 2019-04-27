import xmlrpc from 'xmlrpc';
import './commands';

beforeEach(function() {
  cy.log('Setting up API fixture');
  cy.exec('yarn cy:test:fixture:setup');
});

afterEach(function() {
  cy.log('Tearing down API fixture');
  cy.exec('yarn cy:test:fixture:teardown');
});
