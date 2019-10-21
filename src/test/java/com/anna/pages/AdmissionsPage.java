package com.anna.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class AdmissionsPage extends NavigatePages {

    @FindBy(xpath = "//li[@id='menu-item-7906']//a")
    public List<WebElement> undergraduate;

    @FindBy(xpath = "//li[@id='menu-item-7907']//a")
    public List<WebElement> graduate;

    @FindBy(xpath = "//li[@id='menu-item-25656']//a")
    public List<WebElement> gufLanSchool;
}
