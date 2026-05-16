"use client";

import React from "react";
import Link from "next/link";
import { siteInfo } from "@/data/contact-info";

const HERO_BG =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2400&auto=format&fit=crop";

const JewelryBanner = () => {
  return (
    <section
      className="relative! z-0! flex! h-screen! w-full! flex-col! justify-end! overflow-hidden! bg-zinc-100! bg-cover! bg-center! bg-no-repeat!"
      style={{ backgroundImage: `url("${HERO_BG}")` }}
      aria-label="Hero"
    >
      <div
        className="pointer-events-none! absolute! inset-0! bg-linear-to-b! from-transparent! from-30%! via-white/70! via-60%! to-white! to-90%!"
        aria-hidden="true"
      />

      <div className="relative! z-10! mx-auto!  mb-10! w-full!  px-6! pb-14! pt-32! sm:px-30! sm:pb-16! md:mb-20! lg:pb-10!">
        <div className="max-w-5xl! text-left!">
          <h1 className="text-4xl! font-semibold! leading-[1.1]! tracking-tight! text-zinc-900! sm:text-5xl! lg:text-7xl!">
            Your one - stop shop for everything you need.
          </h1>

          <p className="mt-5! max-w-xl! text-base! leading-relaxed! text-zinc-800! sm:text-lg! font-medium!">
            {siteInfo.tagline} Shop tech, fashion, books, and more - try it free,
            free delivery over ₹499 and easy returns.
          </p>

          <div className="mt-8! flex! flex-wrap! items-center! gap-5! sm:gap-6!">
            <Link
              href="/shop"
              className="inline-flex! items-center! justify-center! rounded-lg! bg-linear-to-t! from-blue-700! to-blue-400!  px-5! py-2.5!  font-semibold! text-base! md:text-lg! text-white!  transition-colors! hover:bg-blue-500! active:scale-95! duration-300! ease-in-out! shadow-lg! shadow-blue-300 cursor-pointer! hover:shadow-lg! hover:shadow-blue-400!"
            >
              Shop Now
            </Link>
            <Link
              href="/shop"
              className="text-base! md:text-lg! font-medium! text-zinc-900! transition-colors! hover:text-blue-600!  active:scale-95! duration-300! ease-in-out!"
            >
              Browse by Category
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelryBanner;
