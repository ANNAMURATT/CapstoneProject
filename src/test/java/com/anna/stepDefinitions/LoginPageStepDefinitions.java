package com.anna.stepDefinitions;

import com.anna.utilities.ConfigurationReader;
import com.anna.utilities.Driver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageStepDefinitions {
    @Given("user on the login page")
    public void user_on_the_login_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    }

    @When("user logs using valid username and password")
    public void user_logs_using_valid_username_and_password() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("homepage should be displayed")
    public void homepage_should_be_displayed() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }
}
