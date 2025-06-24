import { RotateCcw } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="w-full h-10 bg-wallet-dark-bg relative">
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-wallet-accent text-sm font-lato font-normal">
        <RotateCcw className="w-4 h-4" />
        <span>Synced</span>
      </div>
      <div className="absolute bottom-0 w-full h-px bg-wallet-border"></div>
    </div>
  );
};
