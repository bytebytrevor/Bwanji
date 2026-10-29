import { useState } from "react";

type TeamPortraitProps = {
  src?: string;
  alt: string;
  initials: string;
  className?: string;
  position?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
};

export default function TeamPortrait({
  src,
  alt,
  initials,
  className = "",
  position = "center 25%",
  priority = false,
  fit = "cover",
}: TeamPortraitProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  const showImage = Boolean(src) && failedSrc !== src;

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-[#EAEAEA] ${className}`}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onError={() => setFailedSrc(src ?? null)}
          style={{
            objectFit: fit,
            objectPosition: position,
            imageRendering: "auto",
          }}
          className="absolute inset-0 block h-full w-full"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-black font-serif text-6xl font-bold text-[#E50069]">
          {initials}
        </div>
      )}
    </div>
  );
}
