'use strict'

const weatherImg = document.querySelector('.main-data__location__img');
const cityElem = document.querySelector('.main-data__location__city');
const countryElem = document.querySelector('.main-data__location__country');
const degreesElem = document.querySelector('.main-data__temperature__degrees');
const weatherDescriptionElem = document.querySelector('.main-data__temperature__description');
const pressureElem = document.querySelector('.pressure');
const windDirectionElem = document.querySelector('.wind-direction');
const humidityElem = document.querySelector('.humidity');
const lastUpdatedElem = document.querySelector('.last-updated span');

export function insertData(data) {
  const { current: { temp_c: temp, humidity, pressure_mb: pressure, wind_dir: direction, last_updated, condition: { text, icon }}, 
          location: { name, country } } = data;

  weatherImg.setAttribute('src', icon);

  cityElem.innerText = name;
  countryElem.innerText = country;

  degreesElem.innerText = temp;
  weatherDescriptionElem.innerText = text;

  pressureElem.innerText = pressure + ' hPa';
  windDirectionElem.innerText = direction;
  humidityElem.innerText = humidity + '%';

  lastUpdatedElem.innerText = last_updated;
}