import { useState } from "react";
import {
  FiHome,
  FiPlusSquare,
  FiFileText,
  FiMessageSquare,
  FiBarChart2,
  FiCreditCard,
  FiPocket,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import turnupLogo from "@/assets/images/turnupLogo.png";

interface SidebarProps {
  activeNav: string;
  onNavChange: (nav: string) => void;
}

const navItems = [
  { name: "Dashboard", icon: FiHome },
  { name: "Create", icon: FiPlusSquare },
  { name: "Manage Post", icon: FiFileText },
  { name: "Chat", icon: FiMessageSquare },
  { name: "Analysis", icon: FiBarChart2 },
  { name: "Wallet", icon: FiCreditCard },
  { name: "Ticket", icon: FiPocket },
  { name: "Settings", icon: FiSettings },
  { name: "Logout", icon: FiLogOut },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeNav, onNavChange }) => {
  return (
    <div className="w-64 bg-white shadow-sm">
      <div className="p-6">
        <img src={turnupLogo.src} alt="Turnupz Logo" className="h-8" />
      </div>
      <nav className="px-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.name}>
                <button
                  onClick={() => onNavChange(item.name)}
                  className={`w-full text-left flex items-center py-3 px-4 rounded-lg transition-colors ${
                    activeNav === item.name
                      ? "bg-[#024C6B] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <IconComponent className="mr-3 h-5 w-5" />
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
