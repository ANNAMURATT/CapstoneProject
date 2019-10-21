@regression
  Feature: Apply Now
    Scenario: Sign up for apply
      Given user on the login page
      When user click on Apply Now button
      Then page should navigate to the Apply page
      When user click on Apply button
      Then page should navigate to the Sign Up page
      And  user enters requested informations and click accept terms and click sign up button
      Then user successfully sign up for the app