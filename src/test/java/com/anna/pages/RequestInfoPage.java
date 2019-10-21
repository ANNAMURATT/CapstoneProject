package com.anna.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RequestInfoPage extends NavigatePages {

    @FindBy(css = "div[class]>[id='robotoslabH']")
    public WebElement requestPageTitle;

    @FindBy(css = "[placeholder='First Name *']")
    public WebElement inputFirstName;

    @FindBy(css = "[placeholder='Last Name *']")
    public WebElement inputLastName;

    @FindBy(css = "select[id='nf-field-61']")
    public WebElement selectGender;

    @FindBy(css = "input[placeholder='Date of Birth ']")
    public WebElement inputDateOfBirth;

    @FindBy(css = "input[placeholder='Street Address*']")
    public WebElement inputStreetAddress;

    @FindBy(css = "input[placeholder='City*']")
    public WebElement inputCity;

    @FindBy(css = "select[id='nf-field-68']")
    public WebElement selectState;

    @FindBy(css = "input[placeholder='Zip/Postal Code *']")
    public WebElement inputZip;

    @FindBy(css = "input[placeholder='Email*']")
    public WebElement inputEmail;

    @FindBy(css = "input[placeholder='Confirm you are not a robot * : What is 5 + 5?']")
    public WebElement inputNotARobot;

    @FindBy(css = "input[id='nf-field-45']")
    public WebElement submit;
}
