"use client";
import React from "react";
import { Package2 } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import { navData } from "./sidebar/menu-items";

const TopNav = () => {
  // const [authentication, setAuthentication] = useState(false);
  const pathname = usePathname();
  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const res = await checkAuthentication();
  //     setAuthentication(res ? true : false);
  //   };
  //   checkAuth();
  // }, []);

  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 px-4 sm:static sm:h-auto sm:px-[18px] pt-[18px] pb-[16px] bg-white border-b-[1px] border-solid border-b-[#0000000d]">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Sheet>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              >
                <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="text-2xl font-bold text-white">
                  Probotic AI
                </span>
              </Link>
              {navData.navMain.map((item, i) => (
                <Link
                  key={i}
                  href={item?.url ? item?.url : "#"}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <item.icon />
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" className="capitalize">
                  {pathname === "/"
                    ? "Dashboard"
                    : pathname
                        ?.split("/")
                        .filter(Boolean)[0]
                        ?.replace(/-/g, " ") || "Dashboard"}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
    </>
  );
};

export default TopNav;
