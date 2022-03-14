/**
 * Capitalize the first letter of a string.
 *
 * tools.capitalizeFirstLetter("this is the title of the article");
 *
 * "This is the title of the article"
 */
export const capitalizeFirstCharacter = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Return today's date in a nice format.
 *
 * tools.getTodaysDate()
 *
 * "Monday, Mar 14, 2022"
 */
export const getTodaysDate = () => {
	const currentDate = new Date();
	const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
	return currentDate.toLocaleDateString('en-us', options);
}