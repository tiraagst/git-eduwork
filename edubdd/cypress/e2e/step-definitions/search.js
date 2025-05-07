const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
import SearchPage from '../../support/pages/SearchPage';

Given('I open the Zero Bank homepage', () => {
  SearchPage.visit();
});

When('I type {string} into the searchbox', (keyword) => {
  SearchPage.typeSearchKeyword(keyword);
});

Then('I should see results that contain the word {string}', (keyword) => {
  SearchPage.verifySearchResult(keyword);
});
