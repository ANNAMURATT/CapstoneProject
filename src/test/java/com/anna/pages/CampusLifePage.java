package com.anna.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class CampusLifePage extends NavigatePages{
    @FindBy(xpath = "//li[contains(@id,'4989')]//a")
    public List <WebElement> campusLifeSubMenu1;

    @FindBy(xpath = "//li[contains(@id,'8534')]//a")
    public List <WebElement> campusLifeSubMenu2;

    @FindBy(xpath = "//li[contains(@id,'8532')]//a")
    public List <WebElement> campusLifeSubMenu3;
}
