// Produced by Duong Trung Nguyen

"use client"

import "./styles.scss";

const FailedStatus = ({ title } : { title: string }) => {
  return (
    <div className="failed-status-container">
      <div className="circle-border"/>
      <div className="circle">
        <div className="error"/>
      </div>
      <h2 className="title">{ title }</h2>
    </div>
  );
};
export default FailedStatus;