
import React from "react";
import CardFeatureDrawer from "./CardFeatureDrawer";
import { ArrowRightLeft } from "lucide-react";

interface ConvertDrawerProps {
  open: boolean;
  onClose: () => void;
}

const ConvertDrawer: React.FC<ConvertDrawerProps> = ({ open, onClose }) => (
  <CardFeatureDrawer open={open} onClose={onClose} title="Convert">
    <div className="text-center space-y-5">
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-cryptoCard-primary text-white flex items-center justify-center shadow-lg mb-2">
          <ArrowRightLeft size={28} />
        </div>
      </div>
      <div className="font-bold text-lg">Mock Crypto Conversion</div>
      <p className="text-gray-600 text-sm">Simulate converting between different crypto wallets.</p>
      <button
        className="w-full bg-cryptoCard-primary text-white p-3 rounded-xl font-bold shadow hover-scale mt-4"
        onClick={onClose}
      >
        Done
      </button>
    </div>
  </CardFeatureDrawer>
);

export default ConvertDrawer;
