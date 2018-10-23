package com.wordpress.stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.wordpress.pages.HomePage;
import com.wordpress.pages.LoginPage;
import com.wordpress.utils.DriverFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition extends DriverFactory
{

	HomePage hPage;
	LoginPage lPage;
	
	@Given("user open the browser and load the URL")
	public void user_open_the_browser_and_load_the_URL() 
	{
			hPage  = new HomePage(driver);
			lPage = new LoginPage(driver);
	}

	@Then("home page should be appear")
	public void home_page_should_be_appear() 
	{
		//WebElement element = driver.findElement(By.id("navbar-login-link"));
		WebElement element = driver.findElement(By.xpath("//a[@class=\"x-nav-link x-link\" and contains(text(),'Log In')]"));
		boolean isElementExists = element.isDisplayed();
		Assert.assertTrue(isElementExists);
		
	}

	@When("click on login link")
	public void click_on_login_link() 
	{
		hPage.clickOnLoginLink();
	}

	@Then("login page should be appear")
	public void login_page_should_be_appear() {
		WebElement element = driver.findElement(By.id("usernameOrEmail"));
		Assert.assertTrue(element.isDisplayed());
	}

	@When("enter user name {string}")
	public void set_user_name(String userName) {
		lPage.setUserName(userName);
	}

	@When("click on continue button")
	public void click_on_continue_button() {
		lPage.clickOnContinueButton();
	}

	@When("enter password {string}")
	public void set_password(String password) {
		lPage.setPassword(password);
	}

	@When("click on login button")
	public void click_on_login_button() {
		lPage.clickOnLogiButton();
	}

	@Then("login should be successfull")
	public void login_should_be_successfull() {
			WebElement element = driver.findElement(By.xpath("//img[@alt='Me']"));
			Assert.assertTrue(element.isDisplayed());
	}
	
	
	
	@Then("system to display error message {string}")
	public void system_to_display_error_message(String string) {
	    
	}

}
