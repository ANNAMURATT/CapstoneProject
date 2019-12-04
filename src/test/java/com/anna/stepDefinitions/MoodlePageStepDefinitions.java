package com.anna.stepDefinitions;

import com.anna.pages.MoodlePage;
import com.anna.utilities.ConfigurationReader;
import com.anna.utilities.Driver;
import com.sun.xml.xsom.impl.parser.SubstGroupBaseTypeRef;
import cucumber.api.java.BeforeStep;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.*;

public class MoodlePageStepDefinitions {
    Logger log = Logger.getLogger(MoodlePageStepDefinitions.class);

    String currentWindow = Driver.getDriver().getWindowHandle();
    MoodlePage moodlePage = new MoodlePage();

    @Then("user should see his\\/her name on the right top of the page")
    public void user_should_see_his_her_name_on_the_right_top_of_the_page() {

        WebDriverWait wait = new WebDriverWait(Driver.getDriver(),10);
        wait.until(ExpectedConditions.visibilityOf(moodlePage.userName));
        String name = moodlePage.userName.getText();
        log.info("username is --->"+name);
        Assert.assertEquals(ConfigurationReader.getProperty("user"),name);
    }

    @Then("user should see the course names which he\\/she already enrolled")
    public void user_should_see_the_course_names_which_he_she_already_enrolled() {

        List<String> courseNames = new ArrayList <>();
        for (WebElement e:moodlePage.courseNames){
            courseNames.add(e.getText());
        }
        log.info("actual course names: "+courseNames);
    }

    @Then("user should see the upcoming events")
    public void user_should_see_the_upcoming_events() {
        Map <String,String> events = new HashMap <>();

        for (int i = 0; i < moodlePage.eventName.size(); i++) {
            events.put(moodlePage.eventName.get(i).getText(),moodlePage.eventDate.get(i).getText());
        }
        log.info("the upcoming events are: "+events.entrySet());
    }

    @Then("user mouse hover over on my courses button")
    public void user_mouse_hover_over_on_my_courses_button() throws InterruptedException {
        Actions actions = new Actions(Driver.getDriver());
        actions.moveToElement(moodlePage.myCourses).build().perform();
        Thread.sleep(3000);
        log.info("the list of my courses under my courses dropdown");
        for (WebElement el: moodlePage.myCoursesList){
            log.info(el.getText());
        }
    }

    public String courseName;
    @When("user click on random course name")
    public void user_click_on_random_course_name(){
        log.info("clicking a random course");
        courseName = moodlePage.myCoursesList.get(1).getText();
        moodlePage.myCoursesList.get(1).click();
    }
    @Then("user should see the course name on the top")
    public void user_should_see_the_course_name_on_the_top() {
        log.info("expected course name is: "+courseName);
        log.info("actual course name is: "+moodlePage.myCourseName.getText());
        Assert.assertEquals(courseName,moodlePage.myCourseName.getText());
    }
}
