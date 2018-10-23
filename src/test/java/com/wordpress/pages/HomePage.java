package com.wordpress.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HomePage 
{
	
	
	WebDriver driver;
	
	
	public HomePage(WebDriver driver)
	{
		this.driver = driver;
	}

	
	//  all actions on the page
	public void clickOnLoginLink()
	{
		 WebElement element = driver.findElement(By.xpath("//a[@class=\"x-nav-link x-link\" and contains(text(),'Log In')]"));
		 element.click();
	}
	
	
	
	
	

}
