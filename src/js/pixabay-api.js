import axios from 'axios';
import { search } from '../main';
import { _page } from '../main';
import { refs } from '../main';
export let searchTerm = 0;
searchTerm = search;
export let arrData = [];
export let totalImage = 1;
export let totalPages = 0;
export let _per_page = 15;
const API_KEY = '35615577-2bf6ed1d70f9a1c328f0e4a49';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchGallery(search) {
  arrData = []; // Очистка перед новым запросом
  try {
    const response = await axios({
      url: BASE_URL,
      params: {
        key: API_KEY,
        q: search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: _per_page,
        page: _page,
      },
    });

    arrData = response.data.hits;
    totalImage = response.data.totalHits;
    totalPages = totalImage / _per_page;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
