
import React from "react";

interface TransactionItemProps {
  merchant: string;
  amount: string;
  date: string;
  status?: string;
  cardLastFour?: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  merchant,
  amount,
  date,
  status,
  cardLastFour,
}) => {
  const isPositive = amount.startsWith('+');
  const formattedDate = new Date(date).toLocaleDateString();
  
  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            {merchant === 'Reward' ? '🎁' : '🏢'}
          </div>
          <div>
            <div className="font-medium">{merchant}</div>
            {cardLastFour && (
              <div className="text-xs text-gray-500">•• {cardLastFour}</div>
            )}
            <div className="text-xs text-gray-500">{formattedDate}</div>
          </div>
        </div>
        <div className="text-right">
          <div className={`font-medium ${isPositive ? 'text-green-600' : ''}`}>
            {amount} USD
          </div>
          {status && (
            <div className={`text-xs ${status === 'Declined' ? 'text-red-500' : 'text-green-600'}`}>
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
