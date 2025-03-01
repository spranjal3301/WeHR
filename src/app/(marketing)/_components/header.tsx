import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/components/ui/sidebar";
import { useIsTab } from "@/hooks/use-tab";
import Menuicon from "@/icons/menu-icon";
import { IconMenu2 } from "@tabler/icons-react";
import { Bell, ChevronDown, MessageSquare, Search } from "lucide-react";
import React from "react";

// type Props = {};

const Header = () => {
  const { open, setOpen } = useSidebar();
    const isTab = useIsTab();
  // console.log(open);
  
  return (
    <header className="bg-white  px-6 py-4 flex items-center justify-between ">
      <div className="flex justify-center items-center gap-5">
        <span className="cursor-pointer lg:hidden" onClick={()=>setOpen(!open)}><Menuicon /></span>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#b2b2b2]" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-[#e0e0e0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#3786f1] w-[240px]"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative">
          <Bell className="h-5 w-5 text-[#686868]" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-[#ff5151] rounded-full flex items-center justify-center text-[10px] text-white">
            2
          </span>
        </button>

        <button>
          <MessageSquare className="h-5 w-5 text-[#686868]" />
        </button>

        <div className="flex items-center">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/" alt="AJ" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>

          <div className="ml-2 flex items-center">
            <span className="text-sm font-medium hidden lg:block">Admin John</span>
            <ChevronDown className="ml-1 h-4 w-4 text-[#686868]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
