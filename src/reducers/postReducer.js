import postsData from '../Components/postsData'

const defaultState = {
    posts: [...postsData]
  }
  
function postReducer (state = defaultState, action) {
    switch (action.type) {
      case 'ADD_POST': {
        return {
          ...state,
          posts: state.posts.concat(action.payload)
/*           posts: [...state.posts, action.payload]
 */         
      }
    }
      
      default:
        return state;
    }
  }

  export default postReducer