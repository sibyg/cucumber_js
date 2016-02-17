@hooks
Feature: Check Cucumber Hooks working
  As a user of cucumber-js
  I would like to see before/after/around hooks working
  So that I can perform necessary tidying up

  Scenario: Before Hook Working
    Given system is in some pre event state
    When an event happens
    Then system is in some post event state

#  Scenario: After Hook Working
#
#  Scenario: Around Hood Working