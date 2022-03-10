import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost  } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return (
        <div className="main-container">
            <form className="form" onSubmit={handleSubmit}>
                <h3>Creating a Memory</h3>
                <input type="text" className="creator" value={postData.creator} placeholder="Creator"
                        onChange={(e) => setPostData({ ...postData, creator: e.target.value })} required />

                <input type="text" className="title" value={postData.title} placeholder="Title"
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })} required />

                <textarea type="text" className="message" value={postData.message} placeholder="Message"
                        onChange={(e) => setPostData({ ...postData, message: e.target.value })} required></textarea>

                <input type="text" className="tags" value={postData.tags} placeholder="Tags (comma separated)"
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} required />

                <div><FileBase type="file" multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} /></div>

                <button className="submit" type="submit">Submit</button>
                <button className="clear" onClick={clear}>Clear</button>
            </form>
        </div>
    )
}

export default Form;