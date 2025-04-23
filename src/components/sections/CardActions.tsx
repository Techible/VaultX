
import React from "react";
import { Eye, Snowflake, Shield, Settings } from "lucide-react";

interface CardActionsProps {
  onView: () => void;
  onFreeze: () => void;
  onLimit: () => void;
  onSettings: () => void;
}

const ActionTile: React.FC<{ icon: React.ReactNode, label: string, onClick: () => void }> = ({ icon, label, onClick }) => (
  <button 
    className="flex flex-col items-center hover-scale transition-all" 
    onClick={onClick}
    tabIndex={0}
    type="button"
  >
    <div className="w-12 h-12 bg-gray-50 shadow rounded-full flex items-center justify-center mb-1">
      {icon}
    </div>
    <span className="text-xs">{label}</span>
  </button>
);

const CardActions: React.FC<CardActionsProps> = ({ onView, onFreeze, onLimit, onSettings }) => {
  return (
    <div className="flex justify-around my-6 select-none">
      <ActionTile icon={<Eye size={20} />} label="View" onClick={onView} />
      <ActionTile icon={<Snowflake size={20} />} label="Freeze" onClick={onFreeze} />
      <ActionTile icon={<Shield size={20} />} label="Limit" onClick={onLimit} />
      <ActionTile icon={<Settings size={20} />} label="Settings" onClick={onSettings} />
    </div>
  );
};

export default CardActions;
