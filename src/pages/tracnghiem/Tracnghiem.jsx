import React from 'react';
import '../../css/tracnghiem.css'
import { Link } from 'react-router-dom';
const Tracnghiem = () => {
    return (
        <div>
        <div className="overlay d-flex align-items-center">
          <div className="sub-overlay d-flex justify-content-between">
            <button className="button-1">1</button>
            <button className="button-2">2</button>
            <button className="button-3">3</button>
            <button className="button-4">4</button>
          </div>
        </div>
        <header>
          <div className="header d-flex justify-content-between align-items-center">
            <div className="left-header d-flex align-items-center">
              <div className="logo-wrapper">
                <Link to="/"><img src="assets/sk-logo.png" alt="" className="logo" /></Link>
              </div>
              <div className="left-header-desc">
                <p className="header-desc">Focus Management Assessment</p>
              </div>
            </div>
            <div className="right-header d-flex">
              <button className="all-button">All</button>
              <div className="clock-wrapper d-flex align-items-center"><i className="fa-solid fa-clock" /><div id="ten-countdown" /></div>
              <div className="countdown-wrapper" />
            </div>
          </div>
        </header>
        <div className="main">
          <div className="main-header-wrapper">
            <p className="main-header text-center">Please review the question below and choose one of the rating buttons. Questions followed by an asterisk <span className="bold-orange">(*)</span> are mandatory.</p>
          </div>
          <div className="main-body">
            <div className="main-body-header-wrapper"><p className="main-body-header">CHOOSE THE BEST OPTION</p></div>
            <div className="question-1-wrapper d-flex flex-column question-wrapper question">
              <p className="question-1"><span className="bold-black"> Question 1</span> <span className="bold-red">*</span> I am proud to work for ABC</p>
              <div className="answer-wrapper d-flex align-items-center">
                <p className="agree">Agree</p>
                <div className="options-wrapper d-flex align-items-end">
                  <div className="circle-2-true num-12" />
                  <div className="circle-3-true num-13" />
                  <div className="circle-4-true num-14" />
                  <div className="circle-5 num-15" />
                  <div className="circle-4-false num-16" />
                  <div className="circle-3-false num-17" />
                  <div className="circle-2-false num-18" />
                </div>
                <p className="disagree">Disagree</p>
              </div>
            </div>
            <div className="question-2-wrapper d-flex flex-column question-wrapper question">
              <p className="question-1"><span className="bold-black"> Question 2</span> <span className="bold-red">*</span> I would recommend ABC as a great place to work 
              </p>
              <div className="answer-wrapper d-flex align-items-center">
                <p className="agree">Agree</p>
                <div className="options-wrapper d-flex align-items-end">
                  <div className="circle-2-true num-22" />
                  <div className="circle-3-true num-23" />
                  <div className="circle-4-true num-24" />
                  <div className="circle-5 num-25" />
                  <div className="circle-4-false num-26" />
                  <div className="circle-3-false num-27" />
                  <div className="circle-2-false num-28" />
                </div>
                <p className="disagree">Disagree</p>
              </div>
            </div>
            <div className="question-3-wrapper d-flex flex-column question-wrapper question">
              <p className="question-3"><span className="bold-black"> Question 3</span> <span className="bold-red">*</span> I see myself still working at ABC in two years’ time 
              </p>
              <div className="answer-wrapper d-flex align-items-center">
                <p className="agree">Agree</p>
                <div className="options-wrapper d-flex align-items-end">
                  <div className="circle-2-true num-32" />
                  <div className="circle-3-true num-33" />
                  <div className="circle-4-true num-34" />
                  <div className="circle-5 num-35" />
                  <div className="circle-4-false num-36" />
                  <div className="circle-3-false num-37" />
                  <div className="circle-2-false num-38" />
                </div>
                <p className="disagree">Disagree</p>
              </div>
            </div>
            <div className="question-4-wrapper d-flex flex-column question-wrapper question">
              <p className="question-4"><span className="bold-black"> Question 4</span> <span className="bold-red">*</span> The leaders at ABC keep people informed about what is happening.  
              </p>
              <div className="answer-wrapper d-flex align-items-center">
                <p className="agree">Agree</p>
                <div className="options-wrapper d-flex align-items-end">
                  <div className="circle-2-true num-42" />
                  <div className="circle-3-true num-43" />
                  <div className="circle-4-true num-44" />
                  <div className="circle-5 num-45" />
                  <div className="circle-4-false num-46" />
                  <div className="circle-3-false num-47" />
                  <div className="circle-2-false num-48" />
                </div>
                <p className="disagree">Disagree</p>
              </div>
            </div>
          </div>
        </div>
        <div className="submit-btn-wrapper">
          <a href="result.html"><button className="submit-btn">Submit</button></a>
        </div>
        <div className="footer">
          <div className="footer-text-wrapper justify-content-between">
            <p className="footer-text"><span className="bold-black">Always</span> = I always demonstrate this behavior</p>
            <p className="footer-text"><span className="bold-black">Usually</span> = I usually demonstrate this behavior</p>
            <p className="footer-text"><span className="bold-black">Sometimes</span> = I sometimes demonstrate this behavior</p>
            <p className="footer-text"><span className="bold-black">Never</span> = I never demonstrate this behavior</p>
            <p className="footer-text"><span className="bold-black">N/A</span> = Question is not applicable</p>
          </div>
          <div className="footer-sk">
            <p className="privacy">Privacy Policy</p>
            <p className="copyright">Copyright © 2022 SKConsulting. All rights reserved.</p>
          </div>
        </div>
      </div>

    );
};

export default Tracnghiem;