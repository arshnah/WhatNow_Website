// design-sync shim for `next/image` — renders a plain <img>, mapping the
// `fill` layout to absolute-fill styles and dropping Next-only props so they
// don't leak to the DOM. Lets DS components bundle/render outside Next.
import React from "react";

type AnyImageProps = {
  src?: unknown;
  alt?: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  placeholder?: string;
  blurDataURL?: string;
  loader?: unknown;
  unoptimized?: boolean;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: unknown;
};

export default function NextImage({
  src,
  alt = "",
  width,
  height,
  fill,
  priority,
  quality,
  sizes,
  placeholder,
  blurDataURL,
  loader,
  unoptimized,
  style,
  ...rest
}: AnyImageProps) {
  const s =
    typeof src === "string"
      ? src
      : (src && typeof src === "object" && "src" in src
          ? String((src as { src?: string }).src ?? "")
          : "");
  const fillStyle: React.CSSProperties = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style }
    : (style ?? {});
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={s}
      alt={alt}
      width={fill ? undefined : (width as number | undefined)}
      height={fill ? undefined : (height as number | undefined)}
      style={fillStyle}
      {...(rest as React.ImgHTMLAttributes<HTMLImageElement>)}
    />
  );
}
