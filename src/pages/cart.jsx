import React from "react";
import SEO from "@/components/seo";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import Wrapper from "@/layout/wrapper";
import CartArea from "@/components/cart-wishlist/cart-area";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import { seoDescriptions } from "@/data/seo-descriptions";

const CartPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Cart" description={seoDescriptions.cart} />
      <HeaderThree />
      <div className="tp-cart-page-neo">
        <CommonBreadcrumb title="Shopping Cart" subtitle="Shopping Cart" />
        <CartArea />
      </div>
      <FooterTwo />
    </Wrapper>
  );
};

export default CartPage;
