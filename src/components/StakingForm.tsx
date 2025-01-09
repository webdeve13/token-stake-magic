import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const StakingForm = () => {
  const [amount, setAmount] = useState("");
  const { toast } = useToast();

  const handleStake = () => {
    toast({
      title: "Staking successful",
      description: `Successfully staked ${amount} TKN`,
    });
    setAmount("");
  };

  const handleUnstake = () => {
    toast({
      title: "Unstaking successful",
      description: `Successfully unstaked ${amount} TKN`,
    });
    setAmount("");
  };

  return (
    <Card className="bg-staking-card p-8 rounded-xl border-0 hover:shadow-lg hover:shadow-staking-accent/10 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-staking-accent/10 rounded-lg">
          <Link2 className="w-6 h-6 text-staking-accent" />
        </div>
        <h2 className="text-staking-text-primary text-xl font-semibold">Stake Tokens</h2>
      </div>
      <div className="space-y-6">
        <div>
          <label className="text-staking-text-secondary text-sm block mb-2">Amount</label>
          <Input
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-staking-background border-staking-card text-staking-text-primary placeholder:text-staking-text-secondary/50"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={handleStake}
            className="bg-staking-accent hover:bg-staking-accent/90 text-white shadow-lg shadow-staking-accent/20"
          >
            Stake
          </Button>
          <Button
            onClick={handleUnstake}
            variant="outline"
            className="border-staking-card text-staking-text-primary hover:bg-staking-card/50"
          >
            Unstake
          </Button>
        </div>
      </div>
    </Card>
  );
};