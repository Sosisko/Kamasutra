import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img
                src="https://www.autocar.co.nz/_Reviews/Cars/honda-cr-v-longterm-4/Longterm-Honda-CR-V-sunset-static_HEADER.jpg"
                alt=""/>
            <div>ava+discr</div>
            <MyPosts />
        </div>
    );
}

export default Profile;