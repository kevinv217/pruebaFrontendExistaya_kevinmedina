import React from "react";

export default function Footer() {
  return (
    <>
      <div className="col-md-10 lp-footer p-0 m-auto">
        <div className="row justify-content-between m-0">
          <div className="col-md-8 col-sm-12 d-flex flex-column pt-3">
            <div className="d-flex iconsocial">
              <span className="me-4">Terminos y condiciones</span>
              <span className="me-4">Politica de tratamiento de datos</span>
              <span className="me-4">Contactenos</span>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 lp-footerlogos d-flex pt-3">
            <span className="me-3">Siguenos en:</span>
            <a href="https://www.facebook.com">
              <i class="ri-facebook-box-fill"></i>
            </a>
            <a href="https://www.twitter.com">
              <i class="ri-twitter-fill"></i>
            </a>
          </div>
        </div>
        <div className="col-md-8 copyright m-auto mt-5 py-3">
          <p className="text-center">© 2022 Kevin medina </p>
        </div>
      </div>
    </>
  );
}
