import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiUrl, geoApiOptions } from "../utils/api";

export default function Search({ returnCoordinates }) {
	const [search, setSearch] = useState(null);
	const handleOnChange = (searchData) => {
		setSearch(searchData);
		returnCoordinates(searchData);
	};

	const loadOptions = (inputValue) => {
		return fetch(
			`${geoApiUrl}/cities?countryIds=US&namePrefix=${inputValue}&minPopulation=1000&limit=10`,
			geoApiOptions
		)
			.then((response) => response.json())
			.then((response) => {
				return {
					options: response.data.map((city) => {
						return {
							label: `${city.name}, ${city.regionCode}, ${city.countryCode}`,
							coordinates: {
								latitude: `${city.latitude} `,
								longitude: `${city.longitude}`,
							},
						};
					}),
				};
			})
			.catch((err) => console.error(err));
	};

	return (
		<AsyncPaginate
			placeholder="Atlanta"
            className="border-2 border-neutral rounded-lg"
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
		/>
	);
}

{
	/* <form>
<label>Search for a City</label>
<input
    id="search"
    type="text"
    onChange={(event) => setSearch(event.target.value)}
/>
<button onClick={getCoordinates}>Search</button>
</form> */
}
