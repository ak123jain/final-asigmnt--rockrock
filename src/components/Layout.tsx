import { ReactNode } from "react";
import { TopBar } from "./TopBar";
import { WalletSidebar } from "./WalletSidebar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <div className="bg-wallet-dark-bg min-h-[calc(100vh-40px)] flex">
        <div className="p-5 pr-0">
          <WalletSidebar />
        </div>
        <div className="flex-1 p-5 pl-8">{children}</div>
      </div>
    </div>
  );
};
