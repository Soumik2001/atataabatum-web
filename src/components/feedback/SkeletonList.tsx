import { SkeletonRow } from "./SkeletonRow";

type SkeletonListProps = {
  rows?: number;
};

// Varying widths so it reads like loading text lines, not a uniform grid
const DEFAULT_WIDTHS = ["100%", "60%", "85%", "60%"];

export function SkeletonList({ rows = 4 }: SkeletonListProps) {
  return (
    <div className="">
      {Array.from({ length: rows }).map((_, i) => (
        <SkeletonRow key={i} width={DEFAULT_WIDTHS[i % DEFAULT_WIDTHS.length]} />
      ))}
    </div>
  );
}