import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-black text-white'>
            <p><small>copyright <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> {year} </small></p>
            <p><small>All right reserved to Md. Nihal</small></p>
        </footer>
    );
};

export default Footer;