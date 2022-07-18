import React, { useState } from "react";

import InforHeroe from "./InforHeroe";
import DetalleVotoHeroe from "./DetalleVotoHeroe";

export default function About({ datosHeroes }) {
  const [showAddCategory, setShowAddCategory] = useState(true);
  const [showTypeLike, setShowTypeLike] = useState(false);
  const [showTypeNoLike, setShowTypeNoLike] = useState(false);
  const [count, setCount] = useState(88);
  const [count2, setCount2] = useState(12);

  const heroeEscogido = datosHeroes[4];

  // console.log(count, count2, showTypeLike);

  const escogerdato = showAddCategory ? (
    <InforHeroe
      datos={heroeEscogido}
      showAddCategory={showAddCategory}
      setShowAddCategory={setShowAddCategory}
      count={count}
      setCount={setCount}
      count2={count2}
      setCount2={setCount2}
      setShowTypeLike={setShowTypeLike}
      setShowTypeNoLike={setShowTypeNoLike}
    />
  ) : (
    <DetalleVotoHeroe
      datos={heroeEscogido}
      setShowAddCategory={setShowAddCategory}
      showTypeLike={showTypeLike}
      showTypeNoLike={showTypeNoLike}
      setShowTypeLike={setShowTypeLike}
      setShowTypeNoLike={setShowTypeNoLike}
    />
  );

  return (
    <div id="lp-inicio" className="col-md-12 col-sm-12 p-0">
      <div className="row m-0">
        <div className="col-md-12 text-center mt-5 pt-5 p-0 m-auto tarjetaFondo">
          <div className="m-auto">{escogerdato}</div>
          <div className="d-flex cantidadLike">
            <section className="" style={{ width: `${count}%` }}>
              <span>
                <i className="ri-thumb-up-fill"></i> {count}%
              </span>
            </section>
            <section className="" style={{ width: `${count2}%` }}>
              <span>
                {count2}% <i className="ri-thumb-down-fill"></i>
              </span>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
