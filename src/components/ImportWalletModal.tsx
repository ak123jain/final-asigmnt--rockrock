 import { X } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { wordlist } from "@scure/bip39/wordlists/english";
import * as bip39 from "@scure/bip39";

interface ImportWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImportWalletModal = ({
  isOpen,
  onClose,
}: ImportWalletModalProps) => {
  const [walletName, setWalletName] = useState("");
  const [mnemonic, setMnemonic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    const cleanedMnemonic = mnemonic.trim().toLowerCase().replace(/\s+/g, " ");

    // ✅ Validate mnemonic BEFORE sending
    if (!bip39.validateMnemonic(cleanedMnemonic, wordlist)) {
      setError("❌ Invalid mnemonic phrase. Please check and try again.");
      return; // ❌ Don't send to backend
    }

    // ✅ Only set loading AFTER validation passes
    setLoading(true);

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/wallet/createwallet`, {
        name: walletName,
        mnemonic: cleanedMnemonic,
      });

      console.log("Wallet Created:", data);
      setSuccess(true);
      setWalletName("");
      setMnemonic("");

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to import wallet");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-black/50 z-[1000]"
      onClick={onClose}
    >
      <div
        className="relative w-[545px] h-[383px] flex-shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Background */}
        <svg
          width="545"
          height="383"
          viewBox="0 0 545 383"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-0 w-[545px] h-[383px] flex-shrink-0"
        >
          <path
            d="M4.55198 0H540.448C541.655 0 542.813 0.578104 543.667 1.60714C544.52 2.63617 545 4.03184 545 5.48711V377.513C545 378.968 544.52 380.364 543.667 381.393C542.813 382.422 541.655 383 540.448 383H4.55198C3.34472 383 2.18691 382.422 1.33324 381.393C0.479582 380.364 0 378.968 0 377.513V5.48711C0 4.03184 0.479582 2.63617 1.33324 1.60714C2.18691 0.578104 3.34472 0 4.55198 0Z"
            fill="#171C23"
          />
        </svg>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute left-[505px] top-[23px] w-[14px] h-[14px] flex-shrink-0 cursor-pointer"
        >
          <X className="w-[14px] h-[14px] text-white" />
        </button>

        {/* Title */}
        <h2 className="absolute left-[199px] top-[41px] w-[147px] h-[23px] flex-shrink-0 text-white font-lato font-normal text-2xl text-center leading-normal">
          Import Wallet
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="absolute left-[63px] top-[90px] w-[420px] h-[252px]"
        >
          {/* Wallet Name */}
          <div className="absolute top-0 w-[420px]">
            <label className="text-[#a6a2a2] text-xs">
              Enter your wallet name :
            </label>
            <input
              type="text"
              value={walletName}
              onChange={(e) => setWalletName(e.target.value)}
              required
              className="mt-[5px] w-full h-[35px] rounded-[3px] border border-[rgba(197,197,197,0.27)] bg-[#20242b] px-3 text-white text-sm outline-none focus:border-[rgba(197,197,197,0.5)]"
            />
          </div>

          {/* Mnemonic */}
          <div className="absolute top-[70px] w-[420px]">
            <label className="text-[#a6a2a2] text-xs">
              Enter your Mnemonic :
            </label>
            <textarea
              value={mnemonic}
              onChange={(e) => setMnemonic(e.target.value)}
              required
              className="mt-[5px] w-full h-[90px] rounded-[3px] border border-[rgba(197,197,197,0.27)] bg-[#20242b] px-3 py-2 text-white text-sm resize-none outline-none focus:border-[rgba(197,197,197,0.5)]"
              placeholder="Enter your 12 or 24 word mnemonic phrase..."
            />
          </div>

          {/* Feedback */}
          {error && (
            <div className="absolute top-[185px] w-full text-center">
              <p className="bg-red-600/20 text-red-400 py-1 px-2 text-sm rounded">
                {error}
              </p>
            </div>
          )}
          {success && (
            <div className="absolute top-[185px] w-full text-center">
              <p className="bg-green-600/20 text-green-400 py-1 px-2 text-sm rounded">
                Wallet created successfully!
              </p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="absolute left-[167px] top-[220px] w-[86px] h-[32px] rounded-[4px] bg-[#db953c] hover:bg-[#c8863a] transition-colors text-white font-bold text-sm"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};
