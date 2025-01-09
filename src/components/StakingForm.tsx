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
    <Card className="bg-staking-card p-6 rounded-xl border-0">
      <div className="flex items-center gap-2 mb-4">
        <Link2 className="w-5 h-5 text-staking-accent" />
        <h2 className="text-white text-xl font-semibold">Stake Tokens</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="text-gray-400 text-sm block mb-2">Amount</label>
          <Input
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-staking-background border-gray-700 text-white"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={handleStake}
            className="bg-staking-accent hover:bg-staking-accent/90 text-white"
          >
            Stake
          </Button>
          <Button
            onClick={handleUnstake}
            variant="outline"
            className="border-gray-700 text-white hover:bg-gray-700"
          >
            Unstake
          </Button>
        </div>
      </div>
    </Card>
  );
};