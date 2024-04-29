import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { MdFindInPage } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';

const HowitWorks = () => {
  return (
    <div className='howitworks'>
      <div className="container">
        <h3>How JobZee Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>Create Account</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ab neque ut!</p>
          </div>

          <div className="card">
            <MdFindInPage />
            <p>Post a Job Or Find a Job here...</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ab neque ut!</p>
          </div>

          <div className="card">
            <IoMdSend />
            <p>Apply For Job Or Recruit Suitable Candidates...</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ab neque ut!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;

