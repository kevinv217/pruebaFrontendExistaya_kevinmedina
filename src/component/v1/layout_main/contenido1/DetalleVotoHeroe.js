import React, { useState } from "react";

export default function DetalleVotoHeroe({
  datos,
  setShowAddCategory,
  showTypeLike,
  showTypeNoLike,
  setShowTypeLike,
  setShowTypeNoLike,
}) {
  const datoIcon = {
    nameIcon: "ri-thumb-up-fill",
    colorFondo: "colorRellenolike",
  };

  const datoIcon2 = {
    nameIcon: "ri-thumb-down-fill",
    colorFondo: "colorRellenoNoLike",
  };

  const changeLikeColor = showTypeLike
    ? datoIcon.colorFondo
    : datoIcon2.colorFondo;

  const cambiarLike = showTypeLike ? datoIcon.nameIcon : datoIcon2.nameIcon;

  // console.log(showTypeLike, showTypeNoLike);

  function DevolverValores() {
    return (
      setShowAddCategory(true), setShowTypeLike(false), setShowTypeNoLike(false)
    );
  }

  return (
    <>
      <section className="tarjeta2 p-3">
        <h2 className="">Marvel - {datos.name}</h2>
        <div className="d-flex">
          <i className={`${changeLikeColor} ${cambiarLike}`}></i>
          <h3>
            Tu voto <br /> ha sido registrado
          </h3>
        </div>
        <p className="pt-3 ">{datos.description}</p>
        {/* {previousButton(`<< Volver a votar`)} */}
        <button
          className="boton1 px-4 py-2"
          onClick={() => DevolverValores()}
        >{`<< Volver a votar`}</button>
      </section>
    </>
  );
}
