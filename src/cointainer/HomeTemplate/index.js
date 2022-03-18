import React from 'react';
import Carousel from './_components/Carousel';
import Header from './_components/Navbar';

export default function LayoutHome() {
    return (
        <div>
            <Header/>
            <div className="container-fluid"><Carousel/></div>
            
            <div>Haha</div>
        </div>
    )
}
