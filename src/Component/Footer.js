import React from 'react';
import logo1 from './pic/f_logo.png';

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container text-center top'>
                <div className='img'>
                    <img src={logo1} alt='' />
                </div>
                <p>&copy 2022. All right reserved by JoySarkar</p>
            </div>
        </footer>
    </>
  )
}

export default Footer;