@regression
Feature: 365 Portal
  Scenario: 365 Portal account login
    Given user on the login page
    Then user click on Portal button
    Then user should see the login page
    When user enters valid credentials and click on login button
    And user should be navigated to the Office page
    When user click on Moodle NAU button
    Then user should see Moodle main page

  Scenario: 365 Portal account login(negative)
    Given user on the login page
    Then user click on Portal button
    Then user should see the login page
    When user enters invalid credentials and click on login button
    And user should not be navigated to the Office page
