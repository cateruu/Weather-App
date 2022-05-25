'use strict'

import { callApi } from "./callAPI.js";

const searchInput = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__btn');

searchBtn.addEventListener('click', async () => {
  const { current: { temp_c: temp, humidity, pressure_mb: pressure, wind_dir: direction, last_updated, condition: { text, icon }}, 
          location: { name, country } } = await callApi(searchInput.value);

  
});
