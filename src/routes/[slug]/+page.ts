import { error } from "@sveltejs/kit";
import cars from "../../data/cars.json";
import type { PageLoad } from "./$types";
import { generateSlug } from "../../utils/format";

export const load = (async ({ params }) => {
	const car = cars.find((car) => generateSlug(car.model) === generateSlug(params.slug));

	if (!car) {
		throw error(404, "Not found");
	}

	const { video, image } = car.media;

	const props = {
		car,
		title: `${car.model} | BMW USA`,
		description:
			"Explore models, build your own, and find local inventory from a nearby BMW Center. Experience the performance, luxury, and innovation of the Ultimate Driving Machine today.",
		image: (await import(`../../components/products/pictures/${image}.svelte`)).default
	};

	if (video) {
		const module = await import(`../../components/products/videos/${video}.svelte`);

		return {
			...props,
			video: module.default
		};
	}

	return props;
}) satisfies PageLoad;

export const csr = false;
