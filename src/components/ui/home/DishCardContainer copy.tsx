"use client";
import { useEffect, useState } from "react";
import { DishCard } from "./DishCard";
import { DishType } from "@/types";
import { DishCategory } from "./DishCategory";
//fetch eer data aa awaad map hiideg bh // dish foods add edit delete
export function DishCardContainer() {
  const [category, setCategory] = useState(``);

  function loadDishes() {
    fetch(`http://localhost:3001`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
    console.log("DATA", category);
  }
  useEffect(() => {
    loadDishes;
  }, []);
  return (
    <>
      <div className="flex gap-5">
        <DishCategory categoryName="ji" />
      </div>
    </>
  );
}
