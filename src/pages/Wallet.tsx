import { Plus, Trash2 } from "lucide-react";
import { Layout } from "@/components/Layout";

const bitcoinIcon =
  "https://cdn.builder.io/api/v1/image/assets/TEMP/786284157f0559da1095eb03addc40eeb02f0f1d";

const coins = [
  { name: "BITCOIN", amount: "BTC 0.00256" },
  { name: "BITCOIN 1", amount: "BTC 0.00256" },
  { name: "BITCOIN 2", amount: "BTC 0.00256" },
  { name: "BITCOIN 3", amount: "BTC 0.00256" },
  { name: "BITCOIN 4", amount: "BTC 0.00256" },
];

export const Wallet = () => {
  return (
    <Layout>
      <div className="w-full max-w-4xl">
        {/* Import Wallet Button */}
        <div className="flex justify-end mb-12">
          <button className="bg-wallet-button-bg border border-wallet-button-border rounded-md px-4 py-2 flex items-center gap-3 hover:bg-wallet-button-bg/80 transition-colors">
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
            Total Coins - 7
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
                  {coin.amount}
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
    </Layout>
  );
};

export default Wallet;
