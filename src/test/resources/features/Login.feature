
  Feature: login functionality

    Scenario: user login
      Given user on the login page
      When user logs using valid username and password
      Then homepage should be displayed