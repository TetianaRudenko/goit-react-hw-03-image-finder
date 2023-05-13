import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const KEY_API = '34783032-e2a986b6ea45253b9670a189f';

export async function apiService(serchQuery, page) {
  const response = await axios.get(`${BASE_URL}?q=${serchQuery}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`);
  return response.data;
}