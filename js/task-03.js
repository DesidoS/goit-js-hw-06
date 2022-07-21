const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryContainer = document.querySelector('.gallery')

const makeGalleryFn = options => {
  return options.map(option => {
      const itemEl = document.createElement('li');
      itemEl.classList.add('list__item');
      
      const imgEl = document.createElement('img');
      imgEl.classList.add('img__item');
      imgEl.src = option.url;
      imgEl.alt = option.alt;
    
      itemEl.appendChild(imgEl)
        return itemEl;
    }
    )
};
const listEl = makeGalleryFn(images)

galleryContainer.append(...listEl)

// не внимательно прочитал задание и сделал стили в js, потом сделал стили через классы в CSS

// galleryContainer.style.display = 'flex';
// galleryContainer.style.justifyContent = 'space-between';
// galleryContainer.style.padding = 0;