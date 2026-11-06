import React from "react";
import {
  FiLock,
  FiUsers,
  FiArrowLeft,
  FiClock
} from "react-icons/fi";
import "../styles/CommonSoon.css"

const EmployeeLogin = () => {
  return (
    <section className="employee-page">

      <div className="employee-glow glow-one"></div>
      <div className="employee-glow glow-two"></div>

      <div className="employee-content">

        {/* Logo
        <div className="employee-brand">
          <div className="employee-logo">
            K
          </div>

          <div>
            <h2>KODEWAR</h2>
            <span>TECHNOLOGIES</span>
          </div>
        </div> */}

        {/* Login Icon */}
        <div className="employee-icon">
          <FiUsers />
          <span className="icon-lock">
            <FiLock />
          </span>
        </div>

        {/* Main Content */}
        <div className="employee-label">
          <span></span>
          EMPLOYEE PORTAL
          <span></span>
        </div>

        <h1>
          COMING <span>SOON</span>
        </h1>

        <p className="employee-description">
          Something exciting is on its way.
          Our employee portal is currently under development.
          We are building a smarter workspace for the KODEWAR team.
        </p>

        {/* Status */}
        <div className="employee-status">
          <FiClock />
          <span>Portal Under Development</span>
        </div>

        {/* Button */}
        <a href="/" className="employee-home-btn">
          <FiArrowLeft />
          Back to Home
        </a>

        <div className="employee-footer">
          © 2026 KODEWAR TECHNOLOGIES. All Rights Reserved.
        </div>

      </div>
    </section>
  );
};

export default EmployeeLogin;