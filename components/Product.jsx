import React from "react";
import Headline from "./Headline";
import Card from "./Card";

const Product = () => {
  return (
    <section id="product" className="max-w-[1640px] mx-auto p-4 py-16">
      <Headline title="Products" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-16">
        <Card image="/assets/furniture1.avif" title="furniture 1" />
        <Card image="/assets/furniture2.avif" title="furniture 2" />
        <Card image="/assets/furniture3.avif" title="furniture 3" />
        <Card image="/assets/furniture4.avif" title="furniture 4" />
        <Card image="/assets/furniture5.avif" title="furniture 5" />
        <Card image="/assets/furniture6.avif" title="furniture 6" />
      </div>
    </section>
  );
};

export default Product;
