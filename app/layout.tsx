import type { Metadata } from "next";
import "./globals.css";
import 'react-toastify/ReactToastify.css';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ContextProvider from "./utils/contextProvider";
import { cookies } from "next/headers";
import { ToastContainer } from "react-toastify";
import { ActiveItemProvider } from "./utils/ActiveItemContext";
import Refresh from "./(common)/refresh";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Dev Community",
  description: "This is a community of developers. Powered by SHSOFTVINA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const userToken = cookieStore.get("userToken");
  const refreshToken = cookieStore.get("refreshToken");
  return (
    <ContextProvider initialRefreshToken={refreshToken ? refreshToken.value : ""} initialToken={userToken ? userToken?.value : ""}>
      <ActiveItemProvider>
        <html lang="en">
          <Head>
            <title>My page title</title>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          </Head>
          <body suppressHydrationWarning={true}>
            <ToastContainer limit={1}></ToastContainer>
            <AntdRegistry>{children}</AntdRegistry>
            <Refresh />
          </body>
        </html>
      </ActiveItemProvider>
    </ContextProvider>
  );
}
