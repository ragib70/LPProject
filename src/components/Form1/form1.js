import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import getInputAndPrint from "../FunctionCalls/DummyFunctionCall";
import deposit from "../../actions/web3/deposits";
import getTokenAllowance from "../../actions/web3/getTokenAllowance";
import getBorrowerList from "../../actions/web3/getBorrowerList";

function Form1() {
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");

  let formInput = {
    email: formEmail,
    password: formPassword,
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter email"
          onChange={(e) => {
            setFormEmail(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setFormPassword(e.target.value);
          }}
        />
      </Form.Group>

      <Button
        variant="primary"
        className="carousel-control-button"
        onClick={async () => {
          let a = await getBorrowerList(formEmail);
          console.log(a);
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default Form1;
