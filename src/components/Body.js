import React, { useState } from "react";
// import { Search } from "../utils/search";

export default function Body() {
	const [search, setSearch] = useState("state");
	const [cityCoords, setCityCoords] = useState({});
	const [history, setHistory] = useState([]);

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
