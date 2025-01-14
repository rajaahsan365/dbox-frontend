import Sidebar from "@/components/sidebar";

export default function SidebarLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <main className="p-10 sm:ml-64 flex flex-col bg-white shadow-sm min-h-[100vh]">
        {children}
      </main>
    </div>
  );
}
