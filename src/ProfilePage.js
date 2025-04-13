// ProfilePage.js
import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';
import ImageFromPublic from './ImageFromPublic';
import ImageFromSrc from './ImageFromSrc';
import LoginForm from './LoginForm';

const ProfilePage = ({ user }) => {
    return (
        <div>
            <ProfileImage imageUrl={user.imageUrl} />
            <UserInfo name={user.name} email={user.email} bio={user.bio} />
            <UserPosts posts={user.posts} />
            <ImageFromPublic />
            <ImageFromSrc />
            <LoginForm />
        </div>
    );
};

export default ProfilePage;