import iziToast from 'izitoast';
import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

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

    try {
        const images = await fetchImages(searchQuery);
        if (images.length === 0) {
            iziToast.info({
                title: 'No results',
                message: 'No images found. Try typing again.',
                position: 'topRight',
            });
        }
        renderGallery(images, gallery);
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong: ${error.message}',
            position: 'topRight',
        });
    }
});