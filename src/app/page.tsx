import { AddNewDishDialog, DishCardContainer } from "@/components/ui/home";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-10 ">
      <div className="background/bg-background w-screen h-[582px]">
        <AddNewDishDialog />
        <DishCardContainer />
      </div>
    </div>
  );
}
