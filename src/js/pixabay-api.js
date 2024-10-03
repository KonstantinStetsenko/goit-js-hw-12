import axios from 'axios';
import { search } from '../main';
import { _page, _per_page } from '../main';
import { refs } from '../main';

const API_KEY = '35615577-2bf6ed1d70f9a1c328f0e4a49';
const BASE_URL = 'https://pixabay.com/api/';

export let searchTerm = search;
export let arrData = [];

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
    console.log(arrData.length);
    console.log(response);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
