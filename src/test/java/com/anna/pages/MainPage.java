package com.anna.pages;

import com.anna.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class MainPage extends NavigatePages{

    @FindBy(xpath = "(//img[contains(@src,'nau-logo')])[1]")
    public WebElement NAU_logo;

    @FindBy(xpath = "//div[@class='fusion-secondary-menu']//ul[@id='menu-utility-menu']//li")
    public List<WebElement> header_menu_list;

    @FindBy(xpath = "//div[@class='fusion-secondary-main-menu']//li[contains(@class,'mega')]")
    public List<WebElement> main_menu_list;

    @FindBy(xpath = "//div[@class='fusion-secondary-menu']//*[contains(text(),'Request')]")
    public WebElement Request_info;

    @FindBy(xpath = "//div[@class='fusion-secondary-menu']//*[contains(text(),'Apply')]")
    public WebElement Apply_Now;

    @FindBy(xpath = "//div[@class='fusion-secondary-menu']//*[contains(text(),'Athletics')]")
    public WebElement Athletics;

    @FindBy(xpath = "//div[@class='fusion-secondary-menu']//*[contains(text(),'365 Portal')]")
    public WebElement Portal;

    @FindBy(xpath = "(//span[contains(text(),'Admissions')])[1]")
    public WebElement admissions;

    @FindBy(xpath = "//span[contains(text(),'Academics')]")
    public WebElement academics;

    @FindBy(xpath = "//span[contains(text(),'Faculty & Staff')]")
    public WebElement facultyAndStaff;

    @FindBy(xpath = "//span[contains(text(),'Campus Life')]")
    public WebElement campusLife;

    @FindBy(xpath = "//span[text()='Students']")
    public WebElement students;

    @FindBy(xpath = "(//li[@id='menu-item-15699']//a)[1]")
    public WebElement aboutNau;

}
