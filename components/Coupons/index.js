import React from "react";
import Link from "next/link";

const Coupons = ({ text }) => (
  <div id="wrapper3">
    <div id="portfolio" className="container">
      <div className="title" style={{ marginBottom: "1rem" }}>
        <h2>Cupom</h2>
      </div>
      <div className="">
        <div className="box">
          <p className="text-2xl">{text}</p>
          <Link href="/pesquisa">
            <a className="button button-small">Preencher Pesquisa</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Coupons;
