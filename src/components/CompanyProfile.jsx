import React from 'react';
import style from './CompanyProfile.css';

const CompanyProfile = () => {
  return (
    <section className={style.companyProfile}>
      <section className={style.story}>
        <figure>
          <img src="http://placekitten.com/200/200" alt="gim image" />
        </figure>
        <article>
          <h3>The GIM Story</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo non
            quasi delectus minus culpa assumenda, ipsum soluta ipsa neque
            laboriosam temporibus beatae autem vel hic dicta, earum distinctio
            repellendus?
          </p>
        </article>
      </section>

      <section className={style.news}>
        <h3>Company News</h3>
        <article>
          <h3>A Cool Article - 06/04/21</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            dolorem quasi laborum?
          </p>
        </article>
        <article>
          <h3>Another Cool Article - 06/06/21</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            dolorem quasi laborum?
          </p>
        </article>
        <article>
          <h3>A Boring Article - 06/09/21</h3>
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
