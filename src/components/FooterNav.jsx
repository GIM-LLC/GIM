import React from 'react';
import style from './Footer.css';

const FooterNav = () => {
  return (
    <nav>
      <ul>
	  	  <li className={style.footerListItem}>
          <p className={style.headers}>our people</p>
          <p>Meet the Suppliers</p>
          <p>The Journey</p>
          <p>Leadership</p>
          <p>Experts in the field</p>
        </li>
	  	  <li className={style.footerListItem}>
          <p className={style.headers}>why GIM</p>
          <p>Transparency</p>
          <p>Commitment to Sustainability</p>
          <p>Contributions & Partnerships</p>
          <p>Global Health Impact</p>
        </li>
	  	  <li className={style.footerListItem}>
          <p className={style.headers}>our products</p>
          <p>Raw Materials</p>
          <p>Installations</p>
          <p>Accesories</p>
          <p>Supplies and Consumables</p>
        </li>
	  	  <li className={style.footerListItem}>
          <p className={style.headers}>contact us</p>
          <div className={style.contactUsDiv}>
            <div className={style.iconDiv}>
              <img className={style.iconImage} src={'/assets/Twitter.png'} alt='twitter-icon' />
              <img className={style.iconImage} src={'/assets/ig.png'} alt='instagram-icon' />
              <img className={style.iconImage} src={'/assets/Github_icon.png'} alt='Github_icon' />
              <img className={style.iconImage} src={'/assets/linkedin-icon-2.png'} alt='linkedin-icon' />
              <img className={[style.iconImageGhost, style.pulse].join(' ')} src={'/assets/ghostie.png'} alt='ghost-icon' />

            </div>
            <div className={style.addressDiv}>
              <p className={style.addressesHeader}>Corporate Offices</p>
              <p className={style.addresses}>Oak Square Business Park</p>
              <p className={style.addresses}>1532 Smithsonian St</p>
              <p className={style.addresses}>Middleton, Nebraska, 68833</p>
            </div>
          </div>
 
        </li>

      </ul>
    </nav>
  );
};

export default FooterNav;
