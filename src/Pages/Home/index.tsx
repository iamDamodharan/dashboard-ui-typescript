import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { getUser, getUserPost, putUserPost, deleteUserPost } from '../../utils';
import * as Flex from './style';
import Sidebar from '../../Components/Sidebar';
import Post from '../../Components/Post';
import Dashboard from '../../Components/Dashboard';

export interface IState {
    id: String;
    name: String;
}

export interface IPost {
    id: String;
    title: String;
    body: String;
}

const Home = () => {
    const [user, setUser] = useState({});
    const [post, setPost] = useState([]);
    const [postLoad, setPostLoad] = useState(false);
    const [postError, setPostError] = useState(false);
    const [postMessage, setPostMessage] = useState('');

    console.log(postMessage);
    useEffect(() => {
        getUserDetails();
        getUserAllPost();
    }, [])

    const getUserDetails = () => {
        const response = getUser({ id: 1 });
        response
            .then((res) => {
                setUser(res.data);
            })
            .catch(() => {
            });
    }

    const getUserAllPost = () => {
        const response = getUserPost({ id: 1 });
        response
            .then((res) => {
                setPost(res.data);
            })
            .catch(() => {
            });
    }

    const updatePost = (data?: any) => {
        setPostLoad(true);
        setPostError(false);
        setPostMessage('Please wait, your post is getting updated.');
        const response = putUserPost(data.id, data);
        response
            .then((res) => {
                const d = res.data;
                const target = post.map((p?: any) => p.id === d.id ? d : p) as never;
                setPost(target);
                setPostLoad(false);
                setPostError(false);
                setPostMessage('Success');
            })
            .catch(() => {
                setPostLoad(false);
                setPostError(true);
                setPostMessage('Error while updating your post');
            });
    }

    const deletePost = (data?: any) => {
        setPostLoad(true);
        setPostError(false);
        setPostMessage('Please wait, your post is getting deleted.');
        const response = deleteUserPost(data.id);
        response
            .then(() => {
                const target = post.slice(data.id, post.length) as never;
                setPost(target);
                setPostLoad(false);
                setPostError(false);
                setPostMessage('Success');
            })
            .catch(() => {
                setPostLoad(false);
                setPostError(true);
                setPostMessage('Error while updating your post');
            });
    }

    return (
        <Flex.Container>
            <Sidebar user={user} />
            <Flex.Content>
                <Routes>
                    {/* <Route index path='/' element={<Dashboard />} /> */}
                    <Route path='/' element={<Post load={postLoad} error={postError} post={post} updatePost={updatePost} deletePost={deletePost} />} />
                </Routes>
            </Flex.Content>
        </Flex.Container>
    )
}

export default Home;