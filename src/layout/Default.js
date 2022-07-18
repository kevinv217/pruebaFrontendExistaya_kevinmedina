import React from "react";

import NavSuperior from "../component/v1/layout_main/nav_superior/NavSuperior";
import About from "../component/v1/layout_main/contenido1/About";
import ContenidoLogos from "../component/v1/layout_main/contenido2/ContenidoLogos";
import InforCaracterisiticas from "../component/v1/layout_main/contenido4/InforCaracterisiticas";
import Footer from "../component/v1/layout_main/footer/Footer";
import datosHeroes from "../data/datoHeroes";

export default function Default() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row position-relative">
          <NavSuperior />
          <div className="col-md-12">
            <div className="row">
              <About datosHeroes={datosHeroes} />
              <ContenidoLogos />
              <InforCaracterisiticas datos={datosHeroes} />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
