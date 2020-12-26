//CACHE SOME DOM STATE
let gallery = document.querySelector('.gallery');
let galleryImgs = gallery.querySelectorAll('img.card');
let galleryImgNodeArry = [...galleryImgs];
let currentImg = gallery.querySelector('.current');
let idxOfCurrentImg = galleryImgNodeArry.indexOf(currentImg);

// CACHE BUTTON REFS
const nextArrow = document.getElementById('next');
const prevArrow = document.getElementById('previous');

// console.log('nextArrow', nextArrow);
// nextArrow.setAttribute('disabled', true);
// nextArrow.classList.add('disabled');

// prevArrow.setAttribute('disabled', true);
// prevArrow.classList.add('disabled');
// console.log('nextArrow', nextArrow);

// setTimeout(() => {
//   console.log(nextArrow.getAttribute('disabled'));
//   console.log('nextArrow', nextArrow);
// }, 2000);

// HELPER TO QUICKLY REFRESH DOM STATE
const updateGalleryState = () => {
  gallery = document.querySelector('.gallery');
  currentImg = gallery.querySelector('.current');
  idxOfCurrentImg = galleryImgNodeArry.indexOf(currentImg);
};

const updateArrowState = () => {
  let idxOfLastNode = galleryImgNodeArry.length - 1;
  if (idxOfCurrentImg === idxOfLastNode) {
    nextArrow.setAttribute('disabled', true);
    nextArrow.classList.add('disabled');
  } else if (idxOfCurrentImg === 0) {
    prevArrow.setAttribute('disabled', true);
    prevArrow.classList.add('disabled');
  } else {
    nextArrow.removeAttribute('disabled');
    prevArrow.removeAttribute('disabled');
    nextArrow.classList.remove('disabled');
    prevArrow.classList.remove('disabled');
  }
};

const getNextImgNode = buttonClicked => {
  if (buttonClicked === 'next') {
    idxOfNewNode = idxOfCurrentImg + 1;
    console.log('idxOfCurrentImg', idxOfCurrentImg);
    console.log('idxOfLastNode', idxOfLastNode);
  } else if (buttonClicked === 'prev') {
  }
  idxOfNewNode =
    nextOrPrev === 'next' ? idxOfCurrentImg + 1 : idxOfCurrentImg - 1;
  newNode = galleryImgNodeArry[idxOfNewNode];
  currentImg.classList.toggle('current');
  newNode.classList.toggle('current');
};

// CLICK HANDLER
const arrowClicked = e => {
  // cache some stuff
  let direction = e.target.id.toLowerCase();
  let newNode;
  let idxOfNewNode;

  getNextImgNode(direction);
  updateArrowState();
  updateGalleryState();
};

//DO SOME STUFF
updateGalleryState();
updateArrowState();

if (!nextArrow.getAttribute('disabled')) {
  nextArrow.onclick = e => arrowClicked(e);
}

if (!prevArrow.getAttribute('disabled')) {
  prevArrow.onclick = e => arrowClicked(e);
}
