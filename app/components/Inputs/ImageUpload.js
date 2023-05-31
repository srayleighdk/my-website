"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

const uploadPreset = "xqttsjap";

const ImageUpload = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        function handleOnClick(e) {
          e.preventDefault();
          open();
        }
        return (
          <button className="btn" onClick={handleOnClick}>
            Upload an Image
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
