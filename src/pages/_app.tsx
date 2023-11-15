import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const SuiWalletProvider = dynamic(() => import("../providers/WalletProvider"), {
  ssr: false,
});
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiWalletProvider>
        <Component {...pageProps} />
      </SuiWalletProvider>
    </QueryClientProvider>
  );
}
