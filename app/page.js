"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ERC20Mint from "@/components/erc20mint";
import { useState } from "react";

export default function Home() {
  const [accounts, setAccounts] = useState([]);

  return (
    <>
      <div className="bg-erc20mint bg-cover min-h-screen bg-no-repeat">
        <Navbar accounts={accounts} setAccounts={setAccounts} />
        <ERC20Mint accounts={accounts} setAccounts={setAccounts} />
        <Footer />
      </div>
    </>
  );
}
