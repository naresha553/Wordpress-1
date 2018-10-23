package com.wordpress.stepdefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.wordpress.pages.DashBoardPage;
import com.wordpress.pages.HomePage;
import com.wordpress.pages.LoginPage;
import com.wordpress.pages.ProfilePage;
import com.wordpress.utils.DriverFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class ProfileStepDefinition extends DriverFactory
{
	
	HomePage hPage;
	LoginPage lPage;
	DashBoardPage dPage;
	ProfilePage pPage;
	
	
	
	@Given("login to application {string} {string}")
	public void login_to_application(String userName, String password) {
		hPage  = new HomePage(driver);
		lPage = new LoginPage(driver);
		dPage = new DashBoardPage(driver);
		pPage = new ProfilePage(driver);
		
		
	    //Login into Web-site
		hPage.clickOnLoginLink();
		lPage.setUserName(userName);
		lPage.clickOnContinueButton();
		lPage.setPassword(password);
		lPage.clickOnLogiButton();
		
			
			//ValidateLogin
			
			WebElement elementvalidate = driver.findElement(By.xpath("//img[@alt='Me']"));
			Assert.assertTrue(elementvalidate.isDisplayed());
		
	    
	}

	
	@Then("dashboard page should be appear")
	public void dashboard_page_should_be_appear() {
			
			WebElement dashboardvalidate = driver.findElement(By.xpath("//*[@id='secondary']/ul/div[1]/li/ul/li[5]/a/span"));
			Assert.assertTrue(dashboardvalidate.isDisplayed());
		
	}

	@When("click on profile icon")
	public void click_on_profile_icon() {
	
		dPage.clickOnProfileIcon();
		
	
		
	}

	@Then("profile page should be appear")
	public void profile_page_should_be_appear() {		
		WebElement profileappear = driver.findElement(By.xpath("//*[@id=\"primary\"]/main/div[1]/div[1]/span"));
		Assert.assertTrue(profileappear.isDisplayed());
	
		

	}

	@When("set first name {string}")
	public void set_first_name(String firstName) {
		
		pPage.set_first_name(firstName);
		
		

	}

	@When("set last name {string}")
	public void set_last_name(String lastName) {
		
		pPage.set_last_name(lastName);

	}

	@When("set display name {string}")
	public void set_display_name(String displayName) {
		
		pPage.set_display_name(displayName);


	}

	@When("set about me {string}")
	public void set_about_me(String aboutMe) {
		pPage.set_about_me(aboutMe);

	}

	@When("click on save profile details button")
	public void click_on_save_profile_details_button() {
		
		pPage.click_on_save_profile_details_button();

	}

	@Then("profile details should be saved")
	public void profile_details_should_be_saved() {
		
		WebElement saveAlert = driver.findElement(By.xpath("//*[@id=\"notices\"]/div/span[2]/span"));
		Assert.assertTrue(saveAlert.isDisplayed());

	}


}
