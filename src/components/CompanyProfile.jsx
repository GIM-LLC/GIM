import React from 'react';
import style from './CompanyProfile.css';

const CompanyProfile = () => {
  return (
    <section className={style.companyProfile}>
      <article className={style.story}>
        <figure>
          <img src="http://placekitten.com/200/200" alt="gim image" />
        </figure>
        <article>
          <h2>The GIM Story</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            illo dolores doloremque vitae delectus aut. Officia sunt in labore,
            rem saepe ullam aut tempore vitae exercitationem ea dolor cupiditate
            error? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </article>
      </article>

      <section className={style.news}>
        <h3>Company News</h3>
        <article>
          <h6>A Cool Article - 06/04/21</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            dolorem quasi laborum?
          </p>
        </article>
        <article>
          <h6>Another Cool Article - 06/06/21</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            dolorem quasi laborum?
          </p>
        </article>
        <article>
          <h6>A Boring Article - 06/09/21</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            dolorem quasi laborum?
          </p>
        </article>
      </section>
    </section>
  );
};

export default CompanyProfile;
