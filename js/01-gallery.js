import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1.Add code in HTML
console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const itemsMarkup = galleryItems.map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  )
  .join("");
gallery.insertAdjacentHTML('beforeend', itemsMarkup);


// 2.Add big images
gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();

  if(e.target.nodeName === "IMG"){
    const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="1400" height="900">`
      ,  
      {
        onShow: (instance) => {
          document.addEventListener("keydown", closeFunction(instance));
        },
      },
      {
        onClose: (instance) => {
          document.removeEventListener("keydown", closeFunction(instance));
        },
      }
    )
    instance.show()
  }
}

// 3.Function close on press Escape
    function closeFunction (instance) {
      return function (e) {
              if(e.key === "Escape") {
                return instance.close()
              }
            }
    };
