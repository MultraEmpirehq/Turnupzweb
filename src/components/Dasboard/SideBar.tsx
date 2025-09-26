"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { ConfirmModal } from "@/components/Modals/ConfirmModal";

interface SidebarProps {
  activeNav: string;
  onNavChange: (nav: string) => void;
}

const navItems = [
  { name: "Dashboard", icon: FiHome, path: "/dashboard" },
  { name: "Create", icon: FiPlusSquare, path: "/create" },
  { name: "Manage Post", icon: FiFileText, path: "/manage-post" },
  { name: "Chat", icon: FiMessageSquare, path: "/chat" },
  { name: "Analysis", icon: FiBarChart2, path: "/analysis" },
  { name: "Wallet", icon: FiCreditCard, path: "/wallet" },
  { name: "Ticket", icon: FiPocket, path: "/ticket" },
  { name: "Settings", icon: FiSettings, path: "/settings" },
  { name: "Logout", icon: FiLogOut, path: "/sign-in" }, // handled separately
];

export const Sidebar: React.FC<SidebarProps> = ({ activeNav, onNavChange }) => {
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleNavClick = (item: (typeof navItems)[number]) => {
    if (item.name === "Logout") {
      setShowLogoutModal(true);
    } else {
      router.push(item.path); // navigate to the route
    }
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    router.push("/sign-in");
  };

  return (
    <>
      {/* Sidebar */}
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
                    onClick={() => handleNavClick(item)}
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

      {/* Reusable Confirmation Modal */}
      <ConfirmModal
        isOpen={showLogoutModal}
        title="Confirm Logout"
        message="Are you sure you want to logout?"
        confirmText="Yes"
        cancelText="Cancel"
        onConfirm={confirmLogout}
        onCancel={() => setShowLogoutModal(false)}
      />
    </>
  );
};
