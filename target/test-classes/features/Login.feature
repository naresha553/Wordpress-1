@all @regression
Feature: test login functionality

Background:
   	Given user open the browser and load the URL
    Then home page should be appear
    When click on login link
    Then login page should be appear
    

@positive	@important
Scenario: test login functionality with valid credentials
    When enter user name "obimann@live.ca"
	When click on continue button
	When enter password "obimann123"
	When click on login button
	Then login should be successfull

	
	
@negative	@non-important
Scenario Outline: test login functionality with invalid user name as Numbers
    When enter user name "<username>"
    When click on continue button
    Then system to display error message "<errormsg>"
    
    Examples:
    |username		|errormsg				|
    |567890986546	|User does not exist.	|
    |$%*£*@(*%		|400 status code for \"GET /users/$%*£*@(*%/auth-options\"	|
    
    
    

    

