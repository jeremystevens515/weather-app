import React, { useState } from "react";
// import { Search } from "../utils/search";

export default function Body() {
	const [search, setSearch] = useState("state");
	const [cityCoords, setCityCoords] = useState({});
	const [history, setHistory] = useState([]);
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getPosition, getDefault);
	} else {
		console.log('No Location');
	}

	const getCoordinates = (event) => {
		event.preventDefault();
		const geoCodingURL =
			"https://api.openweathermap.org/geo/1.0/direct?q=" +
			search +
			"&limit=5&appid=47321296effd62eab8d0754b0a9e9a55";

		fetch(geoCodingURL)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setCityCoords({
					latitude: data[0].lat,
					longitude: data[0].lon,
				});
			});
	};

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
				<input
					id="search"
					type="text"
					onChange={(event) => setSearch(event.target.value)}
				/>
				<button onClick={getCoordinates}>Search</button>
			</form>
			<div>
				<ul>
					{history.map((city, i) => {
						return <li key={i}>{city}</li>;
					})}
				</ul>
			</div>

			<div>current weather display</div>
			<div>forecast</div>
			<div>map</div>
		</div>
	);
}
