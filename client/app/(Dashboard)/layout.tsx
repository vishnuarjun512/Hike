import { SidebarNav } from "./(DashboardComponents)/sidebar-nav";
import { UserNav } from "./(DashboardComponents)/user-nav";
import type React from "react"; // Added import for React

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background dark text-gray-200">
      <SidebarNav />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 border-b">
          <div className=" text-xl font-semibold">Welcome {"user"}</div>
          <UserNav />
        </header>
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
}
