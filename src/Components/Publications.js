import React from 'react';
import { useSelector } from 'react-redux';

import Posts from './Posts';

import './Publications.css';


function Publications() {
  const posts = useSelector((state) => state.posts);
  const postsInputValues = [];
  Object.values(posts).map(
    (v) => (v = v.map((k) => (k = postsInputValues.push(k)))),
  );
  return (
    <div className='posts-wrapper'>
      {postsInputValues.map((post) => (
        <Posts {...post} />
      ))}
    </div>
  );
}

export default Publications;
