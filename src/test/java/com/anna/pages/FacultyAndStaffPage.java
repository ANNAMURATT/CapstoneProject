package com.anna.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class FacultyAndStaffPage extends NavigatePages {

    @FindBy(xpath = "//ul[contains(@class,'4878')]//li")
    public List <WebElement> faciltyMenu;

    @FindBy(xpath = "//ul[contains(@class,'7769')]//li//a//span[1]")
    public List <WebElement> faciltyMenu1;

    @FindBy(xpath = "//li[contains(@id,'7764')]//a")
    public List <WebElement> faciltyMenu2;

    @FindBy(xpath = "//li[contains(@id,'7765')]//a")
    public List <WebElement> faciltyMenu3;

}
