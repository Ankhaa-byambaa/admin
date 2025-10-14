import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Badge } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar className="background/bg-background flex flex-col gap-10 py-8 px-5">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="#"
                    className="flex gap-2.5 flex-row px-6 h-10 justify-center roundede-full"
                  >
                    <img src="Dashboard Icon.png" alt="" />
                    <Badge className="text/text-primary-foreground background/bg-primary-10  ">
                      Food menu
                    </Badge>
                  </a>
                  <a
                    href="#"
                    className="flex gap-2.5 flex-row px-6 h-10 justify-center roundede-full"
                  >
                    <img src="Dashboard Icon.png" alt="" />
                    <Badge className="background/bg-background text-[14px] flex justify-center items-center text/text-foreground">
                      Orders
                    </Badge>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
