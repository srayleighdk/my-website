"use client";

import CategoryBox from "./CategoryBox";

import Container from "../Container";
import { RiPlantFill } from "react-icons/ri";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "All plants",
    icon: RiPlantFill,
    description: "Nothing to description",
  },
  {
    label: "Baby plants",
    icon: RiPlantFill,
    description: "Nothing to description",
  },
  {
    label: "New releases",
    icon: RiPlantFill,
    description: "Nothing to description",
  },
  {
    label: "Pots",
    icon: RiPlantFill,
    description: "Nothing to description",
  },
  {
    label: "Sales",
    icon: RiPlantFill,
    description: "Nothing to description",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/products";

  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
