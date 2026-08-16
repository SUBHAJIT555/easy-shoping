import { useState } from 'react';
import Link from 'next/link';
// internal
import { CloseTwo } from '@/svg';
import TextLogo from '@/components/common/text-logo';
import MobileCategory from '@/layout/headers/header-com/mobile-category';
import MobileMenus from './mobile-menus';

const OffCanvas = ({ isOffCanvasOpen, setIsCanvasOpen, categoryType = "electronics" }) => {
  const [isCategoryActive, setIsCategoryActive] = useState(false);

  return (
    <>
      <div className={`offcanvas__area offcanvas__radius ${isOffCanvasOpen ? "offcanvas-opened" : ""}`}>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button onClick={() => setIsCanvasOpen(false)} className="offcanvas__close-btn offcanvas-close-btn">
              <CloseTwo />
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <TextLogo asLink href="/" variant="brand" />
              </div>
            </div>
            <div className="offcanvas__category pb-40">
              <button onClick={() => setIsCategoryActive(!isCategoryActive)} className="tp-offcanvas-category-toggle">
                <i className="fa-solid fa-bars"></i>
                All Categories
              </button>
              <div className="tp-category-mobile-menu">
                <nav className={`tp-category-menu-content ${isCategoryActive ? "active" : ""}`}>
                  <MobileCategory categoryType={categoryType} isCategoryActive={isCategoryActive} />
                </nav>
              </div>
            </div>
            <div className="tp-main-menu-mobile fix d-lg-none mb-40">
              <MobileMenus />
            </div>
            <div className="offcanvas__btn">
              <Link href="/contact" className="tp-btn-2 tp-btn-border-2">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => setIsCanvasOpen(false)} className={`body-overlay ${isOffCanvasOpen ? 'opened' : ''}`}></div>
    </>
  );
};

export default OffCanvas;
