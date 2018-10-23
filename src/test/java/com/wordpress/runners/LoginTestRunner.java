package com.wordpress.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"src/test/resources/features/Login.feature"},
		glue= {"com.wordpress.stepdefinitions"},
		plugin ={ "pretty" , "html:target/report/cucumber", "json:target/report/json/login.json"}
		)
public class LoginTestRunner 
{

}
