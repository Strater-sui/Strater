import { ConnectModal, type BaseError } from "@suiet/wallet-kit";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Disconnected = () => {
  const [showConnectModal, setShowConnectModal] = useState(false);

  const handleConnectError = (error: BaseError) => {
    if (error) {
      toast.error("Cancelled");
    }
  };

  return (
    <ConnectModal
      open={showConnectModal}
      onOpenChange={(open) => setShowConnectModal(open)}
      onConnectError={handleConnectError}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="w-32 h-fit px-3 py-2 rounded-lg text-sm bg-[#2e79dc] font-semibold text-white"
      >
        Connect
      </motion.button>
    </ConnectModal>
  );
};

export default Disconnected;
