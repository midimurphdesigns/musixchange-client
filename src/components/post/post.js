import React from 'react';

import './post.css';
import Navbar from './Navbar/Navbar';
import PostForm from './PostForm/PostForm';
import Footer from './Footer/Footer';

export default function Post(props) {
    return (
        <div>
            <Navbar />
            <PostForm />
            <Footer />
        </div>
    )
}