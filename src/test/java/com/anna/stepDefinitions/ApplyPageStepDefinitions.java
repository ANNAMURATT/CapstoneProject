package com.anna.stepDefinitions;

import com.anna.pages.ApplyNowPage;
import com.anna.pages.MainPage;
import com.anna.utilities.Driver;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.log4j.Logger;

import java.util.Set;

public class ApplyPageStepDefinitions {

    Logger log = Logger.getLogger(ApplyPageStepDefinitions.class);

    MainPage mainPage = new MainPage();
    ApplyNowPage applyNowPage = new ApplyNowPage();
    @When("user click on Apply Now button")
    public void user_click_on_Apply_Now_button() {
        log.info("Getting current window");
        String currentWindow = Driver.getDriver().getWindowHandle();
        log.info(currentWindow);

        log.info("Clicking on to Apply button");
        mainPage.Apply_Now.click();

       Set<String> windows = Driver.getDriver().getWindowHandles();
        for (String window:windows){
            log.info(window);
            if (!window.equals(currentWindow)){
                Driver.getDriver().switchTo().window(window);
            }
        }

    }

    @Then("page should navigate to the Apply page")
    public void page_should_navigate_to_the_Apply_page() {
        String pageTitle = Driver.getDriver().getTitle();
        log.info("the page title should be: "+pageTitle);
    }

    @When("user click on Apply button")
    public void user_click_on_Apply_button() {

        log.info("Clicking Apply button");
        log.warn(applyNowPage.apply.isDisplayed());
        applyNowPage.apply.click();

    }

    @Then("page should navigate to the Sign Up page")
    public void page_should_navigate_to_the_Sign_Up_page() {

        String pageTitle2 = Driver.getDriver().getTitle();
        log.info("the page title should be sign up: "+pageTitle2);

    }

    @Then("user enters requested informations and click accept terms and click sign up button")
    public void user_enters_requested_informations_and_click_accept_terms_and_click_sign_up_button() {
        log.info("Entering info for applying");
        applyNowPage.setSignUp("Andy Joe","andyj@gmail.com","andy123","andy123");


    }

    @Then("user successfully sign up for the app")
    public void user_successfully_sign_up_for_the_app() {
        log.info("Getting page title");
        String pageTitle3 = Driver.getDriver().getTitle();
        log.info("the page title should be success: "+pageTitle3);
        log.debug(pageTitle3);

    }
}
