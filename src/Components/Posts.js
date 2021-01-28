import React from 'react';

const imgComment = (
  <svg
    aria-hidden='true'
    focusable='false'
    data-prefix='far'
    data-icon='comment'
    className='icon-img'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
  >
    <path
      fill='currentColor'
      d='M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z'
    ></path>
  </svg>
);
const imgLike = (
  <svg
    aria-hidden='true'
    focusable='false'
    data-prefix='far'
    data-icon='heart'
    className='icon-img'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
  >
    <path
      fill='currentColor'
      d='M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z'
    ></path>
  </svg>
);
const imgRepost = (
  <svg
    aria-hidden='true'
    focusable='false'
    data-prefix='fas'
    data-icon='retweet'
    className='icon-img'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 640 512'
  >
    <path
      fill='currentColor'
      d='M629.657 343.598L528.971 444.284c-9.373 9.372-24.568 9.372-33.941 0L394.343 343.598c-9.373-9.373-9.373-24.569 0-33.941l10.823-10.823c9.562-9.562 25.133-9.34 34.419.492L480 342.118V160H292.451a24.005 24.005 0 0 1-16.971-7.029l-16-16C244.361 121.851 255.069 96 276.451 96H520c13.255 0 24 10.745 24 24v222.118l40.416-42.792c9.285-9.831 24.856-10.054 34.419-.492l10.823 10.823c9.372 9.372 9.372 24.569-.001 33.941zm-265.138 15.431A23.999 23.999 0 0 0 347.548 352H160V169.881l40.416 42.792c9.286 9.831 24.856 10.054 34.419.491l10.822-10.822c9.373-9.373 9.373-24.569 0-33.941L144.971 67.716c-9.373-9.373-24.569-9.373-33.941 0L10.343 168.402c-9.373 9.373-9.373 24.569 0 33.941l10.822 10.822c9.562 9.562 25.133 9.34 34.419-.491L96 169.881V392c0 13.255 10.745 24 24 24h243.549c21.382 0 32.09-25.851 16.971-40.971l-16.001-16z'
    ></path>
  </svg>
);
const imgUpload = (
  <svg
    aria-hidden='true'
    focusable='false'
    data-prefix='fas'
    data-icon='upload'
    className='icon-img'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
  >
    <path
      fill='currentColor'
      d='M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'
    ></path>
  </svg>
);

const Posts = (props) => {
  return (
    <div className='post' key={props.id}>
      <div className='head-wrapper'>
        <img alt='avatar' className='icon' src={props.photo} />
        <span className='name'>{props.name}</span>
        <span className='nick'>{props.nickname}</span>
        <span className='date'>{props.date}</span>
      </div>

      <p className='content'>{props.content}</p>
      <img alt='post' className='photo' src={props.image} />
      <div className='icons-wrapper'>
        <span className='icon-box'>
          {imgLike}
          <p className='counter'>{props.likes}</p>
        </span>
        <span className='icon-box'>
          {imgComment}
          <p className='counter'>{props.comments}</p>
        </span>
        <span className='icon-box'>
          {imgRepost}
          <p className='counter'>{props.reposts}</p>
        </span>

        {imgUpload}
      </div>
    </div>
  );
};

export default Posts;
