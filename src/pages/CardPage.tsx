
import React, { useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import CryptoCard from "@/components/ui/CryptoCard";
import CardActions from "@/components/sections/CardActions";
import TransactionItem from "@/components/ui/TransactionItem";
import { MOCK_CARDS, MOCK_TRANSACTIONS } from "@/lib/constants";
import { MailOpen, Plus, Filter } from "lucide-react";
import CardFeatureDrawer from "@/components/ui/CardFeatureDrawer";

const actionDrawers = {
  view: {
    title: "Card Number",
    content: (
      <div>
        <p className="text-gray-700 mb-4">This is your full card number (simulated feature).</p>
        <div className="bg-gray-100 text-gray-900 p-4 rounded-xl font-mono tracking-widest text-lg flex justify-between">
          <span>1234 5678 9012 0824</span>
          <span className="ml-2">CVV: 123</span>
        </div>
      </div>
    ),
  },
  freeze: {
    title: "Freeze Card",
    content: (
      <div>
        <p className="text-gray-700 mb-2">Are you sure you want to freeze your card?</p>
        <button className="bg-black text-white rounded-full px-6 py-2 w-full mt-4">Confirm Freeze</button>
      </div>
    ),
  },
  limit: {
    title: "Set Card Limit",
    content: (
      <div>
        <p className="text-gray-700 mb-3">Set your card spending limit (for simulation only):</p>
        <input type="number" className="w-full border p-2 rounded-lg mb-2" placeholder="Enter USD limit" />
        <button className="bg-black text-white rounded-full px-6 py-2 w-full">Set Limit</button>
      </div>
    ),
  },
  settings: {
    title: "Card Settings",
    content: (
      <div>
        <p className="text-gray-700 mb-2">Manage your card (simulated):</p>
        <ul className="list-disc ml-6 text-sm text-gray-600">
          <li>Rename card</li>
          <li>Replace card</li>
          <li>Close card</li>
        </ul>
      </div>
    ),
  },
  addToWallet: {
    title: "Add to Google Wallet",
    content: (
      <div>
        <p className="mb-2 text-gray-700">Simulated integration with Google Wallet.</p>
        <button className="bg-black text-white rounded-full px-6 py-2 w-full">Continue</button>
      </div>
    ),
  },
  mail: {
    title: "Card Messages",
    content: (
      <div>
        <p>No new messages (simulated).</p>
      </div>
    ),
  },
  plus: {
    title: "Add New Card",
    content: (
      <div>
        <p>Add a new CryptoCard (simulation).</p>
        <button className="bg-black text-white rounded-full px-6 py-2 w-full mt-4">Apply for Card</button>
      </div>
    ),
  },
  filter: {
    title: "Filter Transactions",
    content: (
      <div>
        <p>Choose filter (simulated):</p>
        <div className="flex gap-2 mt-3">
          <button className="bg-gray-200 px-3 py-1 rounded-xl">All</button>
          <button className="bg-gray-200 px-3 py-1 rounded-xl">Received</button>
          <button className="bg-gray-200 px-3 py-1 rounded-xl">Declined</button>
        </div>
      </div>
    ),
  },
  more: {
    title: "More Actions",
    content: (
      <div>
        <p>Additional options coming soon</p>
      </div>
    ),
  },
};

const CardPage: React.FC = () => {
  const card = MOCK_CARDS[0] || { 
    id: 'default',
    lastFour: '0000', 
    network: 'visa' as const,
    name: undefined,
    frozen: false,
    expired: false
  };
  const cardTransactions = MOCK_TRANSACTIONS.filter(tx => tx.cardLastFour === card.lastFour);
  const [drawer, setDrawer] = useState<null | keyof typeof actionDrawers>(null);

  // Close drawer utility
  const closeDrawer = () => setDrawer(null);

  return (
    <MobileLayout activeTab="card">
      <header className="px-4 pt-6 pb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold drop-shadow-lg">Cards</h1>
        <div className="flex items-center gap-4">
          <button onClick={() => setDrawer("mail")} className="rounded-full bg-gray-100 p-2 hover-scale shadow-sm"><MailOpen size={20} /></button>
          <button onClick={() => setDrawer("plus")} className="rounded-full bg-gray-100 p-2 hover-scale shadow-sm"><Plus size={20} /></button>
        </div>
      </header>

      <section className="px-4 mb-2">
        <CryptoCard
          lastFour={card.lastFour}
          network={card.network}
          name={card.name}
          frozen={card.frozen}
          showDetails={false}
        />
      </section>

      {/* Pass down action handlers for drawers */}
      <CardActions 
        onView={() => setDrawer("view")}
        onFreeze={() => setDrawer("freeze")}
        onLimit={() => setDrawer("limit")}
        onSettings={() => setDrawer("settings")}
      />

      <section className="px-4 mb-4">
        <button
          className="mb-4 w-full py-3 bg-black text-white rounded-full font-medium flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition"
          onClick={() => setDrawer("addToWallet")}
        >
          <span className="flex items-center gap-1">
            <img src="https://www.gstatic.com/images/icons/material/product/1x/wallet_32dp.png" alt="Google Wallet" className="w-4 h-4" />
            Add to Google Wallet
          </span>
        </button>
      </section>

      <section className="px-4 mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold">Transactions</h2>
          <div className="flex items-center gap-3">
            <button onClick={() => setDrawer("filter")} className="rounded-full bg-gray-100 p-2 hover-scale shadow"><Filter size={18} /></button>
            <button onClick={() => setDrawer("more")} className="text-gray-500 rounded-full bg-gray-100 p-2 hover-scale shadow">•••</button>
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white/80 shadow-lg backdrop-blur-sm">
          {cardTransactions.length > 0 ? (
            cardTransactions.map((transaction, index) => (
              <TransactionItem
                key={index}
                merchant={transaction.merchant}
                amount={transaction.amount}
                date={transaction.date}
                status={transaction.status}
                cardLastFour={transaction.cardLastFour}
              />
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              No transactions yet
            </div>
          )}
        </div>
      </section>

      {/* Feature Drawers */}
      <CardFeatureDrawer
        open={drawer !== null}
        title={drawer ? actionDrawers[drawer].title : ""}
        onClose={closeDrawer}
      >
        {drawer ? actionDrawers[drawer].content : null}
      </CardFeatureDrawer>
    </MobileLayout>
  );
};

export default CardPage;
