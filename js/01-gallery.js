import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const cardList = document.querySelector('.gallery')
console.log(cardList);
const galleryList = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`
})
    .join("");

cardList.insertAdjacentHTML('afterbegin', galleryList);

cardList.addEventListener('click', onCardListClick)
function onCardListClick(event) {
    event.preventDefault();
    if (event.taget === event.currentTarget) return;
    const instance = basicLightbox.create(
        `<img src='${event.target.dataset.source}'  width="750" heigth="550">`,
        {
            onShow: () => document.addEventListener('keydown', onEscapeBtnPress),
            onClose: () => document.removeEventListener('keydown', onEscapeBtnPress),
        }
    );
    instance.show();
    function onEscapeBtnPress(event) {
        event.preventDefault();
        if (event.key === 'Escape') {
            instance.close();
        }
    }
}