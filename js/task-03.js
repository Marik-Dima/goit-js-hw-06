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

const menuImgList = document.querySelector(".gallery");

// const imgList = [];

// images.forEach((image) => {
//   let item = document.createElement('li');
//   let imgItem = document.createElement('img');
//   imgItem.src = image.url;
//   imgItem.alt = image.alt;
//   item.appendChild(imgItem);
//   imgList.push(item)
// });


const makeImgListMarkUp = ({ url, alt }) => {
  return `<li class="gallery__item"><img src="${url}" alt="${alt}" width="480" >`
};

const imgList = images.map(makeImgListMarkUp).join("");

menuImgList.insertAdjacentHTML("afterbegin",imgList);  
