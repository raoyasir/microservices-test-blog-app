import Post from './components/Posts/Post.js';
import PostList from './components/Posts/PostList.js';

const App = () => {
  return (
    // <div className='container'>
    <main className='container'>
      <section>
        <h1>Create A Post</h1>
        <Post/>
      </section>
      <hr />
      <section>
        <h1>Posts</h1>
        <PostList/>
      </section>
    </main>
    // </div>
  );
}

export default App;
