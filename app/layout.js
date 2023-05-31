import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Navbar/Navbar";
import RegisterModal from "./components/Modal/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/Modal/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/Modal/RentModal";
import BannerSlider from "./components/BannerSlider/BannerSlider";
import TrustBoxBanner from "./components/TrustBoxBanner/TrusBoxBanner";
import HelpBanner from "./components/HelpBanner/HelpBanner";

import { NextAuthProvider } from "./providers/nextAuthProvider";
import CartDrawer from "./components/Drawer/CartDrawer";

export const metadata = {
  title: "iXanh Website",
  description: "Create by me",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();
  console.log(currentUser);
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="drawer drawer-end">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-gray-100 text-black">
            <ToasterProvider />
            <RentModal />
            <LoginModal />
            <RegisterModal />
            <Navbar currentUser={currentUser} />
            <BannerSlider />
            <NextAuthProvider>
              <div>{children}</div>
            </NextAuthProvider>
            <TrustBoxBanner />
            <HelpBanner />
            <Footer />
          </div>
          <CartDrawer />
        </div>
      </body>
    </html>
  );
}
