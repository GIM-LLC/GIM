import React from 'react';
import useGhostSocialIcons from '../../hooks/useGhostSocialIcons';
import useFooterTitles from '../../hooks/useFooterTitles';
import useTransparent from '../../hooks/useTransparent';
import style from './Footer.css';

const FooterNav = () => {
  const { handleTitleClick, footerTitleGhostState } = useFooterTitles();
  const { showMessage, transparentClicked } = useTransparent();
  const { iconGhostState, handleIconClick } = useGhostSocialIcons();

  return (
    <>
      <nav>
        <ul aria-label={'footerList'}>
          <li className={style.footerListItem}>
            <p className={style.headers} onClick={footerTitleGhostState.titleOne === 'HELP' ? () => null : () => handleTitleClick('titleOne')}>{footerTitleGhostState.titleOne}</p>
            <p>Meet the Suppliers</p>
            <p>The Journey</p>
            <p>Leadership</p>
            <p>Experts in the field</p>
          </li>
          <li className={style.footerListItem}>
            <p className={style.headers} onClick={footerTitleGhostState.titleTwo === 'FREE' ? () => null : () => handleTitleClick('titleTwo')}>{footerTitleGhostState.titleTwo}</p>
            <p onClick={showMessage} className={style.pointer}>Transparency</p>
            <p>Commitment to Sustainability</p>
            <p>Contributions & Partnerships</p>
            <p>Global Health Impact</p>
          </li>
          <li className={style.footerListItem}>
            <p className={style.headers} onClick={footerTitleGhostState.titleThree === 'MY' ? () => null : () => handleTitleClick('titleThree')}>{footerTitleGhostState.titleThree}</p>
            <p>Raw Materials</p>
            <p>Installations</p>
            <p>Accesories</p>
            <p>Supplies and Consumables</p>
          </li>
          <li className={style.footerListItem}>
            <p className={style.headers} onClick={footerTitleGhostState.titleFour === 'SOUL' ? () => null : () => handleTitleClick('titleFour')}>{footerTitleGhostState.titleFour}</p>
            <div className={style.contactUsDiv}>
              <div className={style.iconDiv}>
                <img
                  onClick={(e) => handleIconClick(e)}
                  className={
                    iconGhostState.twitter
                      ? [style.iconImageGhost, style.pulse].join(' ')
                      : style.iconImage
                  }
                  src={
                    !iconGhostState.twitter
                      ? '/assets/Twitter.png'
                      : '/assets/ghostie.png'
                  }
                  alt="twitter-icon"
                />
                <img
                  onClick={(e) => handleIconClick(e)}
                  className={
                    iconGhostState.instagram
                      ? [style.iconImageGhost, style.pulse].join(' ')
                      : style.iconImage
                  }
                  src={
                    !iconGhostState.instagram
                      ? '/assets/ig.png'
                      : '/assets/ghostie.png'
                  }
                  alt="instagram-icon"
                />
                <img
                  onClick={(e) => handleIconClick(e)}
                  className={
                    iconGhostState.github
                      ? [style.iconImageGhost, style.pulse].join(' ')
                      : style.iconImage
                  }
                  src={
                    !iconGhostState.github
                      ? '/assets/Github_icon.png'
                      : '/assets/ghostie.png'
                  }
                  alt="github-icon"
                />
                <img
                  onClick={(e) => handleIconClick(e)}
                  className={
                    iconGhostState.linkedin
                      ? [style.iconImageGhost, style.pulse].join(' ')
                      : style.iconImage
                  }
                  src={
                    !iconGhostState.linkedin
                      ? '/assets/linkedin-icon-2.png'
                      : '/assets/ghostie.png'
                  }
                  alt="linkedin-icon"
                />
                <img
                  className={[style.iconImageGhost, style.pulse].join(' ')}
                  src={'/assets/ghostie.png'}
                  alt="ghost-icon"
                />
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
      <div
        className={transparentClicked ? [style.hiddenMessage, style.reveal].join(' ') : [style.hiddenMessage, style.hide].join(' ')}
      >YES! The answers are all here.... keep clicking around!</div>
    </>
  );
};

export default FooterNav;
