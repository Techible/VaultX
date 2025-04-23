
import React from "react";

interface WalletCardProps {
  name: string;
  balance: string;
  usdValue: string;
  icon: string;
  onClick?: () => void;
}

const WalletCard: React.FC<WalletCardProps> = ({ name, balance, usdValue, icon, onClick }) => {
  const getIconBackgroundColor = () => {
    if (name === "USDT") return "bg-crypto-usdt";
    if (name === "USDC") return "bg-crypto-usdc";
    if (name === "USD") return "bg-cryptoCard-primary";
    return "bg-green-500";
  };

  return (
    <button className="wallet-card hover-scale shadow-sm focus:outline-none w-full text-left" onClick={onClick}>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold shadow ${getIconBackgroundColor()}`}>
          <span>{icon}</span>
        </div>
        <span className="text-base font-semibold">{name}</span>
      </div>
      <div className="mt-3">
        <div className="text-2xl font-bold text-gray-900">{balance}</div>
        <div className="text-xs text-gray-500">≈ {usdValue} USD</div>
      </div>
    </button>
  );
};

export default WalletCard;
