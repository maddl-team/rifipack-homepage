/** REST di WordPress. Oggi è il sito pubblico; un CMS separato si imposta con WORDPRESS_API_URL. */
const api = (process.env.WORDPRESS_API_URL || "https://www.rifipack.it/wp-json").replace(/\/$/, "");

export const WORDPRESS_API_URL = api;
export const WORDPRESS_URL = api.replace(/\/wp-json$/, "");
export const POSTS_PER_PAGE = 9;
