Feature: Test Login page

  Background:
        Given user navigates to the application

    Scenario Outline: Verify that all valid users can access the application
        When user enters valid credentials exists in "<index>" in into the "user-name" field
        And user enters valid credentials exists in "<index>" in into the "password" field
        And user clicks on "login-button"
        Then user should land on the home page
        Examples:
            | index |
            | 1     |
            | 2     |
            | 3     |
            | 4     |



