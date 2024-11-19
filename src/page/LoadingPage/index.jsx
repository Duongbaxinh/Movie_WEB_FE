import React from 'react';
import './index.css'
function LoadingPage(props) {
    return (
        <div className='load'
        >
            <ul className='load-container'>
                <li className='load-body'></li>
                <li className='load-body'></li>
                <li className='load-body'></li>
                <li className='load-body'></li>
                <li className='load-body'></li>
            </ul>

        </div>
    );
}

export default LoadingPage;