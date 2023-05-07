"use client";
import Image from "next/image";
import avatar from "../../public/images/placeholder.png";

const Avatar = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="Avatar"
      src={src || avatar}
    />
  );
};

export default Avatar;
