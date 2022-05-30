import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(createGalleryItemsMarkup(galleryItems))

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', itemsMarkup)

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ original, preview, description  }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"

          />
        </a>
      </div>
        `
    })
    .join("")
}



// console.log(galleryItems);
