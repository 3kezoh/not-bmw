import type { Metadata, Picture } from "../types/image";

export function getPicture(metadata: Metadata[]) {
	return metadata.reduce<Picture>(
		(accumulator, { format, ...metadata }) => {
			if (format === "jpg") {
				accumulator.fallbacks = [...accumulator.fallbacks, metadata];

				return accumulator;
			}

			const { sources } = accumulator;

			if (Object.hasOwn(sources, format)) {
				accumulator.sources[format] = [...sources[format], metadata];

				return accumulator;
			}

			accumulator.sources[format] = [metadata];

			return accumulator;
		},
		{
			sources: {
				avif: [],
				webp: []
			},
			fallbacks: []
		}
	);
}
