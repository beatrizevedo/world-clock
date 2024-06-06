function updateTime() {
  let lisbonElement = document.querySelector('#lisbon');
  let lisbonDateElement = document.querySelector('#lisbon-date');
  let lisbonTimeElement = document.querySelector('#lisbon-time');
  let lisbonMeridiemElement = document.querySelector('#lisbon-meridiem');

  lisbonDateElement.innerHTML = moment()
    .tz('Europe/Lisbon')
    .format('dddd, DD MMMM');
  lisbonTimeElement.innerHTML = moment().tz('Europe/Lisbon').format('hh:mm:ss');
  lisbonMeridiemElement.innerHTML = moment().tz('Europe/Lisbon').format('A');

  let sydneyElement = document.querySelector('#sydney');
  let sydneyDateElement = document.querySelector('#sydney-date');
  let sydneyTimeElement = document.querySelector('#sydney-time');
  let sydneyMeridiemElement = document.querySelector('#sydney-meridiem');

  sydneyDateElement.innerHTML = moment()
    .tz('Australia/Sydney')
    .format('dddd, DD MMMM');
  sydneyTimeElement.innerHTML = moment()
    .tz('Australia/Sydney')
    .format('hh:mm:ss');
  sydneyMeridiemElement.innerHTML = moment().tz('Australia/Sydney').format('A');

  let torontoElement = document.querySelector('#toronto');
  let torontoDateElement = document.querySelector('#toronto-date');
  let torontoTimeElement = document.querySelector('#toronto-time');
  let torontoMeridiemElement = document.querySelector('#toronto-meridiem');

  torontoDateElement.innerHTML = moment()
    .tz('America/Toronto')
    .format('dddd, DD MMMM');
  torontoTimeElement.innerHTML = moment()
    .tz('America/Toronto')
    .format('hh:mm:ss');
  torontoMeridiemElement.innerHTML = moment().tz('America/Toronto').format('A');
}

updateTime();
setInterval(updateTime, 1000);

function updateCityTime(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === 'current') {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.split('/')[1];
  let cityDate = moment().tz(cityTimeZone).format('dddd, DD MMMM');
  let cityHour = moment().tz(cityTimeZone).format('hh:mm:ss');
  let cityMeridiem = moment().tz(cityTimeZone).format('A');

  let citiesElement = document.querySelector('#cities');
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityHour}</div>
          <span class="meridiem">${cityMeridiem}</span>
        </div>`;
}

let citySelectElement = document.querySelector('#city-select');
citySelectElement.addEventListener('change', updateCityTime);
