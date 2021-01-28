import Button from '@material-ui/core/Button';
import { connect, useSelector, useDispatch } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import Select from '@material-ui/core/Select';

import authors from './postsData';
import { createPost } from '../actions/actions';

import './Publications.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

function AddPost() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const classes = useStyles();

  const [imgLink, setImgLink] = useState('');
  const [postBody, setPostBody] = useState('');
  const [postAuthor, setPostAuthor] = useState('Author');

  console.log(postAuthor);

  const authorInput = authors.find((v) => v.name === postAuthor);

  const createNewPost = () => {
    const newPost = {
      name: postAuthor,
      photo: authorInput.photo,
      nickname: authorInput.nickname,
      content: postBody,
      image: imgLink,
      date: new Date().toLocaleDateString(),
      id: Math.round(Math.random() * 100),
      likes: 0,
      comments: 0,
      reposts: 0,
    };
    dispatch(createPost(newPost));

    setImgLink('');
    setPostBody('');
    setPostAuthor('Author');
    console.log(newPost);
    console.log(posts);
  };

  return (
    <div>
      <FormControl required className={classes.formControl}>
        <InputLabel id='demo-simple-select-required-label'>Author</InputLabel>
        <Select
          labelId='demo-simple-select-required-label'
          id='demo-simple-select-required'
          className='post-input'
          value={postAuthor}
          onChange={(e) => setPostAuthor(e.target.value)}
          className={classes.selectEmpty}
        >
          {authors.map(
            (a) =>
              (a = (
                <MenuItem value={a.name} key={a.name}>
                  {a.name}
                </MenuItem>
              )),
          )}
        </Select>
      </FormControl>

      <form className={classes.root} noValidate autoComplete='off'>
        <div>
          <TextField
            required
            className='post-input'
            id='filled-required'
            label='Post text'
            placeholder='Post text goes here'
            value={postBody}
            variant='filled'
            onChange={(e) => setPostBody(e.target.value)}
          />
        </div>
      </form>

      <form className={classes.root} noValidate autoComplete='off'>
        <div>
          <TextField
            className='post-input'
            id='filled-required'
            label='Link'
            placeholder='Paste link to add image'
            variant='filled'
            value={imgLink}
            onChange={(e) => setImgLink(e.target.value)}
          />
        </div>
      </form>
      <Button
        variant='contained'
        color='default'
        size='large'
        className={classes.button}
        onClick={createNewPost}
      >
        Add
      </Button>
    </div>
  );
}

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(AddPost);
