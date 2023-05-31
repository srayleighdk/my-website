import PopularCategoriesChild from "./PopularCategoriesChild";
const PopularCategories = () => {
  return (
    <div className="pt-10 p-2 md:px-10 lg:px-20">
      <h2 className="font-bold text-2xl text-center">Popular Categories</h2>
      <PopularCategoriesChild />
    </div>
  );
};

export default PopularCategories;
