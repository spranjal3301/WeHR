"use client";

import { NextPage } from "next";
import React, { useState } from "react";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "../../components/ui/sidebar";
import Dashboard from "@/icons/dashboard-icon";
import Department from "@/icons/department";
import Recruitment from "@/icons/recruitment-icon";
import Schedule from "@/icons/schedule";
import Employee from "@/icons/employee";
import MM from "@/icons/mm";
import Setting from "@/icons/settings";
import Support from "@/icons/support";
import Header from "./_components/header";
import { useIsTab } from "@/hooks/use-tab";

interface Props {
  children: React.ReactNode;
}
const links1 = [
  {
    label: "Dashboard",
    href: "#",
    icon: <Dashboard />,
    active: true,
  },
  {
    label: "Recruitment",
    href: "#",
    icon: <Recruitment />,
  },
  {
    label: "Schedule",
    href: "#",
    icon: <Schedule />,
  },
  {
    label: "Employee",
    href: "#",
    icon: <Employee />,
  },
  {
    label: "Department",
    href: "#",
    icon: <Department />,
  },
];

const links2 = [
  {
    label: "Support",
    href: "#",
    icon: <Support />,
  },
  {
    label: "Settings",
    href: "#",
    icon: <Setting />,
  },
];

const Layout: NextPage<Props> = ({ children }) => {
  const isTab = useIsTab();
  console.log(isTab);
  
  const [open, setOpen] = useState(true);

      
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={true}>
      <div
        className={cn(
          "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 md:overflow-hidden overflow-y-scroll",
          "h-screen w-full" // for your use case, use `h-screen` instead of `h-[60vh]`
        )}
      >
        <Sidebar open={open} setOpen={setOpen} animate={true}>
          <SidebarBody className="justify-between gap-10 border">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <div className="mx-auto">
                <Logo />
              </div>

              <Sidebarlist title={"MAIN MEMU"} links={links1} />
              <Sidebarlist title={"OTHER"} links={links2} />
            </div>
          </SidebarBody>
        </Sidebar>

        <div className="flex flex-1 flex-col bg-background">
          <Header/>
          <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200 to-neutral-200/0" />
          <div className="p-2 md:px-10  dark:border-neutral-700 dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full overflow-y-scroll">
            {children}
          </div>

        </div>
      </div>
    </SidebarProvider>
  );
};

const Sidebarlist = ({ links, title }: any) => {
  const { open } = useSidebar();
  return (
    <div className="mt-8 flex flex-col gap-3.5">
      <span
        className={cn(
          " text-[#B2B2B2] ",
          open ? "px-4 text-xs" : "text-center textxxxs font-bold"
        )}
      >
        {title}
      </span>
      {links.map((link: any, idx: any) => (
        <SidebarLink key={idx} link={link} />
      ))}
    </div>
  );
};

const Logo = () => {
  const { open } = useSidebar();
  return (
    <h1 className={cn("font-bold", open ? "text-2xl" : "text-base")}>WeHR</h1>
  );
};
const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

export default Layout;
