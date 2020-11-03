import React, { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";

import PageTitle from "../components/PageTitle";
import { list } from "postcss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Index = () => {
  const { data, error } = useSWR("/api/get-menu", fetcher);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    if (data?.length > 0) {
      const getItems = async () => {
        const getUrlInsta = await data.map(async (each) => {
          let newItem = { ...each };
          if (each.instaFoto) {
            const imgUrl = await axios.get(each.instaFoto + "?__a=1");
            newItem = {
              ...each,
              imgUrl: imgUrl.data.graphql.shortcode_media.display_url,
            };
          }
          return newItem;
        });
        const result = await Promise.all(getUrlInsta);
        setListItems(result);
      };
      getItems();
    }
  }, [data]);

  return (
    <>
      <PageTitle title="Menu" />
      <div id="wrapper3">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="title">
            <h2>Pratos</h2>
            <span className="byline">Conheça Nossos Pratos</span>
            <section className="text-gray-700 body-font">
              <div className="container px-5 py-6 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {listItems.length > 0 &&
                    listItems.map((each) => (
                      <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                          <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                            src={each.imgUrl}
                            alt="blog"
                          />
                          <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                              {each.prato}
                            </h2>
                            <h1 className="title-font text-lg font-medium text-gray-900">
                              {each.preco} (Desconto de {each.valorDesconto})
                            </h1>
                            <h2 className="title-font font-medium text-gray-900 font-bold mb-3">
                              {each.precoFinal}
                            </h2>
                            <p className="leading-relaxed mb-3">
                              {each?.desc ? each.desc : "Sem Descrição"}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>
            {/* <p style={{ marginTop: 5 }}>
              <select name="select" style={{ fontSize: 20 }}>
                {data &&
                  data.map((each) => (
                    <option value={each}>{each}</option>
                  ))}
              </select>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
