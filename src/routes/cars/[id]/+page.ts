import { error } from "@sveltejs/kit";
import cars from "../../../data/cars.json";
import type { PageLoad } from "./$types";

export const load = (({ params }) => {
	const car = cars.find((car) => car.id === parseInt(params.id));

	if (!car) {
		throw error(404, "Not Found");
	}

	return {
		car
	};
}) satisfies PageLoad;
