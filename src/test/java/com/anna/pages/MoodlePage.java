package com.anna.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class MoodlePage extends NavigatePages{

    @FindBy(xpath = "//div[@class='card-deck dashboard-card-deck ']//a[@class='coursename mr-2']//span[@class='multiline']")
    public List<WebElement> courseNames;

    @FindBy(xpath = "//div[@id='action-menu-0-menubar']//span[contains(@class,'usertext mr-1')]")
    public WebElement userName;

    @FindBy(xpath = "//a[contains(@data-type,'event')]")
    public List<WebElement> eventName;

    @FindBy(xpath = "//div[contains(@class,'date')]")
    public List<WebElement> eventDate;

    @FindBy(xpath = "//li[@class='dropdown']")
    public WebElement myCourses;

    @FindBy(xpath = "//li[@class='dropdown']//ul//li")
    public List<WebElement> myCoursesList;

    @FindBy(xpath = "(//span[@itemprop='title'])[3]")
    public WebElement myCourseName;

    @FindBy(xpath = "//span[@class='item-content-wrap' and contains(text(),'Grades')]")
    public WebElement myGrades;

}
