import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post,setPost] = useState([]);
    const [comments,setComments] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[id])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[])
    return (
        <div>
            <h1>Details of Post : {id}</h1>
            <p>user posted : {post.userId}</p>
            <p>Title : {post.title}</p>
            <p>{post.body}</p>
            <p>Number of comments : {comments.length}</p>
            {
                comments.map(comment =><Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;