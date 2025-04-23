
import { Link } from "react-router-dom";
import { Home, CreditCard, Award, LayoutGrid } from "lucide-react";

type BottomNavigationProps = {
  activeTab: "home" | "card" | "benefits" | "hub";
};

const BottomNavigation = ({ activeTab }: BottomNavigationProps) => {
  const tabs = [
    { 
      name: "home", 
      label: "Home", 
      icon: Home, 
      path: "/" 
    },
    { 
      name: "card", 
      label: "Card", 
      icon: CreditCard, 
      path: "/card" 
    },
    { 
      name: "benefits", 
      label: "Benefits", 
      icon: Award, 
      path: "/benefits" 
    },
    { 
      name: "hub", 
      label: "Hub", 
      icon: LayoutGrid, 
      path: "/hub" 
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex items-center justify-around h-16 px-2 z-50">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          to={tab.path}
          className={`flex flex-col items-center justify-center p-2 flex-1 ${
            activeTab === tab.name 
              ? "text-cryptoCard-primary" 
              : "text-gray-500"
          }`}
        >
          <tab.icon size={20} />
          <span className="text-xs mt-1">{tab.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavigation;
