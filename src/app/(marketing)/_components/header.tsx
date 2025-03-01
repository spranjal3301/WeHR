import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/components/ui/sidebar";
import { useIsTab } from "@/hooks/use-tab";
import Bell from "@/icons/bell";
import Dp from "@/icons/dp";
import Menuicon from "@/icons/menu-icon";
import Message from "@/icons/message";
import { IconMenu2 } from "@tabler/icons-react";
import { ChevronDown, MessageSquare, Search } from "lucide-react";
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
            className="pl-10 pr-4 py-2 border border-[#e0e0e0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#ff5151] w-[300px]"
          />
        </div>
      </div>

      <div className="flex items-center px-4 space-x-6 md:space-x-8">
        <button className="cursor-pointer">
          <Bell/>
        </button>

        <button className="cursor-pointer">
          <Message/>
        </button>

        <div className="flex items-center">
          {/* <Avatar className="h-8 w-8"> */}
             <Dp/>
          {/* </Avatar> */}

          <div className="ml-2 flex items-center">
            <span className="text-sm font-medium hidden lg:block">Admirra John</span>
            <ChevronDown className="ml-1 h-4 w-4 text-[#686868]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
