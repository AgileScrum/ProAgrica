Feature: Proagrica: Home page Test Cases
  As user I want to check the Proagrica web page

  @smoke
  Scenario: Verify that user can see the logo present on home page
    Given I launch the home page
    And I accept all cookies
    Then I should be able to see proagrica logo

  @sanity
  Scenario: Verify that homepage main text message is correct
    Given I launch the home page
    And I accept all cookies
    Then I should be able to see the message text display correctly

  @regression
  Scenario: Verify count and print the number of link present on home page
    Given I launch the home page
    And I accept all cookies
    Then I should be able to verify number of links present
    And I should be able to print out all the links
