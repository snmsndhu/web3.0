import React, { Children, useEffect, useState } from "react";
import { ethers } from "ehters";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contactAddress,
    contractABI,
    signer
  );

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvider = ({ Children }) => {
  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("please install metamask");
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.provider value={{ value: "test" }}>
      {Children}
    </TransactionContext.provider>
  );
};
