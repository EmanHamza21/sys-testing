Feature: Test Login page

    Background:
        Given user navigates to login page

    Scenario: Verify that fields and buttons exists on the screen
        Then "username" field should exist in the login page
        And "password" field should exist in the login page
        And login button should exist in the login page

    Scenario: Verify Login functionality with valid username or password
        When user enters "tomsmith" in "username" field
        And user enters "SuperSecretPassword!" in "password" field
        And user clicks on "Login" button
        Then success message "You logged into a secure area!" should disaplay on secure page
        And the header should contain "Welcome to the Secure Area. When you are done click logout below."
        When user clicks on "logout" button
        Then "success" message "You logged out of the secure area!" should disaplay on login page

    Scenario: Verify Login functionality with invalid username or password
        When user enters "eman" in "username" field
        And user enters "SuperSecretPassword!" in "password" field
        And user clicks on "Login" button
        Then "error" message "Your username is invalid!" should disaplay on login page
