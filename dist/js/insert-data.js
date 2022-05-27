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

// Air Quality elements
const carbonElem = document.querySelector('.carbon');
const ozoneElem = document.querySelector('.ozone');
const nitrogenElem = document.querySelector('.nitrogen');
const sulphurElem = document.querySelector('.sulphur');
const pm2_5Elem = document.querySelector('.pm2-5');
const pm10Elem = document.querySelector('.pm10');
const indicatorElem = document.querySelector('.air-quality__indicator');

export function insertData(data) {
  const { current: { temp_c: temp, humidity, pressure_mb: pressure, wind_dir: direction, last_updated, condition: { text, icon },
          air_quality: { co, o3, no2, so2, pm2_5, pm10 } }, 
          location: { name, country } } = data;

  weatherImg.setAttribute('src', icon);

  cityElem.innerText = name;
  countryElem.innerText = country;

  degreesElem.innerHTML = temp + ' C';
  weatherDescriptionElem.innerText = text;

  pressureElem.innerText = pressure + ' hPa';
  windDirectionElem.innerText = direction;
  humidityElem.innerText = humidity + '%';

  // Air Quality
  carbonElem.innerText = ` ${Math.round(co * 100) / 100}`;
  ozoneElem.innerText = ` ${Math.round(o3 * 100) / 100}`;
  nitrogenElem.innerText = ` ${Math.round(no2 * 100) / 100}`;
  sulphurElem.innerText = ` ${Math.round(so2 * 100) / 100}`;
  pm2_5Elem.innerText = ` ${Math.round(pm2_5 * 100) / 100}`;
  pm10Elem.innerText = ` ${Math.round(pm10 * 100) / 100}`; 

  // Air Quality indicator
  switch ((data.current.air_quality['us-epa-index'])) {
    case 1:
      indicatorElem.style.backgroundColor = '#23e233';
      break;
    case 2:
      indicatorElem.style.backgroundColor = '#f1f520';
      break;
    case 3:
      indicatorElem.style.backgroundColor = '#f5b220';
      break;
    case 4:
      indicatorElem.style.backgroundColor = '#f13a22';
      break;
    case 5:
      indicatorElem.style.backgroundColor = '#9e22f1';
      break;
    case 6:
      indicatorElem.style.backgroundColor = '#800000';
      break;
    default:
      indicatorElem.style.backgroundColor = '#50ec30';
      break;
  }

  lastUpdatedElem.innerText = last_updated;
}