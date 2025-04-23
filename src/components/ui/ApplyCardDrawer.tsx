
import React from "react";
import CardFeatureDrawer from "./CardFeatureDrawer";
import { CreditCard } from "lucide-react";

interface ApplyCardDrawerProps {
  open: boolean;
  onClose: () => void;
}

const ApplyCardDrawer: React.FC<ApplyCardDrawerProps> = ({ open, onClose }) => (
  <CardFeatureDrawer open={open} onClose={onClose} title="Apply for Card">
    <div className="flex flex-col items-center gap-4">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cryptoCard-primary text-white shadow">
        <CreditCard size={32} />
      </div>
      <div className="font-bold text-xl">Apply for a CryptoCard</div>
      <p className="text-gray-600 text-center text-sm max-w-xs">Unlock spending with your crypto—simulate submitting your application now!</p>
      <button
        className="w-full bg-cryptoCard-primary text-white p-3 rounded-xl font-bold shadow hover-scale mt-2"
        onClick={onClose}
      >
        Confirm Application
      </button>
    </div>
  </CardFeatureDrawer>
);

export default ApplyCardDrawer;
