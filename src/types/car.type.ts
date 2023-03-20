export interface Car {
	id: number;
	model: string;
	price: number;
	year: number;
	media: Media;
	dealer: Dealer;
	energyEngine: string;
	power: number;
	acceleration: number;
	transmission: string;
	consumption: number;
	carbonEmission: number;
	energyLabel: string;
}

export interface Dealer {
	name: string;
	address: string;
}

export interface Media {
	video: Video;
	images: Images[];
}

export interface Video {
	path: string;
}

export interface Images {
	path: string;
}