import PopularCategoriesItem from "./PopularCategoriesItem";

const PopularCategoriesChild = () => {
  return (
    <div className="grid lg:grid-cols-4 lg:gap-4 grid-cols-2 gap-4">
      <PopularCategoriesItem />
    </div>
  );
};

export default PopularCategoriesChild;
