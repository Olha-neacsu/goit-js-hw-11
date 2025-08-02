export function renderGallery(images, container) {
    const markup = images
        .map(
            image => `
        <div class="image-card">
        <img src="${image.webformatURL}" alt="${image.tags}"/>
        </div>`
    ).join('');
    
    container.innerHTML = markup;
}