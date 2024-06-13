import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/popular/Popular";
import Offer from "../Components/offers/Offers";
import NewCollection from "../Components/New Collections/NewCollection";
import NewsLetter from "../Components/Newsletter/NewsLetter";

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />

      <NewsLetter />
    </div>
  );
}

export default Shop;
