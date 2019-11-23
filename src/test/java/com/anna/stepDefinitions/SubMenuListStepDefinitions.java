package com.anna.stepDefinitions;

import com.anna.pages.*;
import com.anna.utilities.Driver;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.util.ArrayList;
import java.util.List;

public class SubMenuListStepDefinitions {

    Logger log = Logger.getLogger(SubMenuListStepDefinitions.class);

    @When("user mouse hover over on Admission button")
    public void user_mouse_hover_over_on_Admission_button() {
        log.info("Mouse hover over on to the Admission button");
        Actions actions = new Actions(Driver.getDriver());
        MainPage mainPage = new MainPage();
        actions.moveToElement(mainPage.admissions).build().perform();
    }

    @Then("user should see the list of sub menu")
    public void user_should_see_the_list_of_sub_menu(List<String> menu) {
        AdmissionsPage admissionsPage = new AdmissionsPage();
        List<WebElement> undergraduate = admissionsPage.undergraduate;
        List<WebElement> graduate = admissionsPage.graduate;
        List<WebElement> langSchool = admissionsPage.gufLanSchool;
        List<WebElement> allMenu = new ArrayList <>();
        allMenu.addAll(graduate);
        allMenu.addAll(undergraduate);
        allMenu.addAll(langSchool);

        log.info("Expected sub menu list: ----> "+menu);
        for (WebElement el:allMenu){
            log.info(el.getText());
           Assert.assertTrue(menu.contains(el.getText()));
        }
    }

    @When("user mouse hover over on Academics button")
    public void user_mouse_hover_over_on_Academics_button() {
        log.info("Mouse hover over on to the Academics button");
        Actions actions = new Actions(Driver.getDriver());
        MainPage mainPage = new MainPage();
        actions.moveToElement(mainPage.academics).build().perform();
    }

    @Then("user should see the list of Academics sub menu")
    public void user_should_see_the_list_of_Academics_sub_menu(List<String> menu) {
        AcademicsPage academicsPage = new AcademicsPage();
        List<WebElement> academicsMenuList = academicsPage.academicsMenuList;

        log.info("Expected sub menu list: ----> "+menu);
        for (WebElement el:academicsMenuList){
            log.info(el.getText());
            Assert.assertTrue(menu.contains(el.getText()));
        }
    }
    @When("user mouse hover over on Faculty&Staff button")
    public void user_mouse_hover_over_on_Faculty_Staff_button() {
        log.info("Mouse hover over on to the Faculty&Staff button");
        Actions actions = new Actions(Driver.getDriver());
        MainPage mainPage = new MainPage();
        actions.moveToElement(mainPage.facultyAndStaff).build().perform();
    }

    @Then("user should see the list of Faculty&Staff sub menu")
    public void user_should_see_the_list_of_Faculty_Staff_sub_menu(List<String> menu) {
        FacultyAndStaffPage facultyAndStaff = new FacultyAndStaffPage();
        List<WebElement> facultyMenuList = new ArrayList <>();
        facultyMenuList.addAll(facultyAndStaff.faciltyMenu1);
        facultyMenuList.addAll(facultyAndStaff.faciltyMenu2);
        facultyMenuList.addAll(facultyAndStaff.faciltyMenu3);

        log.info("Expected sub menu list: ----> "+menu);
        System.out.println(menu);
        List<String> faculty = new ArrayList <>();
        for (WebElement el:facultyMenuList){
            faculty.add(el.getText());
            log.info(el.getText());
        }

        log.info(faculty);
        Assert.assertEquals(faculty,menu);
    }

    @When("user mouse hover over on Campus Life button")
    public void user_mouse_hover_over_on_Campus_Life_button() {
        log.info("Mouse hover over on to the Campus Life button");
        Actions actions = new Actions(Driver.getDriver());
        MainPage mainPage = new MainPage();
        actions.moveToElement(mainPage.campusLife).build().perform();
    }

    @Then("user should see the list of Campus Life sub menu")
    public void user_should_see_the_list_of_Campus_Life_sub_menu(List<String> menu) {
        CampusLifePage campusLifePage = new CampusLifePage();
        List<WebElement> campusLifeMenu = new ArrayList <>();
        campusLifeMenu.addAll(campusLifePage.campusLifeSubMenu1);
        campusLifeMenu.addAll(campusLifePage.campusLifeSubMenu2);
        campusLifeMenu.addAll(campusLifePage.campusLifeSubMenu3);
        List<String> campusLife = new ArrayList <>();

        log.info("Expected sub menu list: ----> "+menu);

        for (WebElement el:campusLifeMenu ){
            campusLife.add(el.getText());
            log.info(el.getText());
        }
        Assert.assertTrue(campusLife.containsAll(menu));
    }
    @When("user mouse hover over on About Nau button")
    public void user_mouse_hover_over_on_About_Nau_button() {
        log.info("Mouse hover over on to the About button");
        Actions actions = new Actions(Driver.getDriver());
        MainPage mainPage = new MainPage();
        actions.moveToElement(mainPage.aboutNau).build().perform();
    }

    @Then("user should see the list of About Nau sub menu")
    public void user_should_see_the_list_of_About_Nau_sub_menu(List<String> menu) {
        AboutNauPage nauPage = new AboutNauPage();
        List<WebElement> aboutNauMenu = new ArrayList <>();
        aboutNauMenu.addAll(nauPage.aboutNauSubMenu1);
        aboutNauMenu.addAll(nauPage.aboutNauSubMenu2);

        log.info("Expected sub menu list: ----> "+menu);
        List<String> aboutList = new ArrayList <>();
        for (WebElement el:aboutNauMenu){
            aboutList.add(el.getText());
            log.info(el.getText());
        }

        Assert.assertEquals(menu,aboutList);
    }
}
