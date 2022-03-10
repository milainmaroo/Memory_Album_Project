import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        <div className="main-container posts">
            {posts.map((post) => 
            <section key={post._id}>
                <Post post={post} setCurrentId={setCurrentId} />
            </section>
            )}
        </div>
    );
}

export default Posts;