
import React from "react";
import CardFeatureDrawer from "./CardFeatureDrawer";
import { CreditCard } from "lucide-react";

interface TransactionDrawerProps {
  open: boolean;
  onClose: () => void;
  transaction: any;
}

// Show either "all transactions" or an individual transaction detail
const TransactionDrawer: React.FC<TransactionDrawerProps> = ({ open, onClose, transaction }) => {
  if (!transaction) return null;

  // Show ALL if string
  if (transaction === "all") {
    return (
      <CardFeatureDrawer open={open} onClose={onClose} title="All Transactions">
        <div className="text-center">
          <div className="text-lg font-bold mb-2">Transactions List</div>
          <p className="text-gray-600 text-sm mb-3">You can imagine filtering or viewing all your transactions here.</p>
          <button
            className="w-full bg-cryptoCard-primary text-white p-3 rounded-xl font-bold shadow hover-scale mt-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </CardFeatureDrawer>
    );
  }

  return (
    <CardFeatureDrawer open={open} onClose={onClose} title={transaction.merchant || "Transaction"}>
      <div className="space-y-4 text-center">
        <div className="flex flex-col items-center gap-0.5">
          <CreditCard className="text-cryptoCard-primary mb-1" size={32} />
          <span className="text-xl font-bold">{transaction.amount} {transaction.currency}</span>
          <span className="text-gray-500 text-xs">{transaction.status}</span>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <div>
            <strong>Date:</strong> {new Date(transaction.date).toLocaleString()}
          </div>
          {transaction.cardLastFour && (
            <div>
              <strong>Card:</strong> **** {transaction.cardLastFour}
            </div>
          )}
        </div>
        <button
          className="w-full bg-cryptoCard-primary text-white p-3 rounded-xl font-bold shadow hover-scale mt-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </CardFeatureDrawer>
  );
};

export default TransactionDrawer;
