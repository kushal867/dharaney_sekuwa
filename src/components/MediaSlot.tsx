import { forwardRef, useState } from "react";
import type { MediaAsset } from "../data/media";
import AssetPlaceholder from "./AssetPlaceholder";

interface Props {
  asset: MediaAsset;
  className?: string;
  cursor?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

const MediaSlot = forwardRef<HTMLVideoElement, Props>(function MediaSlot(
  { asset, className = "", cursor, autoPlay, muted = true, loop },
  ref
) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <AssetPlaceholder label={asset.label} path={asset.src} className={className} />;
  }

  const cursorProps = cursor ? { "data-cursor": cursor } : {};

  if (asset.kind === "video") {
    return (
      <video
        ref={ref}
        className={`h-full w-full object-cover ${className}`}
        src={asset.src}
        poster={asset.poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        preload="metadata"
        onError={() => setFailed(true)}
        {...cursorProps}
      />
    );
  }

  return (
    <img
      className={`h-full w-full object-cover ${className}`}
      src={asset.src}
      alt={asset.label}
      loading="lazy"
      onError={() => setFailed(true)}
      {...cursorProps}
    />
  );
});

export default MediaSlot;
