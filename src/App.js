import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AddPost from './Components/AddPost';
import postsData from './Components/postsData';
import Publications from './Components/Publications';

import './App.css';

console.log(postsData)
function App( ) {
  return (
    <div className='App'>
      <Router>
        <Link to='/add-post'>Add post</Link>
        <Route path='/add-post' component={AddPost} />
      </Router>
      
      <Publications  />
    </div>
  );
}


 export default App