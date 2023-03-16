import React from "react";
import { fetchProcess } from "../../utils/fetchProcess";
import { WorkProcessType } from "../../utils/type";

type Props = {
  workProcess: WorkProcessType[]
};

export default function WorkProcess({ workProcess }: Props) {
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
              <h3 className="process-box_title">{workProcess[0]?.title_1}</h3>
              <p className="process-box_text">
              {workProcess[0]?.description_1}
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
              <h3 className="process-box_title">{workProcess[0]?.title_2}</h3>
              <p className="process-box_text">
              {workProcess[0]?.description_2}
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
              <h3 className="process-box_title">{workProcess[0]?.title_3}</h3>
              <p className="process-box_text">
              {workProcess[0]?.description_3}
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
              <h3 className="process-box_title">{workProcess[0]?.title_4}</h3>
              <p className="process-box_text">
              {workProcess[0]?.description_4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async () => {
  const workProcess: WorkProcessType[] = await fetchProcess();

  return {
    props: {
      workProcess,
    },
  };
};

