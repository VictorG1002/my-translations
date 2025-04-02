import "../styles/Main.css";
import { Poppins } from "next/font/google";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { IndexProvider } from "@/contexts";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isLoggingScreen =
    router.pathname === "/login" || router.pathname === "/register";

  return (
    <ClerkProvider>
      <IndexProvider>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "var(--font-poppins)",
              colorPrimary: "#0077B6",
            },
          }}
        >
          {!isLoggingScreen && <Header />}

          <Component {...pageProps} />
        </ConfigProvider>
      </IndexProvider>
    </ClerkProvider>
  );
}
