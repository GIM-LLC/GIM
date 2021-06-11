import React from 'react';
import style from './Footer.css';
import FooterNav from './FooterNav';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <FooterNav />
    </footer>
  );
};

export default Footer;
