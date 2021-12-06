@canary
Feature: Admiral search test
  Scenario: Google
    Given I am on "http://www.google.com"
    When I search for "admiral group plc"
    Then I see "Home | Admiral Group plc"
