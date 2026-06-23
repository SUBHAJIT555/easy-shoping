import React from "react";
import Link from "next/link";
import { siteInfo } from "@/data/contact-info";

/**
 * Text wordmark for Easy Shoping.
 * variant: "brand" (dark blue + navy, default) | "black" | "light"
 */
const TextLogo = ({
  asLink = false,
  href = "/",
  variant = "brand",
  size = "md",
  className = "",
}) => {
  const [first = "Easy", second = "Shoping"] = siteInfo.companyName.split(/\s+/);

  const classes = [
    "text-logo",
    variant === "black" && "text-logo--black",
    variant === "light" && "text-logo--light",
    size === "sm" && "text-logo--sm",
    size === "lg" && "text-logo--lg",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <span className={classes} aria-label={siteInfo.companyName}>
      <span className="text-logo__easy">{first}</span>
      <span className="text-logo__shoping"> {second}</span>
    </span>
  );

  if (asLink) {
    return (
      <Link href={href} className="text-logo-link" aria-label={`${siteInfo.companyName} home`}>
        {content}
      </Link>
    );
  }

  return content;
};

export default TextLogo;
