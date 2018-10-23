package com.wordpress.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage 
{
	
		//driver variable
		WebDriver driver;
		
		//constructor
		public LoginPage(WebDriver driver)
		{
			this.driver = driver;
		}
		
		
		//All actions methods
		public void setUserName(String userName)
		{
			WebElement element = driver.findElement(By.id("usernameOrEmail"));
			element.clear();
			element.sendKeys(userName);
		}
		
		
		public void clickOnContinueButton()
		{
			WebElement element = driver.findElement(By.xpath("//button[text()='Continue']"));
			element.click();
		}
		
		
		public void setPassword(String password)
		{
			WebDriverWait driverWait = new WebDriverWait(driver, 30);
			driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.id("password")));
			WebElement element = driver.findElement(By.id("password"));
			element.clear();
			element.sendKeys(password);
		}
		
		
		public void clickOnLogiButton()
		{
			WebElement element = driver.findElement(By.xpath("//button[text()='Log In']"));
			element.click();
		}
}
