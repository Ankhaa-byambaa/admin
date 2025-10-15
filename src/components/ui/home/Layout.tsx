import { AppSidebar } from "./AppSideBar";
import { ContainerCategories } from "./ContainerCategories";

export function Layout() {
  return (
    <>
      <div className="flex">
        <AppSidebar />
        <ContainerCategories />
      </div>
    </>
  );
}
