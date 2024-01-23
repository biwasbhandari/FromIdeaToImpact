"use client";
import { Layout, Mail, Search, Shield } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
const SideBarNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Browse",
      icon: Search,
      path: "/browse",
    },
    {
      id: 2,
      name: "Dashboard",
      icon: Layout,
      path: "/dashboard",
    },
    {
      id: 3, // Unique ID
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
    {
      id: 4, // Unique ID
      name: "NewsLetter",
      icon: Mail,
      path: "/newletter",
    },
  ];

  const [activeIndex, setActiveIndex] = useState();

  return (
    <div className="h-full bg-white border-r flex flex-col overflow-y-auto shadow-md ">
      <div className="p-5 border-b">
        <Image src="/logo.svg" alt="logo" height={143} width={143} />
      </div>

      <div className="flex flex-col  text-left">
        {menuList.map((item, index) => (
          <div
            key={item.id}
            className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-100 cursor-pointer ${
              activeIndex === index ? "bg-purple-50 text-purple-800" : null
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SideBarNav;
