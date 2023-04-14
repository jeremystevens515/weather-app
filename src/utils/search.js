const Search = {
	getCoordinates(city) {
		const geoCodingURL =
			"https://api.openweathermap.org/geo/1.0/direct?q=" +
			city +
			"&limit=5&appid=47321296effd62eab8d0754b0a9e9a55";
		let coordinates = {
			latitude: null,
			longitude: null,
		};

		fetch(geoCodingURL)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				coordinates.latitude = data[0].lat;
				console.log("latitude " + coordinates.latitude);
				coordinates.longitude = data[0].lon;
				console.log("longitude " + coordinates.longitude);
			});
		return coordinates;
	},

	getCurrentConditions(lat, lon) {
		const currentWeatherURL =
			"https://api.openweathermap.org/data/2.5/weather?lat=" +
			lat +
			"&lon=" +
			lon +
			"&appid=47321296effd62eab8d0754b0a9e9a55&units=imperial";
		fetch(currentWeatherURL)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log("Current Conditions \n-----------");
				console.log(data);
				const description = data.weather[0].main;
				const icon = data.weather[0].icon;
				const temp = data.main.temp + "℉";
				const wind = data.wind.speed + " mph";
				const humidity = data.main.humidity + "%";

				// getIcon(icon, description, currentCityOverview);
			});
	},
};

module.exports = { Search };
