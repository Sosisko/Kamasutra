import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My posts
           <div>New post</div>
           <Post message = 'Привет, как дела ?' likesCount='0'/>
           <Post message = 'У меня всё ок!' likesCount='23'/>

        </div>

    );
}

export default MyPosts;