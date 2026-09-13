type SkeletonRowProps = {
  width?: string;
};

export function SkeletonRow({ width = "70%" }: SkeletonRowProps) {
  return (
    <div
      className="h-5 mb-3 last:mb-0"
      style={{
        width,
        backgroundColor: "#1d4a87",
        backgroundImage:
          "linear-gradient(90deg, rgba(29,74,135,0) 0%, rgba(255,255,255,0.10) 50%, rgba(29,74,135,0) 100%)",
        backgroundSize: "400px 100%",
        backgroundRepeat: "no-repeat",
        animation: "shimmer 1.8s ease-in-out infinite",
      }}
    />
  );
}