import React from "react";

const Footer = (props) => {
  return (
    <footer className="bg-black text-white containerfluid  p-4">
      <div className="row mx-5 justify-content-center align-items-center text-center" >
        <div className="col text-start">
          <a href="/" className="logo text-decoration-none text-white">/TAM.</a>
        </div>
        <div className="col">
          <i className="fab fa-instagram"></i>
          <p className="mt-1 fs-6">Tamara Veron Rios - 2023</p>
        </div>
        <div className="col text-end">
          <p>tam.veron.rios@gmail.com</p>
          <p>+54 3434 987659</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer