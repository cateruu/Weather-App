'use strict'

import { callApi } from "./call-api.js";
import { insertData } from "./insert-data.js";

const searchInput = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__btn');

searchBtn.addEventListener('click', async () => {
  
  try {
     insertData(await callApi(searchInput.value));
  } catch (err) {
    console.error(err);
  }
});
