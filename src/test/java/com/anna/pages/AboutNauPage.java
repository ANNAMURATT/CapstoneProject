package com.anna.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class AboutNauPage extends NavigatePages {
    @FindBy(xpath = "//li[@id='menu-item-15743']//a")
    public List<WebElement> aboutNauSubMenu1;

    @FindBy(xpath = "//li[@id='menu-item-15744']//a")
    public List<WebElement> aboutNauSubMenu2;
}
