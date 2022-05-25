'use strict'

export async function callApi(searchInput) {
  let url = `http://api.weatherapi.com/v1/current.json?key=d5d930dc6ac14eb18ee151155222405&q=${searchInput}&aqi=yes`;

  let response = await fetch(url);
  let result = await response.json();

  if (response.ok) {
    return result;
  }
}