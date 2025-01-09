import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/StatsCard";
import { StakingForm } from "@/components/StakingForm";
import { RewardsChart } from "@/components/RewardsChart";
import { Wallet } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-staking-background to-staking-card text-staking-text-primary p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-staking-accent to-staking-success bg-clip-text text-transparent">
              Staking Dashboard
            </h1>
            <p className="text-staking-text-secondary text-lg">
              Stake tokens and earn rewards
            </p>
          </div>
          <Button className="bg-staking-accent hover:bg-staking-accent/90 shadow-lg shadow-staking-accent/20">
            <Wallet className="mr-2 h-5 w-5" />
            Connect Wallet
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatsCard
            title="Total Staked"
            value="125,000 TKN"
            change="12.5%"
            isPositive={true}
          />
          <StatsCard
            title="APY"
            value="15.2%"
            change="2.1%"
            isPositive={true}
          />
          <StatsCard
            title="Your Rewards"
            value="1,250 TKN"
            change="150 TKN"
            isPositive={true}
          />
        </div>

        {/* Staking Form and Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StakingForm />
          <RewardsChart />
        </div>
      </div>
    </div>
  );
};

export default Index;