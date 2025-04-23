
import React from "react";
import CardFeatureDrawer from "./CardFeatureDrawer";

interface WalletDetailDrawerProps {
  open: boolean;
  onClose: () => void;
  wallet: any;
}

const WalletDetailDrawer: React.FC<WalletDetailDrawerProps> = ({ open, onClose, wallet }) => {
  if (!wallet) return null;
  return (
    <CardFeatureDrawer open={open} onClose={onClose} title={`${wallet.name} Wallet`}>
      <div className="text-center space-y-2">
        <div className="flex justify-center mb-2">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white shadow bg-cryptoCard-primary mx-auto">
            {wallet.icon}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">{wallet.balance} <span className="text-base">{wallet.name}</span></div>
          <div className="text-md text-gray-500 mb-4">≈ {wallet.usdValue} USD</div>
        </div>
        <div className="flex gap-2 justify-center mt-4">
          <button className="bg-cryptoCard-primary text-white py-2 px-4 rounded-lg shadow hover-scale font-semibold" onClick={onClose}>Close</button>
        </div>
      </div>
    </CardFeatureDrawer>
  );
};

export default WalletDetailDrawer;
