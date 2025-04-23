
import React from "react";
import CardFeatureDrawer from "./CardFeatureDrawer";
import { MoreHorizontal } from "lucide-react";

interface MoreDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MoreDrawer: React.FC<MoreDrawerProps> = ({ open, onClose }) => (
  <CardFeatureDrawer open={open} onClose={onClose} title="More Actions">
    <div className="text-center space-y-5">
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-cryptoCard-primary text-white flex items-center justify-center shadow-lg mb-2">
          <MoreHorizontal size={28} />
        </div>
      </div>
      <div className="font-bold text-lg">Coming soon!</div>
      <p className="text-gray-600 text-sm">Imagine additional crypto features here.</p>
      <button
        className="w-full bg-cryptoCard-primary text-white p-3 rounded-xl font-bold shadow hover-scale mt-4"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </CardFeatureDrawer>
);

export default MoreDrawer;
