import React from "react";

const Description = ({ title, message }) => (
  <div id="wrapper2">
    <div id="welcome" className="container">
      {!title && (
        <div className="title">
          <h2>Aguarde...</h2>
        </div>
      )}
      {message && (
        <>
          <div className="title" style={{ marginBottom: "1rem" }}>
            <h2>{title}</h2>
          </div>
          <p className="text-2xl">{message}</p>
        </>
      )}
    </div>
  </div>
);

export default Description;
