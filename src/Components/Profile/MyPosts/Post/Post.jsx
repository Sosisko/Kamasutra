import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://png.pngtree.com/element_origin_min_pic/16/12/28/7c566296b8f609148ff1b38c36e4aa79.jpg" alt=""/>
            Post 1
            <div>
                <span>Like 1</span>
            </div>
        </div>
    );
}

export default Post;