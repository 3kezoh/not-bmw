export interface Car {
	id: number;
	model: string;
	price: number;
	year: number;
	drive: string;
	acceleration: number;
	media: Media;
	dealer: Dealer;
	energyEngine: string;
	power: number;
	transmission: string;
	consumption: number;
	carbonEmission: number;
}

export interface Dealer {
	name: string;
	address: string;
}

export interface Media {
	video?: Video;
	image: Image;
}

export interface Video {
	fallback: string;
	src: string;
}

export interface Image {
	src: string;
}
