@smoke @regression
Feature: Main page modulus

  Scenario: Verifying Main page modulus
    Given user on the login page
    Then main logo must be "North American University"
    And header menu names should be displayed:
      |Request Info     |
      |Apply Now        |
      |Athletics        |
      |365 Portal       |
    And main menu names should be displayed:
    |Admissions     |
    |Academics      |
    |Faculty & Staff|
    |Campus Life    |
    |Students       |
    |About NAU      |