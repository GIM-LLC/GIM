import React from 'react';
import PropTypes from 'prop-types';
import style from './CompanyProfile.css';
import useGhostStory from '../../hooks/useGhostStory';

const CompanyProfile = ({ glowingObjectState, glowChangeHandler }) => {
  const { showGhostStory, handleStoryClick } = useGhostStory();
  return (
    <section className={style.companyProfile}>
      <article className={style.story}>

        <figure 
          onClick={!glowingObjectState['gimStoryImg'] ? () => glowChangeHandler('gimStoryImg') : () => null}
          className={glowingObjectState['gimStoryImg'] ? `${style.glowObjectChallengeEffect} ${style.objectPulse}` : style.objectPulse}
        >
          <img src="http://placekitten.com/200/200" alt="gim image" />
        </figure>

        {showGhostStory ? (
          <article onClick={handleStoryClick}>
            <h2>A Different Story</h2>
            <p>
              I don&apos;t know what happened. An accident, maybe? <br />
              Maybe I was sick, some quiet clot or leak or whatever else might make things go from nothing to... nothing, I guess. <br />
              <br />
              I was at work.
            </p>
          </article>
        ) : (
          <article onClick={handleStoryClick}>
            <h2>The GIM Story</h2>
            <p>
              General Industrial Manufacturing Company is a three-generation,
              family-owned and operated, precision machining supplier. GIM has
              earned a reputation as a supplier of high quality, low cost
              precision parts with on-time deliveries. We are a top quality team
              of employees who work well together.
            </p>
          </article>
        )}

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
