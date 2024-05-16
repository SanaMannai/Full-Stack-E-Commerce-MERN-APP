import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />

      <HorizontalCardProduct
        category={"Accessouire"}
        heading={"Top's accessouire"}
      />
      <HorizontalCardProduct
        category={"MR.WIPES"}
        heading={"Popular's mr.wipes"}
      />
      <VerticalCardProduct category={"Levre"} heading={"levre"} />
      <VerticalCardProduct category={"Ongles"} heading={"ongles"} />
      <VerticalCardProduct category={"Visage"} heading={"visage"} />
      <VerticalCardProduct category={"Yeux"} heading={"yeux"} />
      <VerticalCardProduct category={"Parfum-femme"} heading={"parfum-femme"} />
      <VerticalCardProduct category={"Parfum-homme"} heading={"parfum-homme"} />
      <VerticalCardProduct category={"Cheveux"} heading={"cheveux"} />
      <VerticalCardProduct
        category={"DR.C.TUNA-BABY"}
        heading={"DR.C.TUNA-BABY"}
      />
    </div>
  );
};

export default Home;
