import React from 'react';
import {Link} from 'gatsby';
import Title from '../Globals/Title';

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem eveniet temporibus sequi atque, nulla debitis architecto dolor non dolorum, incidunt accusamus sed nam saepe ad. Deleniti atque nemo debitis voluptatibus veritatis nam fugiat vero aspernatur consectetur nisi earum doloribus quaerat, expedita unde eius incidunt nostrum. Quasi officiis dolorem accusamus vitae!
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;