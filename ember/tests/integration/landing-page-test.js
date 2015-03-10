import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - Landing Page', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

test('Show welcome me to Boston Ember', function(assert) {
  visit('/').then(function() {
    assert.equal(find('h2#title').text(), 'Welcome to Boston Ember');
  });
});

test('Should allow navigation back to route from another page', function(assert) {
  visit('/about').then(function() {
    click("a:contains('Home')").then(function() {
      assert.notEqual(find('h3').text(), 'About');
    });
  });
});
