import { galleryItems } from './gallery-items.js';
// Change code below this line
let gallery = document.querySelector('.gallery')

let imageGallery = galleryItems
.map((element)=>

`<li class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      alt="${element.description}"
    />
  </a>
</li>`)

gallery.insertAdjacentHTML("afterbegin", imageGallery.join(' '))

var lightbox = new SimpleLightbox('.gallery a', { 
  captions : true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,

 });






  

