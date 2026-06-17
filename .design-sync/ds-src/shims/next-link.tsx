// design-sync shim for `next/link` — renders a plain <a> so DS components
// that use <Link> bundle and render standalone (outside the Next runtime).
import React from "react";

type AnyLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: unknown;
  prefetch?: unknown;
  replace?: unknown;
  scroll?: unknown;
  shallow?: unknown;
  locale?: unknown;
  legacyBehavior?: unknown;
  passHref?: unknown;
};

const Link = React.forwardRef<HTMLAnchorElement, AnyLinkProps>(function Link(
  { href, prefetch, replace, scroll, shallow, locale, legacyBehavior, passHref, children, ...rest },
  ref
) {
  const h =
    typeof href === "string"
      ? href
      : (href && typeof href === "object" && "pathname" in href
          ? String((href as { pathname?: string }).pathname ?? "#")
          : "#");
  return (
    <a ref={ref} href={h} {...rest}>
      {children as React.ReactNode}
    </a>
  );
});

export default Link;
