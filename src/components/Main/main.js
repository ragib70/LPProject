import "../../styles.css";
import { useState } from "react";
import * as Func from "../FunctionCalls/FunctionCall";

function Main() {
  const [ethAddr, setEthAddr] = useState("Wallet Address");

  return (
    <section id="title">
      <div className="container-fluid">
        {/* <!-- Nav Bar --> */}
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="">
            LP Project
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Get Started
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => {
                    Func.login((Addr) => setEthAddr(Addr));
                  }}
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => {
                    Func.logOut(() => setEthAddr("Wallet Address"));
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Title --> */}
        <div className="row">
          <div className="col-lg-6">
            <h1 className="heading1">New way to interact with Liquidity</h1>
            <button
              className="btn btn-dark btn-lg download-button"
              type="button"
            >
              {ethAddr}
            </button>
          </div>
          <div className="col-lg-6">
            <img
              className="image-dog"
              src="/images/TitleImage.jpg"
              alt="trading-mockup"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
