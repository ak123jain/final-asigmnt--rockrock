import { Wallet, ArrowRightLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const WalletSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      label: "Wallets",
      icon: Wallet,
      path: "/wallet",
      active: location.pathname === "/wallet" || location.pathname === "/",
    },
    {
      label: "Last Transactions",
      icon: ArrowRightLeft,
      path: "/transactions",
      active: location.pathname === "/transactions",
    },
  ];

  return (
    <div className="w-[199px] h-[604px] bg-wallet-sidebar-bg rounded-[10px] relative flex flex-col">
      {/* Navigation Items */}
      <div className="pt-12 flex-1">
        {menuItems.map((item) => (
          <div key={item.path} className="relative">
            {item.active && (
              <div className="absolute left-0 top-0 w-1 h-[38px] bg-wallet-highlight rounded-r-sm shadow-lg shadow-wallet-accent/30"></div>
            )}
            <Link
              to={item.path}
              className={cn(
                "flex items-center gap-4 px-6 py-3 transition-colors",
                "hover:bg-wallet-card-bg/50",
              )}
            >
              <div className="w-6 h-6 rounded bg-wallet-card-bg flex items-center justify-center">
                <item.icon
                  className={cn(
                    "w-4 h-4",
                    item.active ? "text-wallet-accent" : "text-white",
                  )}
                />
              </div>
              <span
                className={cn(
                  "text-sm font-lato font-bold",
                  item.active ? "text-wallet-accent" : "text-white",
                )}
              >
                {item.label}
              </span>
            </Link>
            <div className="mx-2 h-px bg-wallet-card-bg"></div>
          </div>
        ))}
      </div>

      {/* Support Button */}
      <div className="mt-auto">
        <div className="mx-0 mb-0 bg-wallet-support-bg rounded-b-[10px] px-6 py-3">
          <div className="bg-wallet-support-bg rounded-md px-6 py-2 text-center">
            <span className="text-wallet-support-text text-sm font-lato font-bold">
              Support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
