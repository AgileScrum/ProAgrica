package com.proagrica.steps;

import com.proagrica.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class HomePageStepdefs {
    @Given("^I launch the home page$")
    public void iLaunchTheHomePage() {
    }

    @And("^I accept all cookies$")
    public void iAcceptAllCookies() throws InterruptedException {
        new HomePage().acceptAllCookies();
    }

    @Then("^I should be able to see proagrica logo$")
    public void iShouldBeAbleToSeeProagricaLogo() {
        new HomePage().verifyLogoIsVisible();
    }


    @Then("^I should be able to see the message text display correctly$")
    public void iShouldBeAbleToSeeTheMessageTextDisplayCorrectly() {

        String expectedText = "Connect data.\n" +
                "Grow smarter.";
        String actualText = new HomePage().verifyHomePageText();
        Assert.assertEquals("Home page text is not displayed correctly",expectedText,actualText);
    }

    @Then("^I should be able to verify number of links present$")
    public void iShouldBeAbleToVerifyNumberOfLinksPresent() {
        new HomePage().verifyNumberOfLinksPresent();
    }

    @And("^I should be able to print out all the links$")
    public void iShouldBeAbleToPrintOutAllTheLinks() {
        new HomePage().printOutAllLinksPresent();
    }
}
