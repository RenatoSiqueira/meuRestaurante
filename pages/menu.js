import React, { useState, useEffect } from "react";
import useSWR from "swr";

import PageTitle from "../components/PageTitle";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Index = () => {
  const { data, error } = useSWR("/api/get-menu", fetcher);

  return (
    <>
      <PageTitle title="Menu" />
      <div id="wrapper3">
        <div class="container" style={{ textAlign: "center" }}>
          <div className="title">
            <h2>Pratos</h2>
            <span class="byline">Conheça Nossos Pratos</span>
            <p style={{ marginTop: 5 }}>
              <select name="select" style={{ fontSize: 20 }}>
                {data &&
                  data.pratos.map((each) => (
                    <option value={each}>{each}</option>
                  ))}
              </select>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
