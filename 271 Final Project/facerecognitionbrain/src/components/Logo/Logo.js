import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0' style={{height: '150px', width:'150px'}}>
        <Tilt>
            <div 
                className='br2 shadow-2 pa3'
                style={{ height: '150px', width:'150px', background: 'linear-gradient(89deg, #ff5edf 0%, #04c8de 100%)' }}>

                <img src={brain} alt='Brain Image' style={{paddingTop: '5px'}}/>
            </div>
        </Tilt>
        </div>
    );
}

export default Logo;