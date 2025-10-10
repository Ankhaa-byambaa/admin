type DishCategoryProps = {
  categoryName: string;
};
export function DishCategory({ categoryName }: DishCategoryProps) {
  return <>{categoryName}</>;
}
