import React from 'react';

export const Weather = () => {
  const event = new Date();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=253ad7c65843809561caf083ff2d4465',
    true,
  );
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    const cityTemp = document.getElementById('temp');
    const cloudsLogo = document.getElementById('logo');
    let parseText = JSON.parse(xhr.responseText);
    cloudsLogo.innerHTML =
      '<img src="http://openweathermap.org/img/wn/' +
      parseText.weather[0].icon +
      '.png" width="50" height="50"></img>';
    cityTemp.innerHTML = parseText.name + ' - ' + Math.ceil(parseText.main.temp - 273) + '°С';
  };

  return (
    <div>
      <div className="row">
        <div className="weather">
          <span id="logo" />
          <span id="date">{event.toLocaleDateString('fr-Fr', options)}</span>
        </div>
        <span id="temp" className="weather-info" />
      </div>
    </div>
  );
};
