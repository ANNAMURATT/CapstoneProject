package com.anna.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class AcademicsPage extends NavigatePages {

    @FindBy(xpath = "//ul[contains(@class,'6853')]//li")
    public List<WebElement> underGraduateProgs;

    @FindBy(xpath = "//li[@id='menu-item-4881']//a")
    public List<WebElement> academicsMenuList;
    
}
