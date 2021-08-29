import axios from 'axios';
import { FETCH_CAT, FETCH_DOG, FETCH_FOX } from '../helpers/constants';

async function getImage(request_url, urlParam) {
  try {
    const url = await axios.get(request_url);
    return {
      url: url.data[urlParam],
      tags: url.data.tags ? url.data.tags.join() : [],
    };
  } catch (error) {
    return {
      url: null,
      tags: ['bad request'],
    };
  }
}

export async function handleImgCat(setImg) {
  setImg(await getImage(FETCH_CAT, 'url'));
}
export async function handleImgDog(setImg) {
  setImg(await getImage(FETCH_DOG, 'message'));
}
export async function handleImgFox(setImg) {
  setImg(await getImage(FETCH_FOX, 'image'));
}
