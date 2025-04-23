
import React from "react";
import CardFeatureDrawer from "./CardFeatureDrawer";
import { SendHorizontal } from "lucide-react";

interface SendDrawerProps {
  open: boolean;
  onClose: () => void;
}

const SendDrawer: React.FC<SendDrawerProps> = ({ open, onClose }) => (
  <CardFeatureDrawer open={open} onClose={onClose} title="Send Crypto">
    <div className="text-center space-y-5">
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-cryptoCard-primary text-white flex items-center justify-center shadow-lg mb-2">
          <SendHorizontal size={28} />
        </div>
      </div>
      <div className="font-bold text-lg">Simulated Send Crypto</div>
      <p className="text-gray-600 text-sm">Pretend to send any asset to any address.</p>
      <button
        className="w-full bg-cryptoCard-primary text-white p-3 rounded-xl font-bold shadow hover-scale mt-4"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </CardFeatureDrawer>
);

export default SendDrawer;
