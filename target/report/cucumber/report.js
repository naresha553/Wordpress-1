$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Login.feature");
formatter.feature({
  "name": "test login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open the browser and load the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_open_the_browser_and_load_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "home page should be appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.home_page_should_be_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.click_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login page should be appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.login_page_should_be_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "test login functionality with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@positive"
    },
    {
      "name": "@important"
    }
  ]
});
formatter.step({
  "name": "enter user name \"obimann@live.ca\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.set_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on continue button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password \"obimann123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.set_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login should be successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.login_should_be_successfull()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "test login functionality with invalid user name as Numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negative"
    },
    {
      "name": "@non-important"
    }
  ]
});
formatter.step({
  "name": "enter user name \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on continue button",
  "keyword": "When "
});
formatter.step({
  "name": "system to display error message \"\u003cerrormsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "errormsg"
      ]
    },
    {
      "cells": [
        "567890986546",
        "User does not exist."
      ]
    },
    {
      "cells": [
        "$%*£*@(*%",
        "400 status code for \\\"GET /users/$%*£*@(*%/auth-options\\\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open the browser and load the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_open_the_browser_and_load_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "home page should be appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.home_page_should_be_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.click_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login page should be appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.login_page_should_be_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "test login functionality with invalid user name as Numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@non-important"
    }
  ]
});
formatter.step({
  "name": "enter user name \"567890986546\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.set_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on continue button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "system to display error message \"User does not exist.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.system_to_display_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open the browser and load the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_open_the_browser_and_load_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "home page should be appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.home_page_should_be_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.click_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login page should be appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.login_page_should_be_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "test login functionality with invalid user name as Numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@non-important"
    }
  ]
});
formatter.step({
  "name": "enter user name \"$%*£*@(*%\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.set_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on continue button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "system to display error message \"400 status code for \\\"GET /users/$%*£*@(*%/auth-options\\\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.system_to_display_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/UpdateProfile.feature");
formatter.feature({
  "name": "Test profile feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    }
  ]
});
formatter.scenario({
  "name": "Update the profile feature with valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@positive"
    },
    {
      "name": "@important"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open the browser and load the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_open_the_browser_and_load_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login to application \"obimann@live.ca\" \"obimann123\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ProfileStepDefinition.login_to_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dashboard page should be appear",
  "keyword": "Then "
});
formatter.match({
  "location": "ProfileStepDefinition.dashboard_page_should_be_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on profile icon",
  "keyword": "When "
});
formatter.match({
  "location": "ProfileStepDefinition.click_on_profile_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "profile page should be appear",
  "keyword": "Then "
});
formatter.match({
  "location": "ProfileStepDefinition.profile_page_should_be_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set first name \"Obi\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProfileStepDefinition.set_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set last name \"Nzeadibe\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProfileStepDefinition.set_last_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set display name \"Obimann1\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProfileStepDefinition.set_display_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set about me \"Software Automation Specialist\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProfileStepDefinition.set_about_me(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on save profile details button",
  "keyword": "When "
});
formatter.match({
  "location": "ProfileStepDefinition.click_on_save_profile_details_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "profile details should be saved",
  "keyword": "Then "
});
formatter.match({
  "location": "ProfileStepDefinition.profile_details_should_be_saved()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});