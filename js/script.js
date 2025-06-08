// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: June 8 2025
// This file contains the JS functions for index.html

"use strict"
// Function to get tech news from NewsData.io
async function newsAPI() {
  try {
    const url = 'https://newsdata.io/api/1/latest?apikey=pub_c0774b64c35e44e8a862750fbeda4ea8&q=technology'
    const result = await fetch(url)
    const jsonData = await result.json()

    // Show the title and description of the first news article
    const title = jsonData.results[0].title
    const description = jsonData.results[0].description
    document.getElementById("result").innerHTML = `
      <h2>${title}</h2>
      <p>${description}</p>
    `
  } catch (error) {
    console.log(error)
  }
}
