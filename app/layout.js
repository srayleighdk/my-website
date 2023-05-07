import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Navbar/Navbar";
import RegisterModal from "./components/Modal/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/Modal/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/Modal/RentModal";

import { NextAuthProvider } from "./providers/nextAuthProvider";

export const metadata = {
  title: "iXanh Website",
  description: "Create by me",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        <NextAuthProvider>
          <div className="pb-20 pt-28">{children}</div>
        </NextAuthProvider>
        <Footer />
      </body>
    </html>
  );
}
