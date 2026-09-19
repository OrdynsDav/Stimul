"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CustomLinkProps, LinkVariant } from "../types";
import "./CustomLink.css"
import { cx } from "@/utils/cx";
 
const VARIANT_CLASS: Record<LinkVariant, string> = {
  nav: "btn--underline-animation",
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  review: "btn--underline-default",
};
 
/**
 * Универсальная ссылка сайта. Обёртка над next/link, которая:
 *  - принимает все обычные props Link (href, prefetch, replace, scroll, ...);
 *  - принимает все обычные атрибуты <a> (target, rel, aria-label, onClick, download, ...);
 *  - сама подставляет нужный набор классов под нужный вид ссылки.
 *
 * Примеры:
 *   <CustomLink variant="nav" href="#tariffs">Тарифы</CustomLink>
 *
 *   <CustomLink variant="primary" href="#tariffs">Посмотреть тарифы</CustomLink>
 *   <CustomLink variant="outline" href="#contacts">Связаться</CustomLink>
 *   <CustomLink variant="secondary" href="#contacts">Узнать цену</CustomLink>
 *
 *   <CustomLink variant="review" href="https://avito.ru/..." external>
 *     Смотреть на Авито
 *   </CustomLink>
 */
export function CustomLink({
  href,
  variant = "primary",
  active,
  external,
  className,
  children,
  ...rest
}: CustomLinkProps) {
  const pathname = usePathname();
 
  const isExternal =
    external ??
    (variant === "review" ||
      (typeof href === "string" && /^https?:\/\//.test(href)));
 
  const isActive =
    variant === "nav" &&
    (active ?? (typeof href === "string" && pathname === href));
 
  const externalProps = isExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
 
  return (
    <Link
      href={href}
      className={cx(
        "btn",
        VARIANT_CLASS[variant],
        variant === "nav" && isActive && "header__link--active",
        className
      )}
      aria-current={isActive ? "page" : undefined}
      {...externalProps}
      {...rest}
    >
      {children}
    </Link>
  );
}