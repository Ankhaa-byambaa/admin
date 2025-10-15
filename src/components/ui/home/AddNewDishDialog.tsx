"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export function AddNewDishDialog() {
  //   const [dishName, setDishName] = useState("")
  const [preview, setPreview] = useState(``);
  const [newDish, setNewDish] = useState(``);
  const [newDishName, setNewDishName] = useState(``);
  const [dish, setDish] = useState<
    {
      id: string;
      name: string;
      price: string;
      ingredients: string;
      url: string;
    }[]
  >([]);

  async function createNewDish() {
    await fetch(`http://localhost:3002`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newDish }),
    });
    loadDishes;
  }
  function loadDishes() {}

  function handleAddNewDishImageChange(e: any) {
    const files = e.target.files[0];
    const file = URL.createObjectURL(files);
    setPreview(file);
    console.log("PREVIEW", preview);
  }

  useEffect(() => {
    fetch(`http://localhost:3001/`)
      .then((res) => res.json())
      .then((data) => setDish(data));
    console.log("DATAaaaa", dish);
  }, []);

  return (
    <>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <div className="w-[270px] h-[241px] rounded-[20px] border-[1px] border-dashed border-red-700 p-3 flex justify-center items-center flex-col gap-6">
              <img src="AddNewDishPic.png" alt="" className="w-10 h-10" />
              <div>
                <p>Add new Dish to </p>
                <p>name</p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="w-auto h-auto">
            <DialogHeader>
              <DialogTitle className="text/text-foreground">
                Add new Dish to Appetizers
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-[24px]">
              <div className="flex items-center gap-6 mt-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="food-name-1">Food name</Label>
                  <Input
                    value={newDishName}
                    onChange={(e) => {
                      setNewDishName(e.target.value);
                    }}
                    className="w-[194px] h-[38px] rounded-md border-[1px] flex py-2 px-3"
                    placeholder="Type food name"
                    name="name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="food-price">Food price</Label>
                  <Input
                    className="w-[194px] h-[38px] rounded-md border-[1px] flex py-2 px-3  "
                    placeholder="Enter price..."
                    name="username"
                  />
                </div>
              </div>
              <>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="Ingredients">Ingredients</Label>
                  <Textarea
                    placeholder="List ingredients..."
                    className="w-[412px] h-[90px] rounded-md border-[1px] flex py-2 px-3"
                  />
                </div>
              </>
              <div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="Ingredients">Ingredients</Label>
                  <div className="bg-[#2563EB0D] border-[1px] border-[#2563EB0D] border-dashed  w-[412px] h-[160px] flex flex-col gap-2 justify-center items-center relative mt-5">
                    <img src="AddNewDishDialogPic.png" alt="" />
                    <p className="text-text/text-primary">
                      Choose a file or drag & drop it here
                    </p>
                    {preview ? (
                      <>
                        <img
                          src={preview}
                          className=" absolute w-[412px]  h-[160px] rounded-md"
                        />
                      </>
                    ) : (
                      <input
                        type="file"
                        className="absolute opacity-0 inset-0"
                        onChange={handleAddNewDishImageChange}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter>
              <div className="h-[68px] flex justify-end items-end">
                <Button
                  onClick={createNewDish}
                  type="submit"
                  className="flex py-3 px-4"
                >
                  Add Dish
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}
