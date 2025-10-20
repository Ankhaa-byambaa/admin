import { AddNewDishDialog } from "./AddNewDishDialog";
import { DishCard } from "./DishCard";
import { DishCardContainer } from "./DishCardContainer";

export function AddNewDishContainer() {
  return (
    <div className="w-full rounded-md bg-background py-10 px-10 h-screen my-15">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-20px">Appetizers (1)</p>
        <div className="flex flex-wrap gap-4">
          <AddNewDishDialog />
          <DishCard
            name={`Grilled Chicken cobb salad`}
            descrription={
              "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar."
            }
            url={`food.jpeg`}
            price="12.99"
          />
        </div>
      </div>

      {/* <DishCardContainer /> */}
    </div>
  );
}
