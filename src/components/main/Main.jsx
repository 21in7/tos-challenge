import React from 'react';
import Header from '../header/Header.jsx';

function Main() {
    return (
        <div>
            <Header />
            <img src='/tos-challenge/main.png' alt="이미지" className='main-image' /> {/* 이미지 추가 */}
        </div>
    );
}

export default Main;