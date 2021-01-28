import React from 'react';

export const ANAKIN_IMAGE =
  'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg';
export const RAY_IMAGE =
  'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';
export const YODA_IMAGE =
  'https://static.wikia.nocookie.net/rustarwars/images/d/d6/Yoda_SWSB.png';
export const TOY_IMAGE =
  'https://vizanka.ru/wp-content/uploads/2019/12/%D0%BC%D0%B0%D0%BB%D1%8B%D1%88-%D0%99%D0%BE%D0%B4%D0%B0-2.jpg';
export const CHEWIE_IMAGE =
  'https://images-na.ssl-images-amazon.com/images/I/71QeOg9t2xL._AC_SL1500_.jpg';
export const SLIPPERS_IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4YGUY62Uwb3FPBT_JAobKpgAX7h1d5vzZQ&usqp=CAU';

export const authors = [
  { name: 'Anakin Skywalker', photo: ANAKIN_IMAGE, nickname: '@dart_vader' },
  { name: 'Yoda', photo: YODA_IMAGE, nickname: '@master' },
  { name: 'Chewbacca', photo: CHEWIE_IMAGE, nickname: '@chewie' },
];

 const postsData = [
  {
    name: 'Anakin Skywalker',
    photo: ANAKIN_IMAGE,
    nickname: '@dart_vader',
    content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
    image: RAY_IMAGE,
    date: '26 февр.',
    id: 11,
    likes: 2,
    comments: 3,
    reposts: 1,
  },
  {
    name: 'Yoda',
    photo: YODA_IMAGE,
    nickname: '@master',
    content: 'Always more questions than answers there are',
    image: TOY_IMAGE,
    date: '04 апр.',
    id: 22,
    likes: 3,
    comments: 1,
    reposts: 2,
  },
  {
    name: 'Chewbacca',
    photo: CHEWIE_IMAGE,
    nickname: '@chewie',
    content: 'urrghhhh grrrooooogh rrrrrrhheeee',
    image: SLIPPERS_IMAGE,
    date: '05 сент',
    id: 33,
    likes: 8,
    comments: 3,
    reposts: 1,
  },
];

export default postsData