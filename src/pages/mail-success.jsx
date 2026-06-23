import React from "react";
import Link from "next/link";
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import { siteInfo, contactInfo } from "@/data/contact-info";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";

const MailSuccessPage = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Order Received"
        description={seoDescriptions["mail-success"]}
      />
      <HeaderThree />
      <CommonBreadcrumb
        title="Order Received"
        subtitle="Thank you"
        center={true}
      />
      <section
        className="tp-checkout-area pb-120"
        style={{ backgroundColor: "#EFF1F5" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="tp-checkout-place white-bg p-5">
                <h2 className="mb-3">Thank you for shopping with {siteInfo.companyName}</h2>
                <p className="mb-4">
                  We have received your order and will contact you at the email
                  address you provided to confirm details. For questions, email us
                  at {contactInfo.email}.
                </p>
                <Link href="/shop" className="tp-checkout-btn">
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </Wrapper>
  );
};

export default MailSuccessPage;
