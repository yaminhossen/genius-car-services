import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='my-5 text-center'>
            <p><small>copyright this year: {year}</small></p>
        </footer>
    );
};

export default Footer;