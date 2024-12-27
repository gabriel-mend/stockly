"use client";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import React, { ReactNode } from "react";

interface SidebarButton {
  children: ReactNode;
  href: string;
}

const SidebarButton = ({ children, href }: SidebarButton) => {
  const pathname = usePathname();
  return (
    <Button
      className="justify-start gap-2"
      variant={pathname === `${href}` ? "secondary" : "ghost"}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};


export default SidebarButton;