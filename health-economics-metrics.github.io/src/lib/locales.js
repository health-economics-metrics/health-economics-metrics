// Locale display metadata shared between the root locale-picker page and the
// header's language picker. The set of *available* locales always comes from
// the vendored content (`#lib/server/content.js` locales()) — this module
// only supplies how to label/order codes that content already declared.

/** Human-readable name for each locale code, in its own language where possible. */
export const LOCALE_LABELS = {
	'en-us': 'English - United States',
	'en-gb': 'English - Great Britain',
	'en-gb-oxendict': 'English - Great Britain - Oxford',
	'en-001': 'English',
	'en-150': 'English - Europe',
	'da-001': 'Dansk',
	'da-dk': 'Dansk - Danmark',
	'de-001': 'Deutsch',
	'de-de': 'Deutsch - Deutschland',
	'it-001': 'Italiano',
	'it-it': 'Italiano - Italia',
	'ja-001': '日本語',
	'ja-jp': '日本語 - 日本',
	'ko-001': '한국어',
	'ko-kr': '한국어 - 대한민국',
	'nl-001': 'Nederlands',
	'nl-nl': 'Nederlands - Nederland',
	'no-001': 'Norsk',
	'no-no': 'Norsk - Norge',
	'et-001': 'Eesti',
	'et-et': 'Eesti - Eesti',
	'pl-001': 'Polski',
	'pl-pl': 'Polski - Polska',
	'es-es': 'Español - España',
	'es-001': 'Español',
	'es-mx': 'Español - México',
	'fr-fr': 'Français - France',
	'fr-001': 'Français',
	'fr-ca': 'Français - Canada',
	'ru-ru': 'Русский - Россия',
	'ru-by': 'Русский - Беларусь',
	'ru-001': 'Русский',
	'uk-001': 'Українська',
	'uk-ua': 'Українська - Україна',
	'sv-001': 'Svenska',
	'sv-se': 'Svenska - Sverige',
	'fi-001': 'Suomi',
	'fi-fi': 'Suomi - Suomi',
	'zh-cn': '中文 - 中国大陆',
	'zh-001': '中文',
	'zh-tw': '中文 - 台灣',
	'ar-eg': 'العربية - مصر',
	'ar-dz': 'العربية - الجزائر',
	'ar-001': 'العربية',
	'cy-gb': 'Cymraeg - Prydain Fawr',
	'cy-001': 'Cymraeg',
	'hi-001': 'हिन्दी',
	'hi-in': 'हिन्दी - भारत',
	'bn-001': 'বাংলা',
	'bn-bd': 'বাংলা - বাংলাদেশ',
	'bn-in': 'বাংলা - ভারত',
	'pt-001': 'Português',
	'pt-br': 'Português - Brasil',
	'pt-pt': 'Português - Portugal',
	'id-001': 'Bahasa Indonesia',
	'id-id': 'Bahasa Indonesia - Indonesia',
	'id-my': 'Bahasa Indonesia - Malaysia',
	'ur-001': 'اردو',
	'ur-pk': 'اردو - پاکستان',
	'vi-001': 'Tiếng Việt',
	'vi-vn': 'Tiếng Việt - Việt Nam',
	'th-001': 'ไทย',
	'th-th': 'ไทย - ประเทศไทย',
	'is-001': 'Íslenska',
	'is-is': 'Íslenska - Ísland',
	'tr-001': 'Türkçe',
	'tr-tr': 'Türkçe - Türkiye',
	'sw-001': 'Kiswahili',
	'sw-tz': 'Kiswahili - Tanzania'
};

export const DEFAULT_LOCALE = 'en-gb-oxendict';

export function localeLabel(code) {
	return LOCALE_LABELS[code] ?? code;
}

// Browser language tags that name a locale family under a different code.
const LANGUAGE_ALIASES = { nb: 'no', nn: 'no' };

/**
 * The available locale code that best matches the browser's language tags
 * (navigator.languages / navigator.language), or null. A tag is normalised
 * ('cy_GB' → 'cy-gb'), then tried as an exact locale ('cy-gb'), then by its
 * language alone: the language's international '<lang>-001' locale (so en-AU
 * → 'en-001'), then '<lang>-<lang>' (e.g. 'cy-cy'), then any '<lang>-*' locale. Earlier tags win over later ones.
 */
export function matchLocale(tags, codes) {
	const available = new Set(codes);
	for (const tag of tags) {
		const normalised = String(tag ?? '').toLowerCase().replace(/_/g, '-');
		if (!normalised) continue;
		if (available.has(normalised)) return normalised;
		const language = normalised.split('-')[0];
		const family = LANGUAGE_ALIASES[language] ?? language;
		if (available.has(`${family}-001`)) return `${family}-001`;
		if (available.has(`${family}-${family}`)) return `${family}-${family}`;
		const any = [...available].find((code) => code.startsWith(`${family}-`));
		if (any) return any;
	}
	return null;
}
