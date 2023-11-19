import React from 'react';
import './Homepage.module.css';

export const Homepage = () => {
  return (
    <div>
      <section className="hero-banner bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img src="https://www.markuptag.com/images/web-development-vector.png" className="img-fluid" alt="Web Development" />
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Explore the World of GDSC</h1>
              <p className="lead text-secondary my-5">Join us on a journey of innovation and collaboration. Discover the endless possibilities of technology with Google Developer Student Clubs at SIT.</p>
              <a href="#" className="btn btn-outline-secondary btn-lg border">Get Involved</a>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        <section className="dark-grey-text">
          <div className="row pr-lg-5">
            <div className="col-md-7 mb-4">
              <div className="view">
                <img src={require(`./images/stack.png`)} className="img-fluid" alt="Sample Image" />
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-center">
              <div>
                <h3 className="font-weight-bold mb-4">Innovative Solutions with GDSC</h3>
                <p>Unlock creativity and build impactful solutions. GDSC SIT is your gateway to hands-on learning and cutting-edge technology.</p>
                <button type="button" className="btn btn-orange btn-rounded mx-0">Join Now</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="px-md-5 mx-md-5 text-center white-text grey p-5 z-depth-1" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)' }}>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-md-10">
            <i className="fas fa-gem fa-2x mb-4"></i>
            <h3 className="font-weight-bold">Empower. Innovate. Inspire.</h3>
            <p>Join GDSC SIT and be part of a community that empowers you to innovate and inspires you to make a difference. Let's build a future together!</p>
            <a href="#" className="btn btn-outline-white btn-md waves-effect" role="button">Explore Projects</a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Homepage
