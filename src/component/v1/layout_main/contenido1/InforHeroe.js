import React from "react";

export default function InforHeroe({
  datos,
  setShowAddCategory,
  count,
  setCount,
  count2,
  setCount2,
  setShowTypeLike,
  setShowTypeNoLike,
}) {
  function capturarValores() {
    return (
      setShowAddCategory(false), setCount(count + 1), setShowTypeLike(true)
    );
  }

  function capturarValores2() {
    return (
      setShowAddCategory(false), setCount2(count2 + 1), setShowTypeNoLike(true)
    );
  }

  return (
    <>
      <section className="tarjeta1 pt-4">
        <span>Dinos tu opinión sobre</span>
        <h1>{datos.name}?</h1>
        <p className="pt-3">{datos.description}</p>
        <a href="/">
          <img
            src="https://res.cloudinary.com/dtguzyae4/image/upload/v1658070507/social_q4vknt.png"
            className="me-1"
            alt=""
          />
          Mas información
        </a>
        <h5 className="pt-3">¿Cuál es tu voto?</h5>
        <div className="d-flex pt-3 barraLike">
          <button className="" onClick={() => capturarValores()}>
            <i className="ri-thumb-up-fill"></i>
          </button>
          <button className="" onClick={() => capturarValores2()}>
            <i className="ri-thumb-down-fill"></i>
          </button>
          {/* <DetalleVotoHeroe previousButton={previousButton} /> */}
        </div>
      </section>
    </>
  );
}
