"use client";

import React from "react";
import Link from "next/link";
import { siteInfo } from "@/data/contact-info";

const JewelryBanner = () => {
  return (
    <section className="easy-shoping-hero" aria-label="Hero">
      {/* Grid + Left & Right Gradient Glow */}
      <div className="easy-shoping-hero__bg" aria-hidden="true" />

      <div className="container easy-shoping-hero__container">
        <div className="easy-shoping-hero__inner">
          <div className="easy-shoping-hero__content">
            <p className="easy-shoping-hero__domain">{siteInfo.domain}</p>
            <h1 className="easy-shoping-hero__title">{siteInfo.companyName}</h1>
            <p className="easy-shoping-hero__tagline">{siteInfo.tagline}</p>
            <div className="easy-shoping-hero__actions">
              <Link href="/shop" className="easy-shoping-hero__btn easy-shoping-hero__btn--primary">
                Shop Now
              </Link>
              <Link href="/shop" className="easy-shoping-hero__btn easy-shoping-hero__btn--secondary">
                Browse Categories
              </Link>
            </div>
            <ul className="easy-shoping-hero__badges" role="list">
              <li className="easy-shoping-hero__badge">
                <span className="easy-shoping-hero__badge-dot" aria-hidden="true" />
                Free delivery over ₹499
              </li>
              <li className="easy-shoping-hero__badge">
                <span className="easy-shoping-hero__badge-dot" aria-hidden="true" />
                7-day easy returns
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelryBanner;
