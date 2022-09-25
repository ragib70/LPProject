import "../../styles.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form1 from "../../Form1/form1";

function Modal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="card-body-title"
        >
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-body-title">
        <h4 className="card-body-title">Centered Modal</h4>
        <Form1 />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="carousel-control-button">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modal1;
