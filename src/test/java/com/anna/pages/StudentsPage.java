package com.anna.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import javax.print.attribute.standard.MediaSize;
import java.util.List;

public class StudentsPage extends NavigatePages {
    @FindBy(xpath = "//ul[contains(@class,'15722')]//li//span[1]")
    public List <WebElement> studentsSubMenu1;

    @FindBy(xpath = "//li[contains(@id,'15723')]//a")
    public List <WebElement> studentsSubMenu2;

    @FindBy(xpath = "//ul[contains(@class,'15724')]//a//span")
    public List <WebElement> studentsSubMenu3;
}
