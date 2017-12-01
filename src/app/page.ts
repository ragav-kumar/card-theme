export interface Page {
	id: number;
	title: { rendered: string; };
	content: { rendered: string; };
	excerpt: { rendered: string; };
	featured_media: number;
	slug: string;
	link: string;
}