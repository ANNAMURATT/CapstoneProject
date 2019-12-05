@regression
Feature: Moodle page
  Scenario: Moodle page login
    Given user on the login page
    Then user click on Portal button
    Then user should see the login page
    When user enters valid credentials and click on login button
    And user should be navigated to the Office page
    When user click on Moodle NAU button
    Then user should see Moodle main page
    Then user should see his/her name on the right top of the page

    Scenario: Moodle page enrolled classes
      Given user on the login page
      Then user click on Portal button
      Then user should see the login page
      When user enters valid credentials and click on login button
      And user should be navigated to the Office page
      When user click on Moodle NAU button
      Then user should see Moodle main page
      And user should see the course names which he/she already enrolled

    Scenario: Moodle page upcoming events
      Given user on the login page
      Then user click on Portal button
      Then user should see the login page
      When user enters valid credentials and click on login button
      And user should be navigated to the Office page
      When user click on Moodle NAU button
      Then user should see Moodle main page
      Then user should see the upcoming events


    Scenario: Moodle page navigate course name
      Given user on the login page
      Then user click on Portal button
      Then user should see the login page
      When user enters valid credentials and click on login button
      And user should be navigated to the Office page
      When user click on Moodle NAU button
      Then user should see Moodle main page
      And user mouse hover over on my courses button
      When user click on random course name
      Then user should see the course name on the top

  Scenario: Moodle page side menu names
    Given user on the login page
    Then user click on Portal button
    Then user should see the login page
    When user enters valid credentials and click on login button
    And user should be navigated to the Office page
    When user click on Moodle NAU button
    Then user should see Moodle main page
    And user should see the following menu names on the right side menu
      | Upcoming events |
      | Navigation      |
      | Online users    |
      | Activities      |
      | Timeline        |