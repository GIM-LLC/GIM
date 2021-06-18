import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import style from './CompanyProfile.css';
import useGhostStory from '../../hooks/useGhostStory';
import { GameStateContext } from '../../context/GameStateProvider';

const CompanyProfile = ({ glowingObjectState, glowChangeHandler }) => {
  const { showGhostStory, handleStoryClick } = useGhostStory();
  const { points, failedTimeouts } = useContext(GameStateContext);
  console.log(showGhostStory);
  return (
    <section className={style.companyProfile}>
      <article className={style.story}>
        <figure>
          <img onClick={!glowingObjectState['gimStoryImg'] ? () => glowChangeHandler('gimStoryImg') : () => null}
            className={glowingObjectState['gimStoryImg'] ? `${style.glowObjectChallengeEffect} ${style.objectPulse}` : style.objectPulse}
            src={points >= 10 ? '/assets/thumbs3.jpg' : (failedTimeouts >= 3 ? '/assets/thumbs2.jpg' : '/assets/thumbs1.jpg')} alt="gim image" />
        </figure>

        <div className={showGhostStory ? `${style.card} ${style.flip}` : style.card}>
          <article 
            className={style.cardFront} 
            onClick={handleStoryClick}>
            <h2>The GIM Story</h2>
            <p>
              General Industrial Manufacturing Company is a three-generation,
              family-owned and operated, precision machining supplier. GIM has
              earned a reputation as a supplier of high quality, low cost
              precision parts with on-time deliveries. We are a top quality team
              of employees who work well together.
            </p>
          </article>

          <article 
            className={style.cardBack}
            onClick={handleStoryClick}>
            <h2>A Different Story</h2>
            <p>
              I don&apos;t know what happened. An accident, maybe? <br />
              <br />
              But this isn&apos;t what I thought it would feel like. <br />
              <br />
              I was at work. Late. <br />
            </p>
          </article>

        </div>
        {/* {showGhostStory ? (
          <article className={style.cardBack}onClick={handleStoryClick}>
            <h2>A Different Story</h2>
            <p>
              I don&apos;t know what happened. An accident, maybe? <br />
              <br />
              But this isn&apos;t what I thought it would feel like. <br />
              <br />
              I was at work. Late. <br />
            </p>
          </article>
        ) : (
          <article className={style.cardFront} onClick={handleStoryClick}>
            <h2>The GIM Story</h2>
            <p>
              General Industrial Manufacturing Company is a three-generation,
              family-owned and operated, precision machining supplier. GIM has
              earned a reputation as a supplier of high quality, low cost
              precision parts with on-time deliveries. We are a top quality team
              of employees who work well together.
            </p>
          </article>
        )} */}

      </article>

      <section className={style.news}>
        <h3>Company News</h3>
        <article>
          <h6>Manufacturing Leadership Award Winner 2021 - 06/04/21</h6>
          <p>
            This marks the 3rd time GIM has accepted this award since our start
            in 1962.
          </p>
        </article>
        <article>
          <h6>Company Expansion Plan Revealed - 05/22/21</h6>
          <p>
            Plans to expand company reach and hire 100 new employees to start in
            2022.
          </p>
        </article>
        <article
          onClick={!glowingObjectState['employeeMemorialSection'] ? () => glowChangeHandler('employeeMemorialSection') : () => null}
          className={glowingObjectState['employeeMemorialSection'] ? `${style.glowObjectChallengeEffect} ${style.objectPulse}` : style.objectPulse}
        >
          <h6>Employee Memorial Fundraiser - 04/01/21</h6>
          <p>
            With the unexpected passing of one of our long time employees,{' '}
            <span className={style.name}>Robin Smith</span>, HR has organized a
            fundraiser to help the family of our late team member.
          </p>
        </article>
      </section>
    </section>
  );
};

CompanyProfile.propTypes = {
  glowingObjectState: PropTypes.shape({
    gimStoryImg: PropTypes.bool.isRequired,
    galleryImg: PropTypes.bool.isRequired,
    employeeMemorialSection: PropTypes.bool.isRequired
  }).isRequired,
  glowChangeHandler: PropTypes.func.isRequired
};

export default CompanyProfile;
