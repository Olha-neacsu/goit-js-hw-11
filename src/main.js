import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchQuery = form.elements['search-text'].value.trim();

    if (searchQuery === '') {
        iziToast.warning({
            title: 'Empty',
            message: 'Type here to search',
            position: 'topRight',
        });
        return;
    }

    gallery.innerHTML = '';
    loader.hidden = false;

    try {
        loader.hidden = false;

        const images = await fetchImages(searchQuery);

        await new Promise(resolve => setTimeout(resolve, 3000));

        if (images.length === 0) {
            iziToast.info({
                title: 'No results',
                message: `No images found for "${searchQuery}".  Try again.`,
                position: 'topRight',
            });
        }

        renderGallery(images, gallery);
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: `Something went wrong: ${error.message}`,
            position: 'topRight',
        });
    } finally {
        loader.hidden = true;
    }
});