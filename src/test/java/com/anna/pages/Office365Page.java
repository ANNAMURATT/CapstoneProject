package com.anna.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Office365Page extends NavigatePages {

    @FindBy(css = "[type='email']")
    public WebElement emailInput;

    @FindBy(xpath = "//input[@name='passwd']")
    public WebElement passwordInput;

    @FindBy(xpath = "//input[@id='idSIButton9']")
    public WebElement next;

    @FindBy(xpath = "//input[@id='idSIButton9' and @value='Sign in']")
    public WebElement signIn;

    @FindBy(css = "[id='ShellMail_link']")
    public WebElement outlook;

    @FindBy(css = "[id='ShellDocuments_link']")
    public WebElement oneDrive;

    @FindBy(css = "[id='ShellWordOnline_link']")
    public WebElement word;

    @FindBy(css = "[id='ShellExcelOnline_link']")
    public WebElement excel;

    @FindBy(css = "[id='ShellPowerPointOnline_link']")
    public WebElement powerPoint;

    @FindBy(css = "[id='ShellOneNoteOnline_link']")
    public WebElement oneNote;

    @FindBy(css = "[id='ShellSites_link']")
    public WebElement sharePoint;

    @FindBy(css = "[id='ShellSkypeTeams_link']")
    public WebElement teams;

    @FindBy(css = "[id='ShellSway_link']")
    public WebElement sway;

    @FindBy(css = "[aria-label='Moodle NAU']")
    public WebElement moodle;

}
