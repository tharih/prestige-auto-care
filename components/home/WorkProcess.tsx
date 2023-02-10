import React from "react";

type Props = {};

const WorkProcess = (props: Props) => {
  return (
    <section className="space" style={{ backgroundColor: "white" }}>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">OUR WORK PROCESS</span>
          <h2 className="sec-title">How We Works</h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 process-box-wrap">
            <div className="process-box">
              <div className="process-box_icon">
                <img
                  src="assets/img/icon/process_1_1.svg"
                  alt="service image"
                />
              </div>
              <h3 className="process-box_title">Identify Issues</h3>
              <p className="process-box_text">
                Extensible for web iterate process before meta services impact
                with olisticly enable client.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 process-box-wrap">
            <div className="process-box">
              <div className="process-box_icon">
                <img
                  src="assets/img/icon/process_1_2.svg"
                  alt="service image"
                />
              </div>
              <h3 className="process-box_title">Prepare Solution</h3>
              <p className="process-box_text">
                Vulnerable for web iterate process before meta services impact
                with olisticly enable geting.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 process-box-wrap">
            <div className="process-box">
              <div className="process-box_icon">
                <img
                  src="assets/img/icon/process_1_3.svg"
                  alt="service image"
                />
              </div>
              <h3 className="process-box_title">Working On This</h3>
              <p className="process-box_text">
                Of setting for web iterate process before meta services impact
                with olisticly enable power.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 process-box-wrap">
            <div className="process-box">
              <div className="process-box_icon">
                <img
                  src="assets/img/icon/process_1_4.svg"
                  alt="service image"
                />
              </div>
              <h3 className="process-box_title">Deliver On Hand</h3>
              <p className="process-box_text">
                Getting on for web iterate process before meta services impact
                with olisticly enable silent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
