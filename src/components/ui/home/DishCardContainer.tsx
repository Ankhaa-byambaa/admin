"use client";
import { useEffect, useState } from "react";
import { DishCard } from "./DishCard";
import { DishType } from "@/types";
//fetch eer data aa awaad map hiideg bh // dish foods add edit delete
export function DishCardContainer() {
  const [newDish, setNewDish] = useState();
  const [dish, setDish] = useState<
    {
      id: string;
      name: string;
      price: string;
      ingredients: string;
      url: string;
    }[]
  >([]);

  function loadDishes() {
    fetch(`http://localhost:3001`)
      .then((res) => res.json())
      .then((data) => setDish(data));
    console.log("DATA", dish);
  }
  useEffect(() => {
    loadDishes;
  }, []);
  return (
    <>
      <div className="flex gap-5"></div>
      {dish.map((dish) => {
        <div key={dish.id}>
          <DishCard
            name={`${dish.name}`}
            descrription={`${dish.ingredients}`}
            url={`${dish.url}`}
            price={`${dish.price}`}
          />
        </div>;
      })}
    </>
  );
}
