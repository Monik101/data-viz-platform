import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useDashboardStore } from "../../../store/dashboard-store";
import { IconArrowUp, IconHelp } from "@tabler/icons-react";

const formatCurrency = (value: number) => `$${(value / 1000).toFixed(0)}K`;

//more tweaks required for better and similar graph as per figma

function Graph() {
  const { moneyData, setHoveredDataPoint } = useDashboardStore();

  return (
    <div className="w-full bg-[#222324] p-[30px] h-full rounded-lg border border-[#333] text-white">
      <div className="w-full mb-3.5">
        <div className="bg-[#1A1A1A] border border-[#333] text-sm text-white px-3 py-1.5 rounded-md cursor-pointer ml-auto w-fit">
          Unsatisfied Demand %
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={moneyData}
          onMouseLeave={() => setHoveredDataPoint(null)}
          margin={{ top: 10, right: 20, left: -10, bottom: 10 }}
        >
          <CartesianGrid
            stroke="#333"
            strokeDasharray="3 3"
            vertical={true}
            horizontal={false}
          />
          <XAxis
            dataKey="month"
            stroke="#999"
            tick={{ fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            stroke="#999"
            tickFormatter={formatCurrency}
            tick={{ fontSize: 13 }}
            width={40}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload || payload.length === 0) return null;

              return (
                <div className="bg-[##22232433] p-5 rounded border border-[#333] backdrop-blur-md">
                  <div className="w-full flex items-center justify-between gap-1 text-sm mb-2.5 text-white">
                    <span className="font-bold text-xl">
                      ${(payload[0].value / 1000).toFixed(0)}K
                    </span>
                    <IconHelp size={16} className="text-[#888888]" />
                  </div>
                  <div className="text-[#878787] text-sm flex items-center gap-1.5">
                    <div className="bg-[#C8E97233] border border-[#C8E972] rounded-full">
                      <IconArrowUp className="text-[#C8E972]" size={10} />
                    </div>
                    4.6% above target
                  </div>
                </div>
              );
            }}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#C9FF3B"
            strokeWidth={2.5}
            activeDot={{
              r: 6,
              fill: "#161618",
              stroke: "#C9FF3B",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;
