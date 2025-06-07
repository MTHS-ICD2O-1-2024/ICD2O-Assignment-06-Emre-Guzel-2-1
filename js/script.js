// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: May 20 2025
// This file contains the JS functions for index.html

"use strict"

// Setting the function 
async function newsAPI() {

  // Setting the weather API 
  try {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=f5cce8e3a6c922f1fdf3bd14085cd28e';
    const result = await fetch(url);
    const jsonData = await result.json();

    const temp = jsonData.main.temp;
    const iconCode = jsonData.weather[0].icon;

    // Setting the weather ICON API
    const iconUrl = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png';
    document.getElementById('weatherImage').src = iconUrl;

    // Calculations
    document.getElementById("result").innerHTML = (temp - 273.15).toFixed(0) + "" + "°C";

  } catch (error) {
    console.log(error);
  }

}
