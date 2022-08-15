package com.proagrica.pages;

import com.proagrica.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.List;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id="onetrust-accept-btn-handler")
    WebElement cookies;


    @CacheLookup
    @FindBy(xpath = "(//img[@alt='Proagrica logo'])[1]")
    WebElement logo;

    @CacheLookup
    @FindBy(xpath = "//h1[@class='entry-title']")
    WebElement homepageText;

    @CacheLookup
    @FindBy(tagName = "a")
    List<WebElement> links;


    public void acceptAllCookies() throws InterruptedException {
        Thread.sleep(5000);
        clickOnElement(cookies);
    }
    public void verifyLogoIsVisible() {
        boolean logoPresent = logo.isDisplayed();
        Assert.assertTrue(logoPresent);
        if (!logoPresent) {
            System.out.println("Logo is not Visible");
        } else {
            System.out.println("Logo is Visible");
        }
    }
    public String verifyHomePageText() {
        String text = getTextFromElement(homepageText);
        log.info("verifying the homepage text " + homepageText.toString());
        return text;
    }

    public void verifyNumberOfLinksPresent() {
        int numberOfLinks = links.size();
        System.out.println("Number Of Links Present On HomePage = " + numberOfLinks);
        log.info("verifying number of links present " + links.toString());
    }
    public void printOutAllLinksPresent(){
        System.out.println("All the links details are below:");
        for (WebElement allLinks : links) {
            System.out.println(allLinks.getText() + " - " + allLinks.getAttribute("href"));
        }
    }


    }
