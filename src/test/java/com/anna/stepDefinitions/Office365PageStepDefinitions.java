package com.anna.stepDefinitions;

import com.anna.pages.MainPage;
import com.anna.pages.Office365Page;
import com.anna.utilities.ConfigurationReader;
import com.anna.utilities.Driver;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;
import java.util.Set;

public class Office365PageStepDefinitions {






    @Then("user click on Portal button")
    public void user_click_on_Portal_button() {
        MainPage mainPage = new MainPage();
        mainPage.Portal.click();
    }

    @When("user should be navigated to the Office page")
    public void user_should_be_navigated_to_the_Office_page() {

        String url = Driver.getDriver().getCurrentUrl();
    }

    @When("user click on Moodle NAU button")
    public void user_click_on_Moodle_NAU_button() {

        Office365Page office = new Office365Page();
        office.moodle.click();
    }

    @Then("user should see the login page")
    public void user_should_see_the_login_page() {

        String currentWindow = Driver.getDriver().getWindowHandle();
        System.out.println("current window should be office:"+currentWindow);
        Set <String> allWindows = Driver.getDriver().getWindowHandles();
        System.out.println("all windows on 1st"+allWindows);

        for (String window:allWindows){
            if (!window.equals(currentWindow)){
                Driver.getDriver().switchTo().window(window);
            }
            currentWindow = Driver.getDriver().getWindowHandle();
            System.out.println(currentWindow);
        }
    }

    @When("user enters valid credentials and click on login button")
    public void user_enters_valid_credentials_and_click_on_login_button() throws InterruptedException {
        Office365Page office = new Office365Page();
        office.emailInput.sendKeys(ConfigurationReader.getProperty("username"));
        office.next.click();
        Thread.sleep(3000);
        office.passwordInput.sendKeys(ConfigurationReader.getProperty("password"));
        Thread.sleep(3000);
        office.signIn.click();
        office.next.click();

    }

    @When("user enters invalid credentials and click on login button")
    public void user_enters_invalid_credentials_and_click_on_login_button() throws InterruptedException {
        Office365Page office = new Office365Page();
        office.emailInput.sendKeys(ConfigurationReader.getProperty("username"));
        office.next.click();
        Thread.sleep(3000);
        office.passwordInput.sendKeys(ConfigurationReader.getProperty("wrongpassword"));
        Thread.sleep(3000);
        office.signIn.click();

    }

    @Then("user should see Moodle main page")
    public void user_should_see_Moodle_main_page() {
        String currentWindow = Driver.getDriver().getWindowHandle();
        System.out.println("current window should be moodle:"+currentWindow);
        Set <String> allWindows = Driver.getDriver().getWindowHandles();
        System.out.println("all windows on office"+allWindows);

        for (String window:allWindows){
            if (!currentWindow.equals(window)){
                Driver.getDriver().switchTo().window(window);
            }
        }
        currentWindow = Driver.getDriver().getWindowHandle();
        System.out.println(currentWindow);

       String url = Driver.getDriver().getCurrentUrl();
       System.out.println("the current url is"+url);
    }

    @Then("user should not be navigated to the Office page")
    public void user_should_not_be_navigated_to_the_Office_page() {

        String url = Driver.getDriver().getCurrentUrl();
        System.out.println("the current url is"+url);
    }
}
