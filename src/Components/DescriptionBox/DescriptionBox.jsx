import React from "react";
import "./DescriptionBox.css";
export default function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An eCommerce website is a digital platform that facilitates online
          transactions between businesses and consumers, offering a convenient
          and accessible shopping experience. It serves as a virtual storefront
          where businesses can showcase their products or services to a global
          audience. Key features typically include product listings, detailed
          product pages, a shopping cart, and a streamlined checkout process,
          all designed to provide a seamless and enjoyable user experience.
        </p>
        <p>
          Ecommerce website integrates secure payment gateways to ensure safe
          transactions, offering multiple payment options like credit cards,
          debit cards, and online payment systems. and view their purchase
          history, enhancing the convenience and personalization of the shopping
          experience.
        </p>
      </div>
    </div>
  );
}
