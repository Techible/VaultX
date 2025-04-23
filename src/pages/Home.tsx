
import React, { useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import ActionButtons from "@/components/sections/ActionButtons";
import WalletCard from "@/components/ui/WalletCard";
import TransactionItem from "@/components/ui/TransactionItem";
import DepositDrawer from "@/components/ui/DepositDrawer";
import SendDrawer from "@/components/ui/SendDrawer";
import ConvertDrawer from "@/components/ui/ConvertDrawer";
import MoreDrawer from "@/components/ui/MoreDrawer";
import WalletDetailDrawer from "@/components/ui/WalletDetailDrawer";
import TransactionDrawer from "@/components/ui/TransactionDrawer";
import ApplyCardDrawer from "@/components/ui/ApplyCardDrawer";
import { MOCK_WALLETS, MOCK_TRANSACTIONS } from "@/lib/constants";
import { Eye, Bell, ChevronRight, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [depositOpen, setDepositOpen] = useState(false);
  const [sendOpen, setSendOpen] = useState(false);
  const [convertOpen, setConvertOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [walletDrawerOpen, setWalletDrawerOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [applyCardOpen, setApplyCardOpen] = useState(false);
  const [transactionDrawerOpen, setTransactionDrawerOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const totalValue = MOCK_WALLETS.reduce((sum, wallet) => sum + parseFloat(wallet.usdValue), 0).toFixed(2);

  const handleWalletClick = (wallet: any) => {
    setSelectedWallet(wallet);
    setWalletDrawerOpen(true);
  };

  return (
    <MobileLayout activeTab="home">
      {/* Header */}
      <header className="px-4 pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cryptoCard-primary via-cryptoCard-secondary to-cryptoCard-tertiary flex items-center justify-center text-xl text-white font-bold shadow hover-scale">
            C
          </div>
          <h1 className="text-xl font-bold tracking-wide text-cryptoCard-primary">CryptoCard</h1>
        </div>
        <button className="relative rounded-full bg-white p-2 shadow hover:bg-cryptoCard-primary/10">
          <Bell size={22} className="text-cryptoCard-primary" />
          {/* Simulate unread notifications */}
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white"></span>
        </button>
      </header>

      {/* Total Value */}
      <section className="px-4 mb-2">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Est. Total Value (USD)</span>
          <Eye size={16} />
        </div>
        <div className="flex items-center gap-2 mt-1">
          <h1 className="text-4xl font-extrabold text-cryptoCard-primary drop-shadow">{totalValue}</h1>
          <ChevronRight size={18} className="text-gray-400" />
        </div>
      </section>

      {/* Action Buttons */}
      <ActionButtons
        onDeposit={() => setDepositOpen(true)}
        onSend={() => setSendOpen(true)}
        onConvert={() => setConvertOpen(true)}
        onMore={() => setMoreOpen(true)}
      />

      {/* Wallets */}
      <section className="px-4 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MOCK_WALLETS.map(wallet => (
            <WalletCard
              key={wallet.id}
              name={wallet.name}
              balance={wallet.balance}
              usdValue={wallet.usdValue}
              icon={wallet.icon}
              onClick={() => handleWalletClick(wallet)}
            />
          ))}
        </div>
      </section>

      {/* Card */}
      <section className="px-4 mb-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold tracking-tight">Cards</h2>
        </div>
        <button
          className="block w-full border border-gray-200 rounded-2xl overflow-hidden p-0 mb-0 glass hover-scale transition-shadow"
          onClick={() => setApplyCardOpen(true)}
        >
          <div className="flex items-center gap-4 px-5 pt-4 pb-0">
            <div className="w-16 h-12 bg-cryptoCard-primary rounded-xl flex items-center justify-center text-white font-black text-lg shadow">
              P
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Get your first card</h3>
              <p className="text-xs text-gray-500 mt-0.5">Unlock simple spending with your crypto.</p>
            </div>
          </div>
          <div className="p-4 pt-2">
            <span className="block py-2 px-0 rounded-full font-medium bg-cryptoCard-primary text-white w-full text-center text-sm hover-scale">
              Apply card
            </span>
          </div>
        </button>
      </section>

      {/* Transactions */}
      <section className="px-4 mb-12">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold tracking-tight">Transactions</h2>
          <button
            className="text-gray-500 hover:text-cryptoCard-primary rounded-full p-1"
            onClick={() => {
              setSelectedTransaction("all");
              setTransactionDrawerOpen(true);
            }}
          >
            <MoreHorizontal size={20} />
          </button>
        </div>
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white/80">
          {MOCK_TRANSACTIONS.map((transaction, index) => (
            <div
              key={index}
              className="cursor-pointer transition hover:bg-gray-50"
              onClick={() => {
                setSelectedTransaction(transaction);
                setTransactionDrawerOpen(true);
              }}
            >
              <TransactionItem
                merchant={transaction.merchant}
                amount={transaction.amount}
                date={transaction.date}
                status={transaction.status}
                cardLastFour={transaction.cardLastFour}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Drawers for all Home actions */}
      <DepositDrawer open={depositOpen} onClose={() => setDepositOpen(false)} />
      <SendDrawer open={sendOpen} onClose={() => setSendOpen(false)} />
      <ConvertDrawer open={convertOpen} onClose={() => setConvertOpen(false)} />
      <MoreDrawer open={moreOpen} onClose={() => setMoreOpen(false)} />

      <WalletDetailDrawer
        open={walletDrawerOpen}
        onClose={() => setWalletDrawerOpen(false)}
        wallet={selectedWallet}
      />

      <ApplyCardDrawer open={applyCardOpen} onClose={() => setApplyCardOpen(false)} />

      <TransactionDrawer
        open={transactionDrawerOpen}
        onClose={() => setTransactionDrawerOpen(false)}
        transaction={selectedTransaction}
      />
    </MobileLayout>
  );
};

export default Home;
