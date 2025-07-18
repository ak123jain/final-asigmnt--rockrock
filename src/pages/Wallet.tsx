 import { Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "@/components/Layout";
import { ImportWalletModal } from "@/components/ImportWalletModal";

const bitcoinIcon =
  "https://cdn.builder.io/api/v1/image/assets/TEMP/786284157f0559da1095eb03addc40eeb02f0f1d";

export const Wallet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coins, setCoins] = useState([]);

  // ✅ Fetch wallet data on mount
  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/wallet/getwallet`);

        console.log("Wallet Data:", res.data);

        // If response is { wallets: [...] }
        const wallets = Array.isArray(res.data)
          ? res.data
          : res.data.wallets || [];

        setCoins(wallets);
      } catch (err) {
        console.error("Failed to fetch wallet:", err);
      }
    };

    fetchWallet();
  }, []);

  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto">
        {/* Import Wallet Button */}
        <div className="flex justify-end mb-12">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-wallet-button-bg border border-wallet-button-border rounded-md px-4 py-2 flex items-center gap-3 hover:bg-wallet-button-bg/80 transition-colors"
          >
            <div className="w-4 h-4 bg-wallet-accent-muted rounded-full flex items-center justify-center">
              <Plus className="w-3 h-3 text-white" />
            </div>
            <span className="text-wallet-button-text text-xs font-lato font-bold">
              IMPORT WALLET
            </span>
          </button>
        </div>

        {/* Total Coins Header */}
        <div className="mb-6">
          <h2 className="text-wallet-text-secondary text-xs font-lato font-bold mb-4 ml-8">
            Total Coins - {coins.length}
          </h2>
          <div className="w-full h-px bg-wallet-border"></div>
        </div>

        {/* Coins Table */}
        <div className="space-y-0">
          {/* Table Header */}
          <div className="flex items-center px-5 py-3">
            <div className="flex-1">
              <span className="text-wallet-text-muted text-xs font-lato font-bold">
                Coin
              </span>
            </div>
            <div className="w-32 text-center">
              <span className="text-wallet-text-muted text-xs font-lato font-bold">
                Holding
              </span>
            </div>
            <div className="w-24 text-center">
              <span className="text-wallet-text-muted text-xs font-lato font-bold">
                Actions
              </span>
            </div>
          </div>

          {/* Coin Rows */}
          {coins.map((coin, index) => (
            <div
              key={index}
              className="bg-wallet-card-bg rounded-sm h-[50px] flex items-center px-5"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={bitcoinIcon}
                    alt="Bitcoin"
                    className="w-full h-full object-cover transform -rotate-12"
                  />
                </div>
                <span className="text-wallet-text-secondary text-xs font-lato font-bold">
                  {coin.name}
                </span>
              </div>
              <div className="w-32 text-center">
                <span className="text-wallet-text-secondary text-xs font-lato font-bold">
                  {coin.balance}
                </span>
              </div>
              <div className="w-24 text-center">
                <button className="w-5 h-5 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
                  <Trash2 className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Import Wallet Modal */}
      <ImportWalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Layout>
  );
};

export default Wallet;
