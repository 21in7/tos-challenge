import React from 'react';
import Header from '../header/Header';

function Main() {
    return (
        <div>
            <Header />
            <img src={process.env.PUBLIC_URL + '/12b.png'} alt="이미지" className='main-image' /> {/* 이미지 추가 */}
        </div>
    );
}

export default Main;