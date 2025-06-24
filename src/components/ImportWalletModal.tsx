import { X } from "lucide-react";
import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Wallet Name:", walletName);
    console.log("Mnemonic:", mnemonic);
    onClose();
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

        {/* Form Content */}
        <form
          onSubmit={handleSubmit}
          className="absolute left-[63px] top-[90px] w-[420px] h-[252px] flex-shrink-0"
        >
          {/* Wallet Name Input */}
          <div className="absolute left-0 top-0 w-[420px] h-[54px] flex-shrink-0">
            <label className="absolute left-[3px] top-0 w-[127px] h-[14px] text-[#a6a2a2] font-lato font-normal text-xs leading-normal">
              Enter your wallet name :
            </label>
            <input
              type="text"
              value={walletName}
              onChange={(e) => setWalletName(e.target.value)}
              className="absolute left-0 top-[19px] w-[420px] h-[35px] flex-shrink-0 rounded-[3px] border border-[rgba(197,197,197,0.27)] bg-[#20242b] px-3 text-white font-lato text-sm outline-none focus:border-[rgba(197,197,197,0.5)]"
            />
          </div>

          {/* Mnemonic Textarea */}
          <div className="absolute left-0 top-[70px] w-[420px] h-[109px] flex-shrink-0">
            <label className="absolute left-[3px] top-0 w-[121px] h-[13px] flex-shrink-0 text-[#a6a2a2] font-lato font-normal text-xs leading-normal">
              Enter your Mnemonic :
            </label>
            <textarea
              value={mnemonic}
              onChange={(e) => setMnemonic(e.target.value)}
              className="absolute left-0 top-[19px] w-[420px] h-[90px] flex-shrink-0 rounded-[3px] border border-[rgba(197,197,197,0.27)] bg-[#20242b] px-3 py-2 text-white font-lato text-sm resize-none outline-none focus:border-[rgba(197,197,197,0.5)]"
              placeholder="Enter your 12 or 24 word mnemonic phrase..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="absolute left-[167px] top-[220px] w-[86px] h-[32px] flex-shrink-0 cursor-pointer rounded-[4px] bg-[#db953c] hover:bg-[#c8863a] transition-colors"
          >
            <span className="text-white font-lato font-bold text-sm text-right leading-normal">
              Submit
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};
