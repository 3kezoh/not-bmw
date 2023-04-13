import { error } from "@sveltejs/kit";
import cars from "../../data/cars.json";
import type { PageLoad } from "./$types";
import { generateSlug } from "../../utils/format";

export const load = (({ params }) => {
	const car = cars.find((car) => generateSlug(car.model) === generateSlug(params.slug));

	if (!car) {
		throw error(404, "Not found");
	}

	return {
		car,
		title: `${car.model} | BMW USA`,
		description:
			"Explore models, build your own, and find local inventory from a nearby BMW Center. Experience the performance, luxury, and innovation of the Ultimate Driving Machine today."
	};
}) satisfies PageLoad;
