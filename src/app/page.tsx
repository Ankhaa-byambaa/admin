import {
  AddNewDishDialog,
  DishCardContainer,
  Layout,
} from "@/components/ui/home";
import { AddNewDishContainer } from "@/components/ui/home/AddNewDishContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-50 w-screen ">
      <Layout>
        <AddNewDishContainer />
      </Layout>
    </div>
  );
}
