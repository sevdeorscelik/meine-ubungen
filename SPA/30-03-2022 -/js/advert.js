export const title = 'Advertisements';

export const getAdvert = (title, description) => {
	return `
	<div class="advert">
		<div class="title">${title}</div>	
		<div class="description">${description}</div>
	</div>	
	`;
};