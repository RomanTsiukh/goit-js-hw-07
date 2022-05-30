import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(createGalleryItemsMarkup(galleryItems))


const gallery = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML('afterbegin', itemsMarkup);


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


galleryContainer.addEventListener("click", onGalleryClick)

function onGalleryClick (e) {
  e.preventDefault();

  if(!e.target.classList.contains(".gallery__image")) {
    return
  }

  
}

// console.log(galleryItems);









