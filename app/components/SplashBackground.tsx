"use client";

import { useLayoutEffect, useState } from "react";

const webm = process.env.NEXT_PUBLIC_SPLASH_VIDEO_WEBM?.trim() ?? "";
const mp4 = process.env.NEXT_PUBLIC_SPLASH_VIDEO_MP4?.trim() ?? "";
const single = process.env.NEXT_PUBLIC_SPLASH_VIDEO_URL?.trim() ?? "";
const poster = process.env.NEXT_PUBLIC_SPLASH_POSTER_URL?.trim() ?? "";

const hasVideo = Boolean(webm || mp4 || single);

const splineDisabled =
  process.env.NEXT_PUBLIC_SPLASH_DISABLE_SPLINE === "1" ||
  process.env.NEXT_PUBLIC_SPLASH_DISABLE_SPLINE === "true";

const DEFAULT_SPLINE_IFRAME =
  "https://my.spline.design/untitled-HCWrpQfdwFprrDckRSm24COP/";

const splineIframeSrc =
  process.env.NEXT_PUBLIC_SPLASH_SPLINE_IFRAME_URL?.trim() ||
  DEFAULT_SPLINE_IFRAME;

const useSplineFallback =
  !splineDisabled && !hasVideo && splineIframeSrc.length > 0;

type MotionCtx = { ready: boolean; allowMotion: boolean };

/**
 * Фон: зацикленное видео (легче для CPU, чем live Spline) или, если видео не задано,
 * прежний Spline iframe. Подложка-градиент всегда, чтобы не было «пустого» чёрного экрана.
 *
 * Видео: NEXT_PUBLIC_SPLASH_VIDEO_WEBM / _MP4 или NEXT_PUBLIC_SPLASH_VIDEO_URL
 * Постер: NEXT_PUBLIC_SPLASH_POSTER_URL
 * Отключить Spline fallback: NEXT_PUBLIC_SPLASH_DISABLE_SPLINE=1
 */
export function SplashBackground() {
  const [ctx, setCtx] = useState<MotionCtx>({
    ready: false,
    allowMotion: true,
  });

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () =>
      setCtx((c) => ({
        ...c,
        ready: true,
        allowMotion: !mq.matches,
      }));
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { ready, allowMotion } = ctx;

  const showPosterOnly = ready && !allowMotion && Boolean(poster);
  const showVideo = ready && allowMotion && hasVideo;
  const showSpline =
    ready && allowMotion && !hasVideo && useSplineFallback;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-dvh w-full overflow-hidden bg-black"
    >
      {/* Всегда лёгкая подложка — не «абсолютная пустота», пока нет видео/Spline */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(53,105,234,0.14),transparent_50%),radial-gradient(ellipse_90%_70%_at_100%_50%,rgba(99,102,241,0.1),transparent_45%),radial-gradient(ellipse_80%_60%_at_0%_80%,rgba(244,63,94,0.06),transparent_40%)]" />
      {showPosterOnly ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          className="absolute inset-0 z-[1] h-full w-full object-cover"
          decoding="async"
          fetchPriority="low"
        />
      ) : null}
      {showVideo ? (
        <video
          className="absolute inset-0 z-[1] h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster || undefined}
          disablePictureInPicture
          disableRemotePlayback
        >
          {webm ? <source src={webm} type="video/webm" /> : null}
          {mp4 ? <source src={mp4} type="video/mp4" /> : null}
          {single && !webm && !mp4 ? <source src={single} /> : null}
        </video>
      ) : null}
      {showSpline ? (
        <iframe
          title="Qascade — background"
          src={splineIframeSrc}
          className="absolute inset-0 z-[1] h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; xr-spatial-tracking; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : null}
    </div>
  );
}
