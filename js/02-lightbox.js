import { galleryItems } from './gallery-items.js';
// Change code below this line


// 1. Add code in HTML
const galery = document.querySelector(".gallery");
const itemsMarkup = galleryItems.map( galleryItem => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
            <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
        </a>
    </li>`
    ).join(""); 

galery.insertAdjacentHTML('beforeend', itemsMarkup)


// 2. Add library
let gallery = new SimpleLightbox('.gallery a', 
    {
        captionsData: "alt", 
        captionDelay: "250",
    }
);






