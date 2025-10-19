import { ReactNode } from "react";
import { AppSidebar } from "./AppSideBar";
import { ContainerCategories } from "./ContainerCategories";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="flex">
        <AppSidebar />
        <div className="w-screen">
          <ContainerCategories />
          {children}
        </div>
      </div>
    </div>
  );
}
