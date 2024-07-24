import { useState, useEffect } from "react";
import { getAvatarUrl } from "../functions/getAvatarUrl";
import { WalletAdapretNetwork } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import BigNumber from "bignumber.js";

export const useCashApp = () => {
  const { connected, publicKey } = useWallet();
  const [avatar, setAvatar] = useState("");
  const [userAddress, setUserAddress] = useState(
    "11111111111111111111111111111111"
  );

  // Get Avatar based on the userAddress
  useEffect(() => {
    if (connected) {
      setAvatar(getAvatarUrl(publicKey.toString()));
      setUserAddress(publicKey.toString());
    }
  }, [connected]);

  return {
    connected,
    publicKey,
    avatar,
    userAddress,
  };
};
