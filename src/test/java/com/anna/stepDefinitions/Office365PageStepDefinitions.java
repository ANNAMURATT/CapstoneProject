package com.anna.stepDefinitions;

import com.anna.pages.MainPage;
import com.anna.pages.MoodlePage;
import com.anna.pages.Office365Page;
import com.anna.utilities.ConfigurationReader;
import com.anna.utilities.Driver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class Office365PageStepDefinitions {

    Logger log = Logger.getLogger(Office365PageStepDefinitions.class);

    @Given("user on the login page")
    public void user_on_theLogin_page(){
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    }

    @Then("user click on Portal button")
    public void user_click_on_Portal_button() {
        log.info("user click on portal button");
        MainPage mainPage = new MainPage();
        mainPage.Portal.click();
    }

    @When("user should be navigated to the Office page")
    public void user_should_be_navigated_to_the_Office_page() {

        String url = Driver.getDriver().getCurrentUrl();
        log.info("the url should be: "+url);
    }

    @When("user click on Moodle NAU button")
    public void user_click_on_Moodle_NAU_button() {

        log.info("clicking on Moodle NAU");
        Office365Page office = new Office365Page();
        office.moodle.click();
    }

    @Then("user should see the login page")
    public void user_should_see_the_login_page() {

        String currentWindow = Driver.getDriver().getWindowHandle();
        log.info("current window should be office:"+currentWindow);
        Set <String> allWindows = Driver.getDriver().getWindowHandles();
        log.info("all windows available"+allWindows);

        log.info("switching to new window");
        for (String window:allWindows){
            if (!window.equals(currentWindow)){
                Driver.getDriver().switchTo().window(window);
            }
            currentWindow = Driver.getDriver().getWindowHandle();
            log.info("current window is: "+currentWindow);
        }
    }

    @When("user enters valid credentials and click on login button")
    public void user_enters_valid_credentials_and_click_on_login_button() throws InterruptedException {
        Office365Page office = new Office365Page();
        log.info("entering username");
        office.emailInput.sendKeys(ConfigurationReader.getProperty("username"));
        office.next.click();
        Thread.sleep(3000);
        log.info("entering password");
        office.passwordInput.sendKeys(ConfigurationReader.getProperty("password"));
//        Thread.sleep(3000);
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(),10);
        wait.until(ExpectedConditions.elementToBeClickable(office.signIn));
        log.info("clicking to sign in button");
        office.signIn.click();
        office.next.click();

    }

    @When("user enters invalid credentials and click on login button")
    public void user_enters_invalid_credentials_and_click_on_login_button() throws InterruptedException {
        log.info("entering username");
        Office365Page office = new Office365Page();
        office.emailInput.sendKeys(ConfigurationReader.getProperty("username"));
        office.next.click();
        log.info("entering password");
        Thread.sleep(3000);
        office.passwordInput.sendKeys(ConfigurationReader.getProperty("wrongpassword"));
        log.info("clicking to sig in button");
        Thread.sleep(3000);


    }

    @Then("user should see Moodle main page")
    public void user_should_see_Moodle_main_page() {
        String currentWindow = Driver.getDriver().getWindowHandle();
        log.info("current window should be moodle:"+currentWindow);
        Set <String> allWindows = Driver.getDriver().getWindowHandles();
        log.info("all windows available"+allWindows);

        log.info("switching to new window");
        for (String window:allWindows){
            if (!currentWindow.equals(window)){
                Driver.getDriver().switchTo().window(window);
            }
        }
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(),10);
        wait.until(ExpectedConditions.urlContains("moodle"));
        currentWindow = Driver.getDriver().getWindowHandle();

        log.info(currentWindow);

       String url = Driver.getDriver().getCurrentUrl();
       log.info("the current url is"+url);
        Assert.assertTrue(url.equals("https://moodle.na.edu/my/"));
    }

    @Then("user should not be navigated to the Office page")
    public void user_should_not_be_navigated_to_the_Office_page() {

        String url = Driver.getDriver().getCurrentUrl();
        log.info("the current url is"+url);
        Assert.assertFalse(url.equals("https://login.microsoftonline.com/common/login"));
    }

    @Then("user should see the following menu names on the right side menu")
    public void user_should_see_the_following_menu_names_on_the_right_side_menu(List<String> sideMenuNames) {

        MoodlePage moodlePage=new MoodlePage();
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(),5);
        wait.until(ExpectedConditions.visibilityOf(moodlePage.userName));
        List<String> menuNames = new ArrayList <>();

        for (WebElement w:moodlePage.mySideMenu){
            menuNames.add(w.getText());
        }
        log.info(sideMenuNames);
        log.info(menuNames);
        Assert.assertEquals(sideMenuNames,menuNames);
    }
}
