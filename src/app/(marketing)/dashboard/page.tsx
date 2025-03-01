import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Bell,
  ChevronDown,
  Edit3,
  FileText,
  Grid,
  MessageSquare,
  MoreHorizontal,
  PieChart,
  Search,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full min-h-screen px-4">
      <h1 className="text-2xl font-semibold mb-4 text-[#161E54]">Dashboard</h1>

      <div className="grid grid-cols-10 gap-6 ">
        <div className="col-span-10 lg:col-span-6 flex flex-col gap-4">
          <div className="grid grid-row-3 md:grid-cols-3 gap-4">
            <Card className="bg-[#ffefe7] border-none">
              <CardHeader className="">
                <h3 className="text-base font-medium text-[#161E54]">
                  Available Position
                </h3>
              </CardHeader>
              <CardContent className="">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-3xl font-bold">24</p>
                    <p className="text-xs pt-2.5 text-[#ff5151]">
                      4 Urgently needed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#e8f0fb] border-none">
              <CardHeader className="">
                <h3 className="text-base font-medium text-[#161E54]">
                  Job Open
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-3xl font-bold">10</p>
                    <p className="text-xs pt-2.5 text-[#3786f1]">
                      4 Active hiring
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#fdebf9] border-none">
              <CardHeader className="">
                <h3 className="text-base font-medium text-[#161E54]">
                  New Employees
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-3xl font-bold">24</p>
                    <p className="text-xs pt-2.5 text-[#ee61cf]">
                      4 Department
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-row-2 md:grid-cols-2 gap-4">
            {/* Total Employees */}
            <Card className="border-[#e0e0e0]">
              <CardHeader className="pb-2">
                <h3 className="text-sm font-medium text-[#686868]">
                  Total Employees
                </h3>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex justify-between items-end">
                  <p className="text-3xl font-bold">216</p>
                  <div className="h-12 w-24 relative">
                    <svg viewBox="0 0 100 30" className="w-full h-full">
                      <path
                        d="M0,15 Q20,5 40,10 T80,15 T100,5"
                        fill="none"
                        stroke="#65e982"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 text-xs text-[#686868]">
                <div className="flex justify-between w-full">
                  <div>
                    <p>120 Men</p>
                    <p>96 Women</p>
                  </div>
                  <p className="text-[#65e982]">+2% Past month</p>
                </div>
              </CardFooter>
            </Card>

            {/* Talent Request */}
            <Card className=" border-[#e0e0e0]">
              <CardHeader className="pb-2">
                <h3 className="text-sm font-medium text-[#686868]">
                  Talent Request
                </h3>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex justify-between items-end">
                  <p className="text-3xl font-bold">16</p>
                  <div className="h-12 w-24 relative">
                    <svg viewBox="0 0 100 30" className="w-full h-full">
                      <path
                        d="M0,15 Q20,5 40,10 T80,15 T100,5"
                        fill="none"
                        stroke="#ff5151"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 text-xs text-[#686868]">
                <div className="flex justify-between w-full">
                  <div>
                    <p>6 Men</p>
                    <p>10 Women</p>
                  </div>
                  <p className="text-[#ff5151]">+5% Past month</p>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="">
            {/* Announcement */}
            <Card className="border-[#e0e0e0]">
              <CardHeader className="flex flex-row items-center justify-between ">
                <div>
                  <h3 className="text-sm font-medium text-[#686868]">
                    Announcement
                  </h3>
                  <p className="text-xs text-[#b2b2b2]">Today, 13 Sep 2021</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Outing schedule for every department
                      </p>
                      <p className="text-xs text-[#b2b2b2]">5 Minutes ago</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Edit3 className="h-3 w-3 text-[#686868]" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <MoreHorizontal className="h-3 w-3 text-[#686868]" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Meeting HR Department
                      </p>
                      <p className="text-xs text-[#b2b2b2]">
                        Yesterday, 12:30 PM
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Edit3 className="h-3 w-3 text-[#686868]" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <MoreHorizontal className="h-3 w-3 text-[#686868]" />
                      </Button>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      IT Department need two more talents for UX/UI Designer
                      position
                    </p>
                    <p className="text-xs text-[#b2b2b2]">Yesterday, 09:15 AM</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Edit3 className="h-3 w-3 text-[#686868]" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <MoreHorizontal className="h-3 w-3 text-[#686868]" />
                    </Button>
                  </div>
                </div> */}
                </div>

                <div className="mt-4 text-center">
                  <Button
                    variant="outline"
                    className="text-[#ff5151] border-[#ff5151] hover:bg-[#ff5151]/10 text-xs"
                  >
                    See All Announcement
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="col-span-10 lg:col-span-4 gap-7 flex flex-col md:flex-row lg:flex-col h-full">
          {/* Recently Activity */}
          <Card className="col-span-4 bg-[#161e54] text-white border-none">
            <CardHeader className="pb-2">
              <h3 className="text-sm font-medium">Recently Activity</h3>
              <p className="text-xs opacity-70">10:40 AM, Fri 10 Sept 2021</p>
            </CardHeader>
            <CardContent className="pb-4">
              <h4 className="font-medium mb-2">You Posted a New Job</h4>
              <p className="text-xs opacity-70 mb-6">
                Kindly check the requirements and terms of work and make sure
                everything is right.
              </p>

              <p className="text-xs mb-4">Today you makes 12 Activity</p>
              <Button className="bg-[#ff5151] hover:bg-[#ff5151]/90 text-white text-xs py-1 px-3 rounded-md w-full">
                See All Activity
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Schedule */}
          <Card className=" border-[#e0e0e0]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <h3 className="text-sm font-medium text-[#686868]">
                  Upcoming Schedule
                </h3>
                <p className="text-xs text-[#b2b2b2]">Today, 13 Sep 2021</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="min-w-[60px]">
                    <p className="text-xs font-medium text-[#686868]">
                      Priority
                    </p>
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">
                        Review candidate applications
                      </p>
                      <MoreHorizontal className="h-4 w-4 text-[#b2b2b2]" />
                    </div>
                    <p className="text-xs text-[#b2b2b2]">Today - 11.30 AM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="min-w-[60px]">
                    <p className="text-xs font-medium text-[#686868]">Other</p>
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">
                        Interview with candidates
                      </p>
                      <MoreHorizontal className="h-4 w-4 text-[#b2b2b2]" />
                    </div>
                    <p className="text-xs text-[#b2b2b2]">Today - 10.30 AM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="min-w-[60px]">
                    <p className="text-xs font-medium text-[#686868]">Other</p>
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">
                        Short meeting with product designer from IT Department
                      </p>
                      <MoreHorizontal className="h-4 w-4 text-[#b2b2b2]" />
                    </div>
                    <p className="text-xs text-[#b2b2b2]">Today - 09.15 AM</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button
                  variant="outline"
                  className="text-[#ff5151] border-[#ff5151] hover:bg-[#ff5151]/10 text-xs cursor-pointer"
                >
                  Create New Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );

}
