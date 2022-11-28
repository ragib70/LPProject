import "../../styles.css";
import { useState } from "react";
import Modal1 from "../Modal1/modal1";
import Button from "react-bootstrap/Button";
import {
  depositAmountBorrower,
  depositAmountLender,
} from "../../actions/web3/bankiFiContractFunctions.js";

function Features() {
  const [modal1Show, setModal1Show] = useState(false);
  const [modal2Show, setModal2Show] = useState(false);

  return (
    <section id="features">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 col-content feature-element">
          <h3>
            <i
              style={{ color: "#ef8172" }}
              className="fa-solid fa-circle-check"
            ></i>
            <br />
            <Button
              variant="light"
              onClick={() => setModal1Show(true)}
              className="bgColorWhite"
            >
              <h3>Borrower</h3>
            </Button>
          </h3>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 col-content feature-element">
          <h3>
            <i
              style={{ color: "#ef8172" }}
              className="fa-solid fa-bullseye"
            ></i>
            <br />
            <Button
              variant="light"
              onClick={() => setModal2Show(true)}
              className="bgColorWhite"
            >
              <h3>Lender</h3>
            </Button>
          </h3>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 col-content feature-element">
          <h3>
            <i
              style={{ color: "#ef8172" }}
              className="fa-solid fa-circle-check"
            ></i>
            <br />
            Modal3
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-content feature-element">
          <h3>
            <i
              style={{ color: "#ef8172" }}
              className="fa-solid fa-circle-check"
            ></i>
            <br />
            <Button
              variant="light"
              onClick={() => setModal1Show(true)}
              className="bgColorWhite"
            >
              <h3>Borrower</h3>
            </Button>
          </h3>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-content feature-element">
          <h3>
            <i
              style={{ color: "#ef8172" }}
              className="fa-solid fa-bullseye"
            ></i>
            <br />
            Modal2
          </h3>
        </div>
      </div>

      <Modal1
        show={modal1Show}
        onHide={() => setModal1Show(false)}
        modalheader="Borrower Deposit"
        function={async (tokenAddress, tokenAmount) => {
          await depositAmountBorrower(tokenAddress, tokenAmount);
        }}
      />
      <Modal1
        show={modal2Show}
        onHide={() => setModal2Show(false)}
        modalheader="Lender Deposit"
        function={async (tokenAddress, tokenAmount) => {
          await depositAmountLender(tokenAddress, tokenAmount);
        }}
      />
    </section>
  );
}

export default Features;
