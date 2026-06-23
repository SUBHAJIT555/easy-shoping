/**
 * Page-specific meta descriptions for SEO.
 * Brand values come from contact-info.js (single source of truth).
 */
import contactInfo, { siteInfo } from "./contact-info";

const brand = siteInfo.companyName;

export const seoDescriptions = {
  home: `${brand} - ${siteInfo.tagline}`,
  shop: `Shop at ${brand} (${siteInfo.domain}). Mobile accessories, smart gadgets, electronics, fashion, books, stationery and more.`,
  about: `About ${brand}. ${siteInfo.tagline}`,
  contact: `Contact ${brand} at ${contactInfo.email}. Orders, support and enquiries for ${siteInfo.domain}.`,
  cart: `Your shopping cart at ${brand}. Review and checkout.`,
  checkout: `Secure checkout at ${brand}. Complete your order.`,
  wishlist: `Your wishlist at ${brand}. Save items for later.`,
  faq: `Frequently asked questions at ${brand}.`,
  coupon: `Grab the best offers and coupons at ${brand}.`,
  "privacy-policy": `${brand} Privacy Policy. How we collect, use and protect your information.`,
  "cookie-policy": `${brand} Cookie Policy. How we use cookies on our website.`,
  "terms-and-conditions": `${brand} Terms and Conditions. Terms of use for our website and services.`,
  "return-policy": `${brand} Return and Refund Policy. How to return or exchange items.`,
  "mail-success": `Thank you for your order at ${brand}. We will confirm details by email soon.`,
  "404": `Page not found. Return to ${brand} home.`,
  "shop-category": `Browse by category at ${brand}. Mobile accessories, gadgets, fashion, books and more.`,
};

export default seoDescriptions;
