import axios from 'axios';

const api = axios.create({
	baseURL: '/data/',
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

export async function getColecoes() {
	return await fetchData('colecoes');
}

export async function getFigurinos() {
	return await fetchData('figurinos');
}

export async function getStyling() {
	return await fetchData('styling');
}

export async function getProjetosEspeciais() {
	return await fetchData('projetosEspeciais');
}

export async function getPress() {
	return await fetchData('press');
}
