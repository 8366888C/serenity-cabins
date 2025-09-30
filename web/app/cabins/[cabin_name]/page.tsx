import { getCabin } from "@/services/supabase-api";

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
    </div>
  );
}
