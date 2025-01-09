import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export const StatsCard = ({ title, value, change, isPositive = true }: StatsCardProps) => {
  return (
    <Card className="bg-staking-card p-6 rounded-xl border-0">
      <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
      <p className="text-white text-2xl font-bold mb-1">{value}</p>
      {change && (
        <p className={`text-sm ${isPositive ? "text-staking-success" : "text-staking-error"}`}>
          {isPositive ? "+" : "-"}{change}
        </p>
      )}
    </Card>
  );
};