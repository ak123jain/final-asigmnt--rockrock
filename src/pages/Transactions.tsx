import { Layout } from "@/components/Layout";

const bitcoinIcon =
  "https://cdn.builder.io/api/v1/image/assets/TEMP/b81e97e7dc292b3fcc25811656d5e3f5b53a6abe";

const transactions = [
  {
    date: "12/11/2020",
    time: "10:31:20 AM",
    wallet: "Aru",
    amount: "0.5268 BTC",
    result: "RECEIVED",
    status: "SUCCESS",
  },
  {
    date: "12/11/2020",
    time: "10:31:20 AM",
    wallet: "Aru",
    amount: "0.5268 BTC",
    result: "RECEIVED",
    status: "SUCCESS",
  },
  {
    date: "12/11/2020",
    time: "10:31:20 AM",
    wallet: "Aru",
    amount: "0.5268 BTC",
    result: "RECEIVED",
    status: "SUCCESS",
  },
  {
    date: "12/11/2020",
    time: "10:31:20 AM",
    wallet: "Aru",
    amount: "0.5268 BTC",
    result: "RECEIVED",
    status: "SUCCESS",
  },
  {
    date: "12/11/2020",
    time: "10:31:20 AM",
    wallet: "Aru",
    amount: "0.5268 BTC",
    result: "RECEIVED",
    status: "SUCCESS",
  },
  {
    date: "12/11/2020",
    time: "10:31:20 AM",
    wallet: "Aru",
    amount: "0.5268 BTC",
    result: "RECEIVED",
    status: "SUCCESS",
  },
];

const ReceivedArrow = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-[#8484F1] stroke-wallet-card-bg stroke-[0.5px]"
  >
    <path
      d="M6.80193 8.72698C7.20077 8.7142 7.50044 8.42434 7.48714 8.06446C7.47592 7.76304 7.22071 7.51099 6.90206 7.46131L6.7618 7.45369L6.75165 7.45404L4.12326 7.44551L3.52478 7.44448L9.42422 1.74045C9.69409 1.47948 9.68287 1.07561 9.39896 0.836552C9.11148 0.594821 8.65532 0.611076 8.38887 0.868647L2.44941 6.61136L2.44569 6.0177L2.43209 3.80665C2.40882 3.45133 2.07325 3.17656 1.69707 3.18902C1.29817 3.2018 0.998463 3.49157 1.01186 3.85153L1.01195 3.85415L1.11294 8.18597C1.12747 8.52913 1.45871 8.80669 1.8382 8.79412L1.844 8.79392L6.80193 8.72698Z"
      fill="#8484F1"
      stroke="#161C23"
      strokeWidth="0.5"
    />
  </svg>
);

export const Transactions = () => {
  return (
    <Layout>
      <div className="w-full max-w-4xl">
        <div className="space-y-0">
          {/* Table Header */}
          <div className="flex items-center px-5 py-3 mb-6">
            <div className="w-16">
              <span className="text-[#7e7d7d] text-xs font-lato font-bold">
                Coin
              </span>
            </div>
            <div className="w-48 ml-4">
              <span className="text-[#7e7d7d] text-xs font-lato font-bold">
                Wallet
              </span>
            </div>
            <div className="w-32 text-center">
              <span className="text-[#7e7d7d] text-xs font-lato font-bold">
                Amount
              </span>
            </div>
            <div className="w-24 text-center">
              <span className="text-[#7e7d7d] text-xs font-lato font-bold">
                Result
              </span>
            </div>
            <div className="w-20 text-center">
              <span className="text-[#7e7d7d] text-xs font-lato font-bold">
                Status
              </span>
            </div>
          </div>

          {/* Transaction Rows */}
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="bg-wallet-card-bg rounded-sm h-[50px] flex items-center px-4 mb-0"
            >
              {/* Coin Column */}
              <div className="flex items-center gap-3 w-16">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <img
                    src={bitcoinIcon}
                    alt="Bitcoin"
                    className="w-full h-full object-cover transform -rotate-12"
                  />
                </div>
              </div>

              {/* Date/Time Column */}
              <div className="w-48 ml-4">
                <div className="flex flex-col">
                  <span className="text-wallet-text-secondary text-xs font-lato font-bold leading-normal">
                    {transaction.date}
                  </span>
                  <span className="text-wallet-text-secondary text-[10px] font-lato font-normal leading-normal">
                    {transaction.time}
                  </span>
                </div>
              </div>

              {/* Wallet Column */}
              <div className="w-32 text-center">
                <span className="text-wallet-text-secondary text-xs font-lato font-bold">
                  {transaction.wallet}
                </span>
              </div>

              {/* Amount Column */}
              <div className="w-24 text-center">
                <span className="text-wallet-text-secondary text-xs font-lato font-normal">
                  {transaction.amount}
                </span>
              </div>

              {/* Result Column */}
              <div className="w-24 text-center">
                <div className="flex items-center justify-center gap-2">
                  <ReceivedArrow />
                  <span className="text-[#8484f1] text-[13px] font-lato font-bold leading-normal">
                    {transaction.result}
                  </span>
                </div>
              </div>

              {/* Status Column */}
              <div className="w-20 text-center">
                <span className="text-[#8484f1] text-[13px] font-lato font-bold leading-normal">
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
