import React from 'react';

export default function Body() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getPosition, getDefault);
	} else {
		console.log('No Location');
	}

	function getPosition(position) {
		const lat = position.coords.latitude;
    	const long = position.coords.longitude;
    	// getWeather(lat, long);
	}
	function getDefault() {
		const url  = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=1ff1b9e8930bbe84b844222ea3d5a398&units=imperial";
		fetch(url).then(function (response) {
			return response.json()
		}).then(function (data) {
			console.log(data);
			// var location = data.name;
			// var high = data.main.temp_max;
			// var low = data.main.temp_min;
			// var icon = data.weather[0].icon;
			// // console.log(icon);
			// var navWeather = document.createElement('div');
			// navWeather.textContent = location + ' ' + high + '°F' + ' / ' + low + '°F';
			// var img = document.createElement('img');
			// img.setAttribute('src', 'http://openweathermap.org/img/wn/' + icon + '@2x.png')
			// // img.setAttribute('src', 'http://openweathermap.org/img/wn/02d@2x.png')
			// img.setAttribute('style', 'width: 20%')
			// navText.appendChild(navWeather);
			// navText.appendChild(img);
		})
	}


	return (
		<div className="">
			<form>
				<label>Search for a City</label>
				<input id="search" type="text" />
			</form>

			<div>current weather display</div>
			<div>forecast</div>
			<div>map</div>
		</div>
	);
}
