package com.anna.stepDefinitions;

import com.anna.pages.MainPage;
import cucumber.api.java.an.E;
import cucumber.api.java.en.Then;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.List;

public class MainPageStepDefinitions {

    Logger log = Logger.getLogger(MainPageStepDefinitions.class);
    @Then("main logo must be {string}")
    public void main_logo_must_be(String expectedLogoText) {
        log.info("Checking logo text");
        log.info("Expected logo text --->"+expectedLogoText);

        MainPage mainPage = new MainPage();
        String actualLogoText = mainPage.NAU_logo.getAttribute("alt");
        log.info("Actual Logo Text ---->"+actualLogoText);
        Assert.assertEquals(expectedLogoText,actualLogoText);
    }
    @Then("header menu names should be displayed:")
    public void header_menu_names_should_be_displayed(List<String> headerMenuNames) {

        log.info("Expected header menu list ----> "+headerMenuNames);

        MainPage mainPage = new MainPage();
        for (WebElement menu:mainPage.header_menu_list){
            log.info(menu.getText());
        }
       Assert.assertEquals(headerMenuNames.size(),mainPage.header_menu_list.size());

    }

    @Then("main menu names should be displayed:")
    public void main_menu_names_should_be_displayed(List<String> expectedMainMenuNames) {


        System.out.println(expectedMainMenuNames);
        MainPage mainPage = new MainPage();
        for (WebElement menu:mainPage.main_menu_list){
            System.out.println(menu.getText());
        }
        Assert.assertEquals(expectedMainMenuNames.size(),mainPage.main_menu_list.size());

    }
}
