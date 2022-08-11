import { galleryItems } from './gallery-items.js';
// Change code below this line
let gallery = document.querySelector('.gallery')

let imageGallery = galleryItems
.map((element)=>

`<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`)

gallery.insertAdjacentHTML("afterbegin", imageGallery.join(' '))


gallery.addEventListener('click', zoomIn);

function zoomIn () {
    event.preventDefault()
    if(event.target.nodeName === 'IMG'){
        let zoom = 
        basicLightbox.create(`<img src='${event.target.getAttribute('data-source')}' alt='${event.target.getAttribute('alt')}'>`)
        zoom.show()
        gallery.addEventListener('keydown', (event)=>{
            if(event.keyCode === 27){
                zoom.close()
            }
        })
    }
}



