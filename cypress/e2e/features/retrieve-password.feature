Feature: Test Retrieve Password

    Background:
        Given user navigates to forget password page

    Scenario: Verify that fields and buttons exists on the screen
        Given user navigates to forget password page
        Then "email" field should exist in the page
        And Retrieve Password button should exist in the page


