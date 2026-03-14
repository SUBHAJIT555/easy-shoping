import React from 'react';
import { Scrollbar, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { siteInfo } from '@/data/contact-info';
import ProductItem from './product-item';
import ErrorMsg from '@/components/common/error-msg';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import { HomeTwoBestSellPrdPrdLoader } from '@/components/loader';

const slider_setting = {
  slidesPerView: 4,
  spaceBetween: 24,
  pagination: {
    el: '.easy-shoping-best-dot',
    clickable: true,
  },
  scrollbar: {
    el: '.easy-shoping-best-scrollbar',
    draggable: true,
    dragClass: 'easy-shoping-best-scrollbar-drag',
    snapOnRelease: true,
  },
  breakpoints: {
    '1200': { slidesPerView: 4 },
    '992': { slidesPerView: 4 },
    '768': { slidesPerView: 2 },
    '576': { slidesPerView: 2 },
    '0': { slidesPerView: 1 },
  },
};

const BestSellerPrd = () => {
  const { data: products, isError, isLoading } =
    useGetProductTypeQuery({ type: 'jewelry', query: `topSeller=true` });
  let content = null;

  if (isLoading) {
    content = (
      <div className="row">
        <HomeTwoBestSellPrdPrdLoader loading={isLoading} />
      </div>
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data.slice(0, 8);
    content = (
      <Swiper {...slider_setting} modules={[Scrollbar, Pagination]} className="easy-shoping-best-slider">
        {product_items.map((item) => (
          <SwiperSlide key={item._id}>
            <ProductItem product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <section className="easy-shoping-best-seller">
      <div className="container">
        <div className="easy-shoping-best-seller__header mb-50">
          <span className="easy-shoping-best-seller__label">{siteInfo.domain}</span>
          <h2 className="easy-shoping-best-seller__title">Top Sellers on {siteInfo.companyName}</h2>
        </div>
        <div className="easy-shoping-best-seller__slider-wrap">
          {content}
          <p className="easy-shoping-best-seller__hint">Drag or swipe to see more</p>
          <div className="easy-shoping-best-scrollbar" />
          <div className="easy-shoping-best-dot" />
        </div>
      </div>
    </section>
  );
};

export default BestSellerPrd;
