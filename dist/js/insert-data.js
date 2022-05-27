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
  const { current: { temp_c: temp, humidity, pressure_mb: pressure, wind_dir: direction, last_updated, condition: { text, icon },
          air_quality: { co, o3, no2, so2, pm2_5, pm10 } }, 
          location: { name, country } } = data;

  weatherImg.setAttribute('src', icon);

  cityElem.innerText = name;
  countryElem.innerText = country;

  degreesElem.innerHTML = temp + '&#8451';
  weatherDescriptionElem.innerText = text;

  pressureElem.innerText = pressure + ' hPa';
  windDirectionElem.innerText = direction;
  humidityElem.innerText = humidity + '%';

console.log(data.current.air_quality['us-epa-index']);

  lastUpdatedElem.innerText = last_updated;
}