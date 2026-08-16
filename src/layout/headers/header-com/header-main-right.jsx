import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// internal
import useCartInfo from "@/hooks/use-cart-info";
import { CartTwo, Menu, WishlistTwo } from "@/svg";
import { openCartMini } from "@/redux/features/cartSlice";

const HeaderMainRight = ({ setIsCanvasOpen }) => {
  const { quantity } = useCartInfo();
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <div className="tp-header-main-right d-flex align-items-center justify-content-end">
      <div className="tp-header-action d-flex align-items-center ml-50">
        <div className="tp-header-action-item">
          <Link href="/wishlist" className="tp-header-action-btn">
            <WishlistTwo />
            {wishlist?.length > 0 && (
              <span className="tp-header-action-badge">{wishlist.length}</span>
            )}
          </Link>
        </div>
        <div className="tp-header-action-item">
          <button
            onClick={() => dispatch(openCartMini())}
            type="button"
            className="tp-header-action-btn cartmini-open-btn"
          >
            <CartTwo />
            <span className="tp-header-action-badge">{quantity}</span>
          </button>
        </div>
        <div className="tp-header-action-item d-lg-none">
          <button
            onClick={() => setIsCanvasOpen(true)}
            type="button"
            className="tp-header-action-btn tp-offcanvas-open-btn"
          >
            <Menu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMainRight;
