@all
Feature: Test profile feature

@positive @important
Scenario: Update the profile feature with valid data
	Given user open the browser and load the URL
	Given login to application "obimann@live.ca" "obimann123"
	Then  dashboard page should be appear
	When  click on profile icon
	Then  profile page should be appear
	When  set first name "Obi"
	When  set last name "Nzeadibe"
	When  set display name "Obimann1"
	When  set about me "Software Automation Specialist"
	When  click on save profile details button
	Then  profile details should be saved	