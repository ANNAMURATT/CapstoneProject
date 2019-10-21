package com.anna.pages;

import com.anna.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ApplyNowPage extends NavigatePages {

    @FindBy(xpath = "//a[@class='navbar-brand page-scroll']")
    public WebElement applyPageTitle;

    @FindBy(xpath = "//a[@href='/admission/register' and contains(text(),'Apply')]")
    public WebElement apply;

    @FindBy(xpath = "(//a[@href='/admission/login' and contains(text(),'Sign')])[2]")
    public WebElement signIn;

    @FindBy(id = "user_fullname")
    public WebElement userFullName;

    @FindBy(id = "user_username")
    public WebElement userEmail;

    @FindBy(id = "user_plainPassword_first")
    public WebElement userPassword;

    @FindBy(id = "user_plainPassword_second")
    public WebElement userPasswordRepeat;

    @FindBy(id = "user_termsaccepted")
    public WebElement acceptTerms;

    @FindBy(xpath = "//button[@id='btnSubmitSignUp']")
    public WebElement signUpButton;

    public void setSignUp(String fullName, String email, String password, String passwordSecond){
        userFullName.sendKeys(fullName);
        userEmail.sendKeys(email);
        userPassword.sendKeys(password);
        userPasswordRepeat.sendKeys(passwordSecond);
        acceptTerms.click();
        signUpButton.click();
    }



}
