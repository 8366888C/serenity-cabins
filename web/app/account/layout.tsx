export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-wrap space-x-6 py-10">
      <div>Navigation</div>
      <div>{children}</div>
    </div>
  );
}
