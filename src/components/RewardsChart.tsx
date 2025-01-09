import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", rewards: 400 },
  { month: "Feb", rewards: 600 },
  { month: "Mar", rewards: 800 },
  { month: "Apr", rewards: 1000 },
  { month: "May", rewards: 1200 },
  { month: "Jun", rewards: 1600 },
];

export const RewardsChart = () => {
  return (
    <Card className="bg-staking-card p-8 rounded-xl border-0 hover:shadow-lg hover:shadow-staking-accent/10 transition-all duration-300">
      <h2 className="text-staking-text-primary text-xl font-semibold mb-6">Rewards History</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="month"
              stroke="#94A3B8"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#94A3B8"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#252B3B",
                border: "none",
                borderRadius: "8px",
                color: "#FFFFFF",
              }}
            />
            <Line
              type="monotone"
              dataKey="rewards"
              stroke="#9b87f5"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};