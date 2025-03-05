"use client";

import * as React from "react";
import { Command } from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
// import { NavProjects } from "@/components/nav-projects";
// import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { navData } from "./menu-items";
import TopNav from "../top-nav";

export default function SideBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <a href="#">
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                      <Command className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">Acme Inc</span>
                      <span className="truncate text-xs">Enterprise</span>
                    </div>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <NavMain items={navData.navMain} />
            {/* <NavProjects projects={navData.projects} /> */}
            {/* <NavSecondary items={navData.navSecondary} className="mt-auto" /> */}
          </SidebarContent>
          <SidebarFooter>
            <NavUser user={navData.user} />
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <TopNav />
          <main className="">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
