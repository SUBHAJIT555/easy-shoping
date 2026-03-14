import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';
import { useGetPopularProductByTypeQuery } from '@/redux/features/productApi';
import ProductSliderItem from './product-slider-item';
import ErrorMsg from '@/components/common/error-msg';
import { HomeTwoPopularPrdLoader } from '@/components/loader';
import { siteInfo } from '@/data/contact-info';

const slider_setting = {
  slidesPerView: 5,
  spaceBetween: 24,
  pagination: {
    el: ".easy-shoping-popular-dot",
    clickable: true,
  },
  scrollbar: {
    el: '.easy-shoping-popular-scrollbar',
    draggable: true,
    dragClass: 'easy-shoping-popular-scrollbar-drag',
    snapOnRelease: true,
  },
  breakpoints: {
    '1400': { slidesPerView: 5 },
    '1200': { slidesPerView: 4 },
    '992': { slidesPerView: 3 },
    '768': { slidesPerView: 2 },
    '576': { slidesPerView: 2 },
    '0': { slidesPerView: 1 },
  },
};

const PopularProducts = () => {
  const { data: products, isError, isLoading } =
    useGetPopularProductByTypeQuery("jewelry");
  let content = null;

  if (isLoading) {
    content = <HomeTwoPopularPrdLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data;
    content = (
      <Swiper {...slider_setting} modules={[Scrollbar, Pagination]} className="easy-shoping-popular-slider">
        {product_items.map((item) => (
          <SwiperSlide key={item._id}>
            <ProductSliderItem product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <section className="easy-shoping-popular-products">
      <div className="container">
        <div className="easy-shoping-popular-products__header mb-50">
          <span className="easy-shoping-popular-products__label">{siteInfo.domain}</span>
          <h2 className="easy-shoping-popular-products__title">Popular on {siteInfo.companyName}</h2>
        </div>
        <div className="easy-shoping-popular-products__slider-wrap">
          {content}
          <div className="easy-shoping-popular-scrollbar" />
          <div className="easy-shoping-popular-dot" />
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
