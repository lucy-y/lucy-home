export const locales = ["KR", "EN"] as const;

export type Locale = typeof locales[number];

export const defaultLocale: Locale = "EN";