import Image from "next/image";
import Link from "next/link";
import IconSocial from "../IconSocial/IconSocial";
import iconZalo from "../../../public/images/Logo-ZaloPay-Square.webp";
import iconMomo from "../../../public/images/Logo-MoMo-Square.png";
export default function Footer() {
  return (
    <div className="footer bg-primaryColor">
      <section className="px-1">
        <h2 className="py-3 font-bold">Everything House Plants</h2>
        <p className="font-light text-sm">
          We're your online houseplant destination. We offer a wide range of
          houseplants and accessories shipped directly from our (greem)house to
          yours!
        </p>
        <div className="border-b-2 border-black w-full pt-5"></div>
      </section>
      <section className="px-1">
        <h2 className="py-3 font-bold">Follow us</h2>
        <IconSocial />
        <div className="border-b-2 border-black w-full pt-5"></div>
      </section>
      <section className="px-1">
        <h2 className="py-3 font-bold">@houseplantshop</h2>
        <p>Connect with us on social and share your plants with #sharemyhps</p>
        <div className="border-b-2 border-black w-full pt-5"></div>
      </section>
      <section className="p-4 flex justify-center gap-x-3 ">
        <Image src={iconMomo} alt="icon Momo" height={20} width={20} />
        <Image src={iconZalo} alt="icon Zalo" height={20} width={20} />
      </section>
      <section>
        <ul className="flex flex-wrap px-3 gap-x-4 justify-center">
          <li>
            <Link href="#">Shop</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Plant Care</Link>
          </li>
          <li>
            <Link href="#">FAQ</Link>
          </li>
          <li>
            <Link href="#">Shipping</Link>
          </li>
          <li>
            <Link href="#">Terms and Conditions</Link>
          </li>
          <li>
            <Link href="#">Shop</Link>
          </li>
        </ul>
        <p className="text-center">Copytight © 2023 House Plant Shop.</p>
        <p className="text-center">Powered by Me</p>
      </section>
    </div>
  );
}
