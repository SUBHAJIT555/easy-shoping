import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteInfo } from "@/data/contact-info";

const HOME_PAGE_IMAGES = "/assets/images/HomePageImages";
const ABOUT_IMAGE = `${HOME_PAGE_IMAGES}/About-01.webp`;

const JewelryAbout = () => {
  return (
    <section className="easy-shoping-about">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-5">
            <div className="easy-shoping-about__img-wrap">
              <Image
                src={ABOUT_IMAGE}
                alt={`${siteInfo.companyName} - One-stop shop`}
                width={600}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="easy-shoping-about__content">
              <span className="easy-shoping-about__label">{siteInfo.domain}</span>
              <h2 className="easy-shoping-about__title">
                Your one-stop shop for tech, fashion & more
              </h2>
              <p className="easy-shoping-about__text">
                At <strong>{siteInfo.companyName}</strong> we bring you a wide range of
                products in one place—from mobile accessories and smart gadgets to
                electronics, books, stationery, and fashion for the whole family.
                Everything you need, delivered fast.
              </p>
              <Link href="/contact" className="easy-shoping-about__btn">
                Contact us
                <span className="easy-shoping-about__btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelryAbout;
