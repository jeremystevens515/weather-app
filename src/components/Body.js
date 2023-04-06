import React from "react";

export default function Body() {
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
