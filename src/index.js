import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProfilePage from './ProfilePage';

const user = {
    imageUrl: `${process.env.PUBLIC_URL}/Images/person1.jpeg`,
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software Developer',
    posts: ['Post 1', 'Post 2', 'Post 3'],
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProfilePage user={user} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
