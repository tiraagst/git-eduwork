Feature: Search functionality

As a valid user
I want to be able to search for content

Scenario: Successful search for a keyword
Given I open the zero bank homepage   
When I type "online" into the searchbox
Then I should see results that contain the word "online"