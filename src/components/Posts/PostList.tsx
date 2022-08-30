import React from 'react'
import { NewPostForm } from '../NewPostForm/NewPostForm'
import { Post, PostPropType } from './Post'

export interface PostListPropType {
    posts: PostPropType[],
    setPost: Function,
}

export const PostList: React.FC<PostListPropType> = ({ posts, setPost }) => {
    return (
        <div className='grid grid-cols-2 place-items-center gap-4'>
            <NewPostForm setPost={setPost} />
            {posts.map(e =>
                <Post {...e} />
            )}
        </div>
    )
}
