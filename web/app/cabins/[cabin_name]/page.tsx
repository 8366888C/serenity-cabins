import { getCabin } from "@/services/supabase-api";
import { EyeOffIcon, MapPinIcon, UsersIcon } from "lucide-react";
import Images from "@/components/Images";

interface ParamsProps {
  params: {
    cabin_name: string;
  };
}

export async function generateMetadata({ params }: ParamsProps) {
  const cabin = await getCabin(params.cabin_name);
  return { title: `cabin ${cabin.name}` };
}

export default async function Page({ params }: ParamsProps) {
  const cabin = await getCabin(params.cabin_name);

  return (
    <div className="pb-2">
      <h1 className="my-10 cursor-default text-center text-8xl font-extrabold text-slate-600 select-none">
        {cabin.name}
      </h1>
      <Images cabin={cabin} />

      <div className="mx-12 my-8">
        <p className="text-slate-400 selection:text-blue-100">
          {cabin.description}
        </p>
        <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-800/30 px-6 drop-shadow-2xl">
          <div className="flex flex-col space-y-2 py-6 text-slate-300 selection:text-blue-100">
            <div className="flex flex-row items-center space-x-4">
              <UsersIcon className="size-4 stroke-slate-400" />
              <p>
                For up to{" "}
                <span className="text-blue-300">{cabin.max_capacity}</span>{" "}
                guests
              </p>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <MapPinIcon className="size-4 stroke-slate-400" />
              <p>
                Located in the heart of{" "}
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
          <div className="flex items-center justify-center space-x-2">
            <h3 className="text-6xl font-extrabold text-slate-600 select-none">
              $
            </h3>
            <div className="flex flex-col items-center justify-center">
              {cabin.discount ? (
                <h4 className="text-4xl font-bold tracking-wide text-blue-300">
                  {cabin.regular_price - cabin.discount}
                </h4>
              ) : null}
              <h4
                className={`${cabin.discount ? "text-xl font-light text-slate-400 line-through select-none" : "text-4xl font-bold tracking-wide text-blue-300"}`}
              >
                {cabin.regular_price}
              </h4>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-300">
            Reserve today. Pay on arrival.
          </h2>
        </div>
      </div>
    </div>
  );
}
