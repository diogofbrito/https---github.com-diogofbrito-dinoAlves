import axios from 'axios';

const api = axios.create({
	baseURL: '../../public/data/',
});

export async function fetchData(endpoint) {
	try {
		const response = await api.get(`/${endpoint}.json`);
		return response.data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}

export async function getColec() {
	return await fetchData('colec');
}

export async function getFigur() {
	return await fetchData('figur');
}

export async function getAbout() {
	return await fetchData('about');
}

export async function getStyling() {
	return await fetchData('styling');
}

export async function getHospital() {
	return await fetchData('hospitalRoupa');
}

export async function getMenuItems() {
	return await fetchData('menuItems');
}
