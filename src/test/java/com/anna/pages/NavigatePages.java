package com.anna.pages;

import com.anna.utilities.Driver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public abstract class NavigatePages {
    public NavigatePages(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    }

