// Locale display metadata shared between the root locale-picker page and the
// header's language picker. The set of *available* locales always comes from
// the vendored content (`$lib/server/content.js` locales()) — this module
// only supplies how to label/order codes that content already declared.

/** Human-readable name for each locale code, in its own language where possible. */
export const LOCALE_LABELS = {
	'en-us': 'English (US)',
	'en-gb': 'English (UK)',
	'en-gb-oxendict': 'English (UK, Oxford spelling)',
	'en-001': 'English (international)',
	'en-150': 'English (Europe)',
	'es-es': 'Español (España)',
	'es-001': 'Español (internacional)',
	'fr-fr': 'Français (France)',
	'fr-001': 'Français (international)',
	'ru-ru': 'Русский (Россия)',
	'ru-001': 'Русский (международный)',
	'zh-cn': '中文（中国大陆）',
	'zh-001': '中文（国际）',
	'ar-eg': 'العربية (مصر)',
	'ar-001': 'العربية (دولي)',
	'cy-gb': 'Cymraeg (Y Deyrnas Unedig)',
	'cy-001': 'Cymraeg (rhyngwladol)',
	'hi-001': 'हिन्दी (अंतरराष्ट्रीय)',
	'bn-001': 'বাংলা (আন্তর্জাতিক)',
	'pt-001': 'Português (internacional)',
	'id-001': 'Bahasa Indonesia (internasional)',
	'ur-001': 'اردو (بین الاقوامی)'
};

export const DEFAULT_LOCALE = 'en-gb-oxendict';

export function localeLabel(code) {
	return LOCALE_LABELS[code] ?? code;
}
