import '../styles/globals.css';
import { Poppins } from "next/font/google";
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';


export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});



export default function App({ Component, pageProps }: AppProps) {

  
  return (
    <ClerkProvider>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'var(--font-poppins)',
            colorPrimary: '#0077B6',
          },
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </ClerkProvider>
  );
}
