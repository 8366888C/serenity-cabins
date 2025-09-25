import Sidebar from "@/components/Sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Sidebar toggle={true} />
      <main>{children}</main>
    </div>
  );
}
