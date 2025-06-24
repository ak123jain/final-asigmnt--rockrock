import { Layout } from "@/components/Layout";

export const Transactions = () => {
  return (
    <Layout>
      <div className="w-full max-w-4xl">
        <div className="text-center py-20">
          <h1 className="text-wallet-text-primary text-2xl font-lato font-bold mb-4">
            Transaction History
          </h1>
          <p className="text-wallet-text-secondary text-sm">
            Your transaction history will appear here.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
