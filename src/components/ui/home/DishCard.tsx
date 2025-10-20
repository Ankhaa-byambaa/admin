import { useState } from "react";
import { Button } from "../button";

type DishCardProps = {
  name: string;
  descrription: string;
  url: any;
  price: string;
};

export function DishCard({ name, descrription, url, price }: DishCardProps) {
  return (
    <>
      <div className="w-[270px] h-[241px] flex flex-col gap-2 py-6 border border-border items-center justify-center rounded-[20px] ">
        <Button
          // onClick={""}
          className="absolute border rounded-full w-11 bg-background pb-2 px-4"
        >
          <img src={`${url}`} alt="" />
        </Button>
        <img
          className="w-60 h-30 border rounded-[20px] relative"
          src={"food.jpeg"}
        />
        <div className="flex gap-4  pt-2">
          <p className="text-red-500 text-[14px]  ">{name}</p>
          <p className="text-foreground text-[12px]">${price}</p>
        </div>
        <div className="text-[12px] flex px-4 text-foreground">
          {descrription}
        </div>
      </div>
    </>
  );
}
