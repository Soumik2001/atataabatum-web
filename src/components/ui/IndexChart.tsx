import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const fakeChartData = [
  { label: "Mon", value: 25 },
  { label: "Tue", value: 62 },
  { label: "Wed", value: 45 },
  { label: "Thu", value: 70 },
  { label: "Fri", value: 55 },
  { label: "Sat", value: 80 },
];

const COLORS = ["var(--color-signal)", "var(--color-action)"];

export function IndexChart() {
  return (
    <div className="bg-panel rounded-[12px] p-4 sm:p-7 sm:pt-5 flex flex-col h-[280px] sm:h-auto sm:flex-1 lg:min-h-0 border-2 border-card-border">
      <h2 className="text-lg lg:text-xl text-ice/80 tracking-wide mb-4.5">Index chart</h2>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%" debounce={50}>
          <BarChart
            data={fakeChartData}
            margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="label" hide />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                background: "#0A2342",
                border: "1px solid #1d4a87",
                borderRadius: 6,
                padding: "8px 12px",
              }}
              labelStyle={{
                color: "#EAF1FB",
                fontWeight: 600,
                marginBottom: 4,
              }}
              itemStyle={{ color: "#EAF1FB" }}
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
              animationDuration={150}
            />
            <Bar
              dataKey="value"
              radius={[6, 6, 0, 0]}
              animationBegin={300}
              animationDuration={1500}
              animationEasing="ease-in-out"
            >
              {fakeChartData.map((_, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
