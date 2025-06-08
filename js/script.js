// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: June 8 2025
// This file contains the JS functions for index.html

"use strict"

// Function to get tech news from NewsData.io
async function newsAPI() {
  try {
    const url = 'https://newsdata.io/api/1/latest?apikey=pub_c0774b64c35e44e8a862750fbeda4ea8&q=technology%20'
    const result = await fetch(url)
    const jsonData = await result.json()

    // Show the title of the first news article
    const firstTitle = jsonData.results[0].title
    document.getElementById("result").innerHTML = firstTitle

  } catch (error) {
    console.log(error)
  }
}
