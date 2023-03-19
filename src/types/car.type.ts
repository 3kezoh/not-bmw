export interface Car {
	id: number;
	model: string;
	price: number;
	year: number;
	media: string[];
	videoPath: string;
	dealer: {
		name: string;
		address: string;
	};
	energyEngine: string;
	power: string;
	acceleration: string;
	transmission: string;
	consumption: string;
	carbonEmission: string;
	energyLabel: string;
}
