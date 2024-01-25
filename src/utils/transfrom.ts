import { CityResponse, City } from "../interfaces/city";

export const transformCityResponse = (cityResult: CityResponse): City => {
	const { id, name, country, country_code: countryCode, longitude: lon, latitude: lat } = cityResult;

	return {
		id,
		name,
		countryCode,
		country,
		lon,
		lat,
	};
};