import "./features.css";

function Features() {
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
            Modal1
          </h3>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 col-content feature-element">
          <h3>
            <i
              style={{ color: "#ef8172" }}
              className="fa-solid fa-bullseye"
            ></i>
            <br />
            Modal2
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
    </section>
  );
}

export default Features;
