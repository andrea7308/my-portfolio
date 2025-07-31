import React from 'react'
import './index.scss';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
    return (
    <div className="App">
        <Navbar />
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>

            {children}

            <span className='tags bottom-tags'>
            &lt;//body&gt;
            <br />
            <span className='bottom-tag-html'>&lt;//html&gt;</span>
            </span>
        </div>
    </div>
    )
}

export default Layout;