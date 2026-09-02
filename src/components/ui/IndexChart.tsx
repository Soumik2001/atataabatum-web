import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const fakeChartData = [
  { label: 'Mon', value: 45 },
  { label: 'Tue', value: 62 },
  { label: 'Wed', value: 38 },
  { label: 'Thu', value: 70 },
  { label: 'Fri', value: 55 },
  { label: 'Sat', value: 80 },
]

const COLORS = ['#2E9E4F', '#2F80ED']

export function IndexChart() {
  return (
    <div className="bg-panel rounded-lg p-7 pt-5 flex-1 flex flex-col min-h-0">
      <h2 className="text-xl text-ice/70 tracking-wide mb-1">Index chart</h2>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%" debounce={50}>
          <BarChart data={fakeChartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="label"
              stroke="#EAF1FB"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{ background: '#0A2342', border: 'none', borderRadius: 0 }}
              labelStyle={{ color: '#EAF1FB' }}
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              animationDuration={150}
            />
            <Bar
              dataKey="value"
              radius={[6, 6, 0, 0]}
              animationDuration={800}
              animationEasing="ease-out"
            >
              {fakeChartData.map((_, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}