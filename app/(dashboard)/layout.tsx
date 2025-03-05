"use client";

import SideBarLayout from "@/components/sidebar/sidebar-layout";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <SideBarLayout>
      <ScrollArea className={`${"h-[calc(100vh-89px)] "}`}>
        <main className={`p-4`}>{children}</main>
      </ScrollArea>
    </SideBarLayout>
  );
}
