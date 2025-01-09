import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export const StatsCard = ({ title, value, change, isPositive = true }: StatsCardProps) => {
  return (
    <Card className="bg-staking-card p-6 rounded-xl border-0 hover:shadow-lg hover:shadow-staking-accent/10 transition-all duration-300">
      <h3 className="text-staking-text-secondary text-sm mb-2">{title}</h3>
      <p className="text-staking-text-primary text-2xl font-bold mb-3">{value}</p>
      {change && (
        <div className="flex items-center gap-1">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-staking-success" />
          ) : (
            <TrendingDown className="w-4 h-4 text-staking-error" />
          )}
          <p className={`text-sm ${isPositive ? "text-staking-success" : "text-staking-error"}`}>
            {isPositive ? "+" : "-"}{change}
          </p>
        </div>
      )}
    </Card>
  );
};