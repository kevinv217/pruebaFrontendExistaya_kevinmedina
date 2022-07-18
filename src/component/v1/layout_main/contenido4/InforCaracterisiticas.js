import React from "react";

import _ from "lodash";

export default function InforCaracteristicas({ datos }) {
  return (
    <div
      id="lp-inforCaracteristicas"
      className="col-md-10 col-sm-11 m-auto py-5  "
    >
      <div className="row justify-content-between text-center">
        <div className="col-md-12 pb-2">
          <h4>Super Heroes anteriores</h4>
        </div>
        <ul className="d-flex">
          {_.map(datos, (dato) => {
            const changeLike =
              dato.icon === "ri-thumb-up-fill"
                ? "colorRellenolike"
                : "colorRellenoNoLike";

            return (
              <>
                <li
                  className="lp-contenido py-3 p-0 mx-4 my-3 d-flex flex-column"
                  style={{ backgroundImage: `url(${dato.img})` }}
                >
                  <div className="tarjetaInformation">
                    <h4 className="mb-1 p-0">
                      <i className={`${dato.icon} ${changeLike}`}></i>{" "}
                      {dato.name}
                    </h4>
                    <p className="py-0">{dato.description}</p>
                    <div className="d-flex justify-content-between contenidoDetalle pb-4">
                      <button className="px-5 boton1">Ver detalle</button>
                      <span>
                        {dato.numMonths} <br /> {dato.descriptionTime}
                      </span>
                    </div>
                    <div className="d-flex">
                      <span>
                        <i className="ri-thumb-up-fill"></i> 64%
                      </span>
                      <span>
                        12% <i className="ri-thumb-down-fill"></i>
                      </span>
                    </div>
                  </div>
                </li>
              </>
            );
          }).slice(0, 4)}
        </ul>
      </div>
    </div>
  );
}
