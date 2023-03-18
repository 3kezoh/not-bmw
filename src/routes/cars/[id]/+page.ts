import cars from "../../../data/cars.json";

export async function load({ params }: { params: { id: string } }) {
	const car = cars.find((car) => car.id === parseInt(params.id));

	return {
		car: car
	};
}
