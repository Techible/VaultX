
import React from "react";

interface CryptoCardProps {
  lastFour: string;
  network: "visa" | "mastercard";
  name?: string;
  frozen?: boolean;
  showDetails?: boolean;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ 
  lastFour, 
  network, 
  name, 
  frozen = false, 
  showDetails = false 
}) => {
  return (
    <div className={`crypto-card ${frozen ? "opacity-75" : ""}`}>
      {/* Card Logo */}
      <div className="absolute top-4 left-4">
        <div className="text-white font-bold text-2xl">P</div>
      </div>
      
      {/* Card Holder Name */}
      {name && (
        <div className="absolute top-4 right-4 bg-gray-500 bg-opacity-20 py-1 px-3 rounded-full">
          <span className="text-sm text-white">{name}</span>
        </div>
      )}
      
      {/* Card Number */}
      <div className="absolute bottom-12 left-4">
        {showDetails ? (
          <div className="flex space-x-2">
            <div className="text-lg font-mono opacity-80">••••</div>
            <div className="text-lg font-mono opacity-80">••••</div>
            <div className="text-lg font-mono opacity-80">••••</div>
            <div className="text-lg font-mono">{lastFour}</div>
          </div>
        ) : (
          <div className="text-lg font-mono">•• {lastFour}</div>
        )}
      </div>
      
      {/* Card Network */}
      <div className="absolute bottom-4 right-4">
        {network === "visa" && (
          <div className="text-white font-bold text-2xl">VISA</div>
        )}
        {network === "mastercard" && (
          <div className="flex">
            <div className="w-6 h-6 rounded-full bg-red-500 opacity-80"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-500 opacity-80 -ml-3"></div>
          </div>
        )}
      </div>
      
      {/* Frozen Overlay */}
      {frozen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-2xl">
          <div className="text-white text-lg font-bold">FROZEN</div>
        </div>
      )}
    </div>
  );
};

export default CryptoCard;
