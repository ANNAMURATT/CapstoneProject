package com.anna.stepDefinitions;

import com.anna.pages.ApplyNowPage;
import com.anna.pages.MainPage;
import com.anna.utilities.Driver;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.Set;

public class ApplyPageStepDefinitions {

    MainPage mainPage = new MainPage();
    ApplyNowPage applyNowPage = new ApplyNowPage();
    @When("user click on Apply Now button")
    public void user_click_on_Apply_Now_button() {
        String currentWindow = Driver.getDriver().getWindowHandle();
        mainPage.Apply_Now.click();

       Set<String> windows = Driver.getDriver().getWindowHandles();
        for (String window:windows){
            if (!window.equals(currentWindow)){
                Driver.getDriver().switchTo().window(window);
            }
        }

    }

    @Then("page should navigate to the Apply page")
    public void page_should_navigate_to_the_Apply_page() {
        String pageTitle = Driver.getDriver().getTitle();
        System.out.println(pageTitle);
    }

    @When("user click on Apply button")
    public void user_click_on_Apply_button() {
        applyNowPage.apply.click();
    }

    @Then("page should navigate to the Sign Up page")
    public void page_should_navigate_to_the_Sign_Up_page() {
        String pageTitle2 = Driver.getDriver().getTitle();
        System.out.println(pageTitle2);
    }

    @Then("user enters requested informations and click accept terms and click sign up button")
    public void user_enters_requested_informations_and_click_accept_terms_and_click_sign_up_button() {
        applyNowPage.setSignUp("Andy Joe","andyj@gmail.com","andy123","andy123");


    }

    @Then("user successfully sign up for the app")
    public void user_successfully_sign_up_for_the_app() {
        String pageTitle3 = Driver.getDriver().getTitle();
        System.out.println(pageTitle3);
    }
}
