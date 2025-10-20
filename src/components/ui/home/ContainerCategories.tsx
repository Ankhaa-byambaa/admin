import { Badge } from "@/components/ui/badge";
export function ContainerCategories() {
  return (
    <div className="w-screen flex pl-15 mt-20 h-50 flex-col gap-4 pt-10 bg-[#FFFFFF] border rounded-md">
      <span className="text-foreground text-5 font-bold">Dishes Category</span>
      <div className="flex flex-wrap">
        <div className="flex gap-10 flex-wrap">
          <Badge
            variant="secondary"
            className="text-3 text-secondary-foreground flex gap-2 rounded-full py-1 px-4 border-red-500"
          >
            All Dishes
            <Badge
              className="h-5 min-w-5 text-3 text-primary-foreground bg-primary rounded-full  py-1 px-4font-mono tabular-nums"
              variant="outline"
            >
              2
            </Badge>
          </Badge>
          <Badge
            variant="secondary"
            className="text-3 text-secondary-foreground flex gap-2 rounded-full py-1 px-4 border-border"
          >
            Appetizers
            <Badge
              className="h-5 min-w-5 text-3 text-primary-foreground bg-primary rounded-full  py-1 px-4font-mono tabular-nums"
              variant="outline"
            >
              0
            </Badge>
          </Badge>
        </div>
        <div>
          <img className="mx-6" src={`AddNewDishPic.png`} />
        </div>
      </div>
    </div>
  );
}
