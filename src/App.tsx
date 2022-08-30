import React, { useState } from 'react';
import { NewPostForm } from './components/NewPostForm/NewPostForm';
import { PostPropType } from './components/Posts/Post';
import { PostList } from './components/Posts/PostList';

function App() {

  const postsStart : PostPropType[] = [
    {id : "1" , author : 'qwe' , title  : "title 1" , description : 'desc 1', authorId : '1'},
    {id : "2" , author : 'qwe' , title  : "title 2" , description : 'desc 2', authorId : '1'},
    {id : "3" , author : 'qwe' , title  : "title 3" , description : 'desc 3', authorId : '1'},
    {id : "4" , author : 'qwe' , title  : "title 4" , description : 'desc 4', authorId : '1'},
  ]
 
  const [posts, setposts] = useState<PostPropType[]>(postsStart)

  return (
    <div className='container mx-auto px-4 pt-6 font-mono'>
      {/* <NewPostForm  setPost={setposts}/> */}
      <PostList posts={posts} setPost={setposts}/>
    </div>
  );
}

export default App;
