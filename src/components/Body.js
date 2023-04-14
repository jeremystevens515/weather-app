import React, { useState } from "react";

export default function Body() {
	const [search, setSearch] = useState("state");
	const [cityCoords, setCityCoords] = useState({});
	const [history, setHistory] = useState([]);

	const searchCity = (event) => {
		event.preventDefault();
		//get coordinates
		//get weather
		//if weather response 200, setHistory
		setHistory([...history, search]);
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
				<button onClick={searchCity}>Search</button>
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
