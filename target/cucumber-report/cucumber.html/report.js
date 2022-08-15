$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Proagrica: Home page Test Cases",
  "description": "As user I want to check the Proagrica web page",
  "id": "proagrica:-home-page-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19505986900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify that user can see the logo present on home page",
  "description": "",
  "id": "proagrica:-home-page-test-cases;verify-that-user-can-see-the-logo-present-on-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept all cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to see proagrica logo",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepdefs.iLaunchTheHomePage()"
});
formatter.result({
  "duration": 555566700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepdefs.iAcceptAllCookies()"
});
formatter.result({
  "duration": 5618375800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepdefs.iShouldBeAbleToSeeProagricaLogo()"
});
formatter.result({
  "duration": 2424337300,
  "status": "passed"
});
formatter.after({
  "duration": 2438449700,
  "status": "passed"
});
formatter.before({
  "duration": 8944116200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify that homepage main text message is correct",
  "description": "",
  "id": "proagrica:-home-page-test-cases;verify-that-homepage-main-text-message-is-correct",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I launch the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I accept all cookies",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should be able to see the message text display correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepdefs.iLaunchTheHomePage()"
});
formatter.result({
  "duration": 61100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepdefs.iAcceptAllCookies()"
});
formatter.result({
  "duration": 5413471000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepdefs.iShouldBeAbleToSeeTheMessageTextDisplayCorrectly()"
});
formatter.result({
  "duration": 1228226800,
  "status": "passed"
});
formatter.after({
  "duration": 3013063200,
  "status": "passed"
});
formatter.before({
  "duration": 11568131100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify count and print the number of link present on home page",
  "description": "",
  "id": "proagrica:-home-page-test-cases;verify-count-and-print-the-number-of-link-present-on-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I launch the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I accept all cookies",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should be able to verify number of links present",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should be able to print out all the links",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepdefs.iLaunchTheHomePage()"
});
formatter.result({
  "duration": 76700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepdefs.iAcceptAllCookies()"
});
formatter.result({
  "duration": 5997203800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepdefs.iShouldBeAbleToVerifyNumberOfLinksPresent()"
});
formatter.result({
  "duration": 833619800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepdefs.iShouldBeAbleToPrintOutAllTheLinks()"
});
formatter.result({
  "duration": 9911084500,
  "status": "passed"
});
formatter.after({
  "duration": 1652235800,
  "status": "passed"
});
});