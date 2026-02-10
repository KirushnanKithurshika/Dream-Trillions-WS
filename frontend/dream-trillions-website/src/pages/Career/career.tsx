import React from 'react';
import CareerBG from '../../assets/CareerBG.png';
import './career.css';

import JobCareers from '../../components/Jobform/jobdapply';


const Careers = () => {
  return (
    <div className="career-container">
      <div
        className="career-background"
        style={{
          backgroundImage: `url(${CareerBG})`,
        }}
      >
        <div className="careerpageheadsubhead">
          <div className="careerpage-subheading">
            Build Your Future with Dream Trillions 🚀
          </div>
        </div>
      </div>

      <div className="career-head">
        At Dream Trillions, we are committed to delivering innovative technology
        and digital solutions that empower businesses and individuals to grow.
        As a forward-thinking software and services company, we focus on
        creativity, quality, and continuous improvement. We are looking for
        motivated and talented individuals who are eager to learn, innovate,
        and make an impact. If you’re ready to grow your career in a dynamic and
        collaborative environment, Dream Trillions offers exciting
        opportunities to shape the future together.
      </div>

      <JobCareers />
    
    </div>
  );
};

export default Careers;
