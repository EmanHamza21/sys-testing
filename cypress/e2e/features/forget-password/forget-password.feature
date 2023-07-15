Feature: Test Forget Password

    Background:
        Given user navigates to forget password page

    Scenario: Verify that fields and buttons exists on the screen
        Then "email" field should exist in the page
        And Retrieve Password button should exist in the page

    Scenario: Verify that user can Retrieve the password when clicking on Retrieve button
        When user enters email "abc@gmail.com" in the "email" field
        And user clicks on Retrieve password button
   





