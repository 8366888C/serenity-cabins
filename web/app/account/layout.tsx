import Sidebar from "@/components/Sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const sidebarToggle = true;

  return (
    <div className={sidebarToggle ? "" : "flex flex-row"}>
      <Sidebar toggle={sidebarToggle} />
      <main>{children}</main>
    </div>
  );
}
