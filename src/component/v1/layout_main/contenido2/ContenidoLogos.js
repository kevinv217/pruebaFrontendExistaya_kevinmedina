import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import _ from "lodash";

export default function ContenidoLogos() {
  return (
    <div id="contenidologo" className="col-md-10 m-auto py-5">
      <div
        className="alert alert-dismissible fade show d-flex m-0"
        role="alert"
      >
        <p>
          Lorem Ipsum. Dolor <br /> <strong>IP lorem ip</strong>
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta labore
          quas fugit veniam necessitatibus voluptatum, harum doloremque vitae
          illum in.
        </p>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
