import React from "react";
import {
  ProductsContainer,
  ProductHeaderWrapper,
  ProductButton,
  ProductHeader,
  ProductWrapper,
  ProductWrapperMobile,
  ProductCard,
  ProductTitle,
} from "./ProductsElements";
import { productData, productDataMobile } from "../../data/ProductData";

const Products = () => {
  return (
    <ProductsContainer>
      <ProductHeaderWrapper>
        <ProductHeader>Our creations</ProductHeader>
        <ProductButton>See all</ProductButton>
      </ProductHeaderWrapper>

      {/* Map data for Desktop */}
      <ProductWrapper>
        {productData.map((product, index) => {
          return (
            <ProductCard
              key={index}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1) 0, rgba(0,0,0,0.55) 80%), url(${product.img})`,
              }}
            >
              <ProductTitle>{product.name}</ProductTitle>
            </ProductCard>
          );
        })}
      </ProductWrapper>

      {/* Map data for Mobile */}
      <ProductWrapperMobile>
        {productDataMobile.map((productMobile, index) => {
          return (
            <ProductCard
              key={index}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1) 0, rgba(0,0,0,0.55) 80%), url(${productMobile.img})`,
              }}
            >
              <ProductTitle>{productMobile.name}</ProductTitle>
            </ProductCard>
          );
        })}
      </ProductWrapperMobile>
    </ProductsContainer>
  );
};

export default Products;
