import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function renderGallery(images, container) {
    container.innerHTML = '';

    const markup = images.map(image => {
        return `
        <a class="gallery-item" href="${image.largeImageURL}">
          <div class="image-card">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" width="360"/>
            <ul class="image-stats">
              <li><b>Likes:</b> ${image.likes}</li>
              <li><b>Views:</b> ${image.views}</li>
              <li><b>Comments:</b> ${image.comments}</li>
              <li><b>Downloads:</b> ${image.downloads}</li>
            </ul>
          </div>
        </a>
      `;
    })
    .join('');
    
    container.innerHTML = markup;

    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });
    } else {
        lightbox.refresh();
    }
}