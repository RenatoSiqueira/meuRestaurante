import React, { useState, useEffect } from "react";
import useSWR from "swr";

import PageTitle from "../components/PageTitle";
import Description from "../components/Description";
import Coupons from "../components/Coupons";
import SocialMedia from "../components/SocialMedia";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Index = () => {
  const [info, setInfo] = useState({});
  const { data, error } = useSWR("/api/get-promo", fetcher);

  const getData = async () => {
    try {
      const response = await fetch("/api/get-info");
      const data = await response.json();
      setInfo(data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <PageTitle title="Seja bem Vindo" />
      <Description {...info} />
      {!error && data && data.showCoupon && <Coupons text={data.message} />}
      <SocialMedia {...info} />
    </>
  );
};

export default Index;
