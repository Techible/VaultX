
import React from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import { Award, Gift, Ticket } from "lucide-react";

const BenefitsPage: React.FC = () => {
  return (
    <MobileLayout activeTab="benefits">
      <header className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold">Benefits</h1>
      </header>

      <section className="px-4 mb-6">
        <div className="bg-gray-50 rounded-2xl p-6 text-center">
          <Award size={48} className="mx-auto mb-4 text-cryptoCard-primary" />
          <h2 className="text-xl font-bold mb-2">Exclusive Rewards</h2>
          <p className="text-gray-600">
            Earn crypto rewards on every purchase with your CryptoCard
          </p>
        </div>
      </section>

      <section className="px-4 mb-6">
        <h2 className="text-lg font-bold mb-4">Available Benefits</h2>
        
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <Gift className="text-red-500" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Refer Friends Get Rewards</h3>
              <p className="text-sm text-gray-500">Earn $25 for every friend who signs up</p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
              <Ticket className="text-yellow-500" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Flash Sale: 50% OFF</h3>
              <p className="text-sm text-gray-500">Limited time offer on virtual cards</p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Award className="text-blue-500" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Priority Access</h3>
              <p className="text-sm text-gray-500">Early access to new features and products</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 mb-8">
        <div className="bg-cryptoCard-light rounded-xl p-4">
          <h3 className="font-medium mb-2">Coming Soon</h3>
          <p className="text-sm text-gray-600 mb-2">
            More exciting benefits are on the way! Stay tuned for updates.
          </p>
        </div>
      </section>
    </MobileLayout>
  );
};

export default BenefitsPage;
