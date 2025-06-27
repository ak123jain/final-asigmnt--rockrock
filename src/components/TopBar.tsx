 import { RotateCcw } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export const TopBar = () => {
  const [syncStatus, setSyncStatus] = useState("Synced");
  const [syncMessage, setSyncMessage] = useState(""); // ✨ State for the visible message

  const handleSync = async () => {
  try {
    setSyncStatus("Syncing...");
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/wallet/sync`);
    console.log("Sync response:", response.data.message);
     if (response.data.message) {
       window.alert(response.data.message);
    } else {
      alert("✅ Wallet synced successfully!"); // fallback
    }
    setSyncStatus("Synced");
     
  } catch (error) {
    console.error("Sync failed:", error);
    setSyncStatus("Failed");
    alert("❌ Sync failed. Please try again."); // 🔴 show error popup
  }
};

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="w-full h-10 bg-wallet-dark-bg relative">
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-wallet-accent text-sm font-lato font-normal cursor-pointer"
          onClick={handleSync}
        >
          <RotateCcw className="w-4 h-4" />
          <span>{syncStatus}</span>
        </div>
        <div className="absolute bottom-0 w-full h-px bg-wallet-border"></div>
      </div>

      {/* ✨ Sync Message */}
       {syncMessage && (
  <div className="text-center bg-green-100 text-green-800 text-sm mt-2 py-2 px-4 rounded-md shadow font-medium transition-all duration-300 w-fit mx-auto">
    {syncMessage}
  </div>
)}
    </div>
  );
};
