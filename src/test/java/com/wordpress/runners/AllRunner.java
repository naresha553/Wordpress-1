package com.wordpress.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"src/test/resources/features/"},
		glue= {"com.wordpress.stepdefinitions"},
		tags= {"@all"},
		plugin ={ "pretty" , "html:target/report/cucumber"}
		)
public class AllRunner {

}
