"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import iconFacebook from "../../../public/images/facebook.svg"
import iconTwitter from "../../../public/images/twitter.svg"
import iconInstagram from "../../../public/images/instagram.svg"

const IconSocial = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent;
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
    }
  }, []);

  const appUrls = {
    facebook: 'fb://houseplantshop',
    twitter: 'twitter://HousePlantShopp',
    instagram: 'instagram://houseplantshop',
  };
  const webUrls = {
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/',
  };

  const handleClick = (url) => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.onload = () => {
      window.location = url;
    };
    iframe.src = url;
    document.body.appendChild(iframe);

    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 3000);
  };

  if (isMobile) {
    return (
      <div className="flex items-center space-x-4">
        <Link href="#" onClick={() => handleClick(appUrls.facebook)}>
            <Image src={iconFacebook} alt="Fackbook logo" width={20} height={20}/>
        </Link>
        <Link href="#" onClick={() => handleClick(appUrls.twitter)}>
            <Image src={iconTwitter} alt="Twitter logo" width={20} height={20}/>
        </Link>
        <Link href="#" onClick={() => handleClick(appUrls.instagram)}>
            <Image src={iconInstagram} alt="Instagram logo" width={20} height={20}/>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <Link href={webUrls.facebook}>
          <Image src={iconFacebook} alt="Fackbook logo" width={20} height={20}/>
      </Link>
      <Link href={webUrls.twitter}>
          <Image src={iconTwitter} alt="Twitter logo" width={20} height={20}/>
      </Link>
      <Link href={webUrls.instagram}>
          <Image src={iconInstagram} alt="Instagram logo" width={20} height={20}/>
      </Link>
    </div>
  );
};

export default IconSocial;
