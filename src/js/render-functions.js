export function renderGallery(images, container) {
    const markup = images.map(image => {
        const {
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads,
        } = image;

        return `
        <li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
        <img src="${webformatURL}" alt="${tags}" class="gallery-image"/>
        </a>
        <div class="info">
        <p><b>Likes:</b>${likes}</p>
        <p><b>Views:</b>${views}</p>
        <p><bComments:b>${comments}</p>
        <p><b>Downloads:</b>${downloads}</p>
        </div>
        </li>`;
    }).join('');
    
    container.innerHTML = `<ul class="gallery-list">${markup}</ul>`;
}