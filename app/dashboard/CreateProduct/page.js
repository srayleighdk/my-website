"use client";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

import ImageUpload from "@/app/components/Inputs/ImageUpload";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [productImages, setProductImages] = useState([]);

  console.log(productImages);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const reponse = await axios.post("/api/createProduct", {
        name: productName,
        price: price,
        description: description,
        images: productImages,
      });

      console.log("Product created:", reponse);
      // Reset form fields
      setProductName("");
      setProductImages([]);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div>
      <h1>Create Product</h1>

      <ImageUpload
        onChange={(value) => setProductImages((prev) => [...prev, value])}
        value={productImages}
      />
      {productImages && (
        <div className="flex flex-row">
          {productImages.map((item, index) => (
            <Image
              alt="plants"
              height={100}
              width={100}
              src={item}
              key={index}
            />
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName || ""}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price || ""}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
