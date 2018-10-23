package com.wordpress.pages;



import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;





public class DashBoardPage 
{
	WebDriver driver;
	
	
	public  DashBoardPage(WebDriver driver) {
		this.driver = driver;
		
	}

	//All action methods
	
	public void clickOnProfileIcon() {
		WebElement element =driver.findElement(By.xpath("//*[@id=\"header\"]/a[3]/span/img"));
		element.click();
		
	}
}
