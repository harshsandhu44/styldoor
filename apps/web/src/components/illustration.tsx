type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

// unDraw SVGs referenced as <img>. width/height set the intrinsic ratio so the
// image reserves its space before loading (no CLS). Colour is baked into the
// file; dark mode just softens it a touch.
export function Illustration({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: Props) {
  return (
    // next/image doesn't optimize SVG (it passes them through); <img> is correct here.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={`h-auto max-w-full dark:opacity-90 ${className ?? ''}`}
    />
  );
}
