import "../styles/tailwnd.scss";
import { Poppins } from "@next/font/google";

import Layout from "../components/default/layout";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div className={poppins.className}>
        <Layout>
          <main>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </main>
        </Layout>
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
