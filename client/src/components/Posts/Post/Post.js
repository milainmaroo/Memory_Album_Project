import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <div className="post">
            <div className="overlays">
                <div className="overlay-container">
                    <img src={post.selectedFile} alt={post.title} className="selected-file" />
                    <div className="overlay">
                        <h3>{post.creator}</h3>
                        <p>{moment(post.createdAt).fromNow()}</p>
                    </div>
                    <div className="overlay2">
                        <button className="edit-btn" onClick={() => setCurrentId(post._id)}><FontAwesomeIcon icon={ faEdit } /> Edit</button>
                    </div>
                </div>
            </div>
            <div className="details">
                <p>{post.tags.map((tag) => `#${tag} `)}</p>
                <h3>{post.title}</h3>
                <p>{post.message}</p>

                <div className="btns">
                    <button className="like-btn" onClick={() => dispatch(likePost(post._id))}><FontAwesomeIcon icon={ faThumbsUp } /> Like {post.likeCount}</button>
                    <button className="delete-btn" onClick={() => dispatch(deletePost(post._id))}><FontAwesomeIcon icon={ faTrashAlt } /> Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Post;