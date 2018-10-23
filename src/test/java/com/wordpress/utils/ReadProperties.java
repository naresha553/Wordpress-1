package com.wordpress.utils;

import java.io.FileInputStream;
import java.util.Properties;

public class ReadProperties 
{
		Properties prop;
		
		public ReadProperties(String path)
		{
			try
			{
				FileInputStream fis = new FileInputStream(path);
				prop = new Properties();
				prop.load(fis);
			}catch(Exception e)
			{
				e.printStackTrace();
			}
		}
		
		
		public String getPropertyValue(String key)
		{
			String value = prop.getProperty(key);
			return value.trim();
		}
}
