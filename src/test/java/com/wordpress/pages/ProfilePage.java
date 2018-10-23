package com.wordpress.pages;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class ProfilePage {

	WebDriver driver;

	public ProfilePage(WebDriver driver) 
	{
	
		this.driver = driver;	
}
	
	
	//All action//
	
	
	public void set_first_name(String firstName) {
		WebElement setfname = driver.findElement(By.id("first_name"));
				setfname.clear();
				setfname.sendKeys(firstName);

	}

	
	public void set_last_name(String lastName) {
		WebElement setLname = driver.findElement(By.id("last_name"));
		setLname.clear();
		setLname.sendKeys(lastName);

	}

	
	public void set_display_name(String displayName) {
		
		WebElement element = driver.findElement(By.id("display_name"));
		element.clear();
		element.sendKeys(displayName);

	}

	
	public void set_about_me(String aboutMe) {

		WebElement ProfileDescription = driver.findElement(By.id("description"));
		ProfileDescription.clear();
		ProfileDescription.sendKeys(aboutMe);
	}

	
	public void click_on_save_profile_details_button() {
		WebElement saveProf = driver.findElement(By.xpath("//*[@id=\"primary\"]/main/div[2]/form/p/button"));
		saveProf.click();
		

	}


	}

