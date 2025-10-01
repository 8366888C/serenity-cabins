import { getCabin } from "@/services/supabase-api";
import { EyeOffIcon, MapPinIcon, UsersIcon } from "lucide-react";
import Images from "@/components/Images";
interface ParamsProps {
  params: {
    cabin_name: string;
  };
}

export default async function Page({ params }: ParamsProps) {
  const cabin = await getCabin(params.cabin_name);

  return (
    <div>
      <h1 className="my-10 cursor-default text-center text-8xl font-extrabold text-slate-600 select-none">
        {cabin.name}
      </h1>
      <Images cabin={cabin} />

      <div className="mx-12 my-8">
        <p className="text-slate-400 selection:text-blue-100">
          {cabin.description}
        </p>
        <div className="flex flex-col space-y-2 py-8 text-slate-300 selection:text-blue-100">
          <div className="flex flex-row items-center space-x-4">
            <UsersIcon className="size-4 stroke-slate-400" />
            <p>
              For up to{" "}
              <span className="text-blue-300">{cabin.max_capacity}</span> guests
            </p>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <MapPinIcon className="size-4 stroke-slate-400" />
            <p>
              Located in the heart of the{" "}
              <span className="text-blue-300">Italy</span>
            </p>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <EyeOffIcon className="size-4 stroke-slate-400" />
            <p>
              Privacy <span className="text-blue-300">100%</span> guaranteed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
