import React from "react";
// internal
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import CheckoutArea from "@/components/checkout/checkout-area";

const CheckoutPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Checkout" description={seoDescriptions.checkout} />
      <HeaderThree />
      <div className="tp-checkout-page-neo">
        <CommonBreadcrumb title="Checkout" subtitle="Checkout" bg_clr={true} />
        <CheckoutArea />
      </div>
      <FooterTwo />
    </Wrapper>
  );
};

export default CheckoutPage;
