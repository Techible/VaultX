
import React from "react";
import CardFeatureDrawer from "./CardFeatureDrawer";
import { Check } from "lucide-react";

interface DepositDrawerProps {
  open: boolean;
  onClose: () => void;
}

const DepositDrawer: React.FC<DepositDrawerProps> = ({ open, onClose }) => (
  <CardFeatureDrawer open={open} onClose={onClose} title="Deposit Funds">
    <div className="text-center space-y-5">
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-cryptoCard-primary text-white flex items-center justify-center shadow-lg mb-2">
          <Check size={32} />
        </div>
      </div>
      <div className="font-bold text-lg">Simulated Deposit Flow</div>
      <p className="text-gray-600 text-sm">This simulates the deposit flow. Integrate your payment service here.</p>
      <button
        className="w-full bg-cryptoCard-primary text-white p-3 rounded-xl font-bold shadow hover-scale mt-4"
        onClick={() => {
          onClose();
        }}
      >
        Done
      </button>
    </div>
  </CardFeatureDrawer>
);

export default DepositDrawer;
