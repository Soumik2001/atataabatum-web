import { useEffect, useState } from "react";
import { Odometer } from "./Odometer";

type StatCardProps = {
  label: string;
  value: string;
  tone?: "default" | "signal" | "alert";
};

export function StatCard({ label, value, tone = "default" }: StatCardProps) {
  const toneClass = {
    default: "text-ice",
    signal: "text-signal",
    alert: "text-alert",
  };

  const zeroed = value.replace(/\d/g, "0");
  const [display, setDisplay] = useState(zeroed);

  useEffect(() => {
    function startRoll() {
      // small extra delay so the roll is visibly separate from the page appearing
      setTimeout(() => setDisplay(value), 300);
    }

    if (document.readyState === "complete") {
      startRoll();
    } else {
      window.addEventListener("load", startRoll);
      return () => window.removeEventListener("load", startRoll);
    }
  }, [value]);

  return (
    <div className="bg-panel rounded-[10px] p-7 pt-5 flex-1 min-h-[150px] flex flex-col justify-start gap-3.5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30">
      <p className="text-xl text-ice/70 uppercase tracking-wide mb-1">
        {label}
      </p>
      <p className={`text-4xl font-bold leading-none pb-2 ${toneClass[tone]}`}>
        <Odometer value={display} />
      </p>
    </div>
  );
}
