export type Source = {
	height: number;
	src: string;
	width: number;
};

export type Sources = {
	avif: Source[];
	webp: Source[];
};

export type Picture = {
	sources: Sources;
	fallbacks: Source[];
};

export type Format = "avif" | "webp" | "jpg";

export type Metadata = {
	format: Format;
	height: number;
	src: string;
	width: number;
};
