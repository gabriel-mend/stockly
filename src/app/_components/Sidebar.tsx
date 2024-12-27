'use client'
import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white">
      <div className="px-8 py-6">
        <h1 className="font-bold text-2xl">STOCKLY</h1>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/">
          <LayoutGridIcon size={24} />
          Dashboard
        </SidebarButton>
        <SidebarButton href="/products">
          <PackageIcon size={24} />
          Produtos
        </SidebarButton>
        <SidebarButton href="/sales">
          <ShoppingBasketIcon size={24} />
          Vendas
        </SidebarButton>
      </div>
    </aside>
  );
};

export default Sidebar;
