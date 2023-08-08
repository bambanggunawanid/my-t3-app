import { SessionProvider } from "next-auth/react";
import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { api } from "y/utils/api";
import "y/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
      <Analytics />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
