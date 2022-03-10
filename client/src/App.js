import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <div>
            <header className="header">
                <h1>Memory Album</h1>
            </header>
            <section>
                <Posts setCurrentId={setCurrentId} />
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </section>
        </div>
    );
}

export default App;