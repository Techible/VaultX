
import React, { useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import { Mail, Gift, Ticket, BookOpen, Users, MessageCircle } from "lucide-react";
import HubFeatureDrawer from "@/components/HubFeatureDrawer";

interface Feature {
  label: string;
  icon: React.ReactNode;
  description?: string;
  drawerTitle?: string;
}

const featureMap: Record<string, Feature> = {
  Referral: {
    label: "Referral",
    icon: <Mail size={24} />,
    description: "Earn rewards by referring friends.",
    drawerTitle: "Refer a Friend",
  },
  Gift: {
    label: "Gift",
    icon: <Gift size={24} />,
    description: "Send a crypto gift to anyone.",
    drawerTitle: "Crypto Gift",
  },
  Vouchers: {
    label: "Vouchers",
    icon: <Ticket size={24} />,
    description: "Use or redeem vouchers for rewards.",
    drawerTitle: "Crypto Vouchers",
  },
  Apply: {
    label: "Apply",
    icon: <div className="w-6 h-4 bg-red-400 rounded-sm" />,
    description: "Apply for a new CryptoCard.",
    drawerTitle: "Apply for Card",
  },
  Priority: {
    label: "Priority",
    icon: <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-md">💰</div>,
    description: "Get priority processing for your card.",
    drawerTitle: "Priority Upgrade",
  },
  Deposit: {
    label: "Deposit",
    icon: <span className="text-xl">💳</span>,
    description: "Deposit funds to your wallet.",
    drawerTitle: "Deposit",
  },
  Withdraw: {
    label: "Withdraw",
    icon: <span className="text-xl">💸</span>,
    description: "Withdraw from your wallet to your bank.",
    drawerTitle: "Withdraw",
  },
  Send: {
    label: "Send",
    icon: <span className="text-xl">📤</span>,
    description: "Send crypto to others.",
    drawerTitle: "Send Crypto",
  },
  Receive: {
    label: "Receive",
    icon: <span className="text-xl">📥</span>,
    description: "Receive crypto payments.",
    drawerTitle: "Receive Crypto",
  },
  Learn: {
    label: "Learn",
    icon: <BookOpen size={24} />,
    description: "Crypto tutorials and guides.",
    drawerTitle: "Learn about Crypto",
  },
  Community: {
    label: "Community",
    icon: <Users size={24} />,
    description: "Join the CryptoCard community.",
    drawerTitle: "Community",
  },
  Chat: {
    label: "Chat",
    icon: <MessageCircle size={24} />,
    description: "Chat with support or users.",
    drawerTitle: "Support Chat",
  },
};

interface CategoryItemProps {
  featureKey: keyof typeof featureMap;
  onClick: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ featureKey, onClick }) => {
  const feature = featureMap[featureKey];
  return (
    <button
      className="flex flex-col items-center focus:outline-none"
      onClick={onClick}
      aria-label={feature.label}
      tabIndex={0}
      type="button"
    >
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2 hover:scale-105 hover:bg-gray-200 transition-transform duration-200 shadow-sm">
        {feature.icon}
      </div>
      <span className="text-xs font-medium">{feature.label}</span>
    </button>
  );
};

const HubPage: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<keyof typeof featureMap | null>(null);

  const handleOpenDrawer = (featureKey: keyof typeof featureMap) => {
    setActiveFeature(featureKey);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setTimeout(() => setActiveFeature(null), 250);
  };

  return (
    <MobileLayout activeTab="hub">
      <header className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold">Hub</h1>
      </header>

      <section className="px-4 mb-6">
        <h2 className="text-lg font-bold mb-4">Popular</h2>
        <div className="grid grid-cols-3 gap-4">
          <CategoryItem featureKey="Referral" onClick={() => handleOpenDrawer("Referral")} />
          <CategoryItem featureKey="Gift" onClick={() => handleOpenDrawer("Gift")} />
          <CategoryItem featureKey="Vouchers" onClick={() => handleOpenDrawer("Vouchers")} />
        </div>
      </section>

      <section className="px-4 mb-6">
        <h2 className="text-lg font-bold mb-4">Card</h2>
        <div className="grid grid-cols-3 gap-4">
          <CategoryItem featureKey="Apply" onClick={() => handleOpenDrawer("Apply")} />
          <CategoryItem featureKey="Priority" onClick={() => handleOpenDrawer("Priority")} />
        </div>
      </section>

      <section className="px-4 mb-6">
        <h2 className="text-lg font-bold mb-4">Transaction</h2>
        <div className="grid grid-cols-4 gap-4">
          <CategoryItem featureKey="Deposit" onClick={() => handleOpenDrawer("Deposit")} />
          <CategoryItem featureKey="Withdraw" onClick={() => handleOpenDrawer("Withdraw")} />
          <CategoryItem featureKey="Send" onClick={() => handleOpenDrawer("Send")} />
          <CategoryItem featureKey="Receive" onClick={() => handleOpenDrawer("Receive")} />
        </div>
      </section>

      <section className="px-4 mb-8">
        <h2 className="text-lg font-bold mb-4">Support</h2>
        <div className="grid grid-cols-3 gap-4">
          <CategoryItem featureKey="Learn" onClick={() => handleOpenDrawer("Learn")} />
          <CategoryItem featureKey="Community" onClick={() => handleOpenDrawer("Community")} />
          <CategoryItem featureKey="Chat" onClick={() => handleOpenDrawer("Chat")} />
        </div>
      </section>

      {activeFeature && (
        <HubFeatureDrawer
          open={drawerOpen}
          onOpenChange={open => { if (!open) handleCloseDrawer() }}
          title={featureMap[activeFeature].drawerTitle || featureMap[activeFeature].label}
          description={featureMap[activeFeature].description}
        >
          <div className="text-sm text-gray-600">
            This is a placeholder for <span className="font-semibold">{featureMap[activeFeature].label}</span> feature.
            <br />Implement the flow as needed.
          </div>
        </HubFeatureDrawer>
      )}
    </MobileLayout>
  );
};

export default HubPage;
