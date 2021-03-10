import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
            <h1>This is Home {posts.length}</h1>
            {
                posts.map(post =><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Home;