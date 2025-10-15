import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent className="h-screen w-auto background/bg-background pr-5 pl-10 py-10">
          <div className="flex gap-2 justify-center items-center ">
            <img className="w-9 h-8" src={"NomNomLogo.jpg"} />

            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-bold text/text-foreground">
                NomNom
              </p>
              <span className=" text-3 text/text-muted-foreground">
                Swift delivery
              </span>
            </div>
          </div>
          <>
            <a
              href="#"
              className="w-[165px] flex gap-2 items-center border-1  rounded-full py-2 px-8 my-6"
            >
              <img src="Vector1.png" />
              <span className="text-[14px] text/text-foreground">
                Food menu
              </span>
            </a>
            <a
              href="#"
              className="w-[165px] flex gap-2 items-center bg-primary  rounded-full py-2 px-8"
            >
              <img src="Vector.png" />
              <span className="text-[14px] text-[#FFFFFF]">Orders</span>
            </a>
          </>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
