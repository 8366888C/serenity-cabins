import Cabin from "@/components/Cabin";
import { getCabins } from "@/services/supabase-api";

export default async function Cabins() {
  const cabins = await getCabins();
  return (
    <div className="grid gap-6 px-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 2xl:grid-cols-4 2xl:gap-14">
      {cabins.map((cabin) => (
        <Cabin cabin={cabin} key={cabin.name} />
      ))}
    </div>
  );
}
