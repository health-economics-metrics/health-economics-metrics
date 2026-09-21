import { book } from '$lib/server/book.js';

export function load({ params }) {
	const { parts, order } = book(params.locale);
	return { parts, topicCount: order.length };
}
