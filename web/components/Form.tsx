"use client";
import { CircleAlertIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import countries from "@/data/countries.json";
import { Country } from "@/data/types";

interface FormInputs {
  fullname: string;
  email: string;
  country: string;
  national_id: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      fullname: "",
      email: "",
      country: "",
      national_id: "",
    },
  });

  return (
    <div className="flex flex-col rounded-2xl bg-slate-800/30 px-8 py-6 pb-8 text-slate-300 drop-shadow-2xl">
      <form
        autoComplete="off"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="space-y-10">
          <div className="space-y-4 selection:text-blue-100">
            <div className="flex flex-col space-y-2 font-light shadow-slate-800/100 transition-all duration-200 ease-in-out focus-within:font-normal focus-within:text-blue-300 focus-within:shadow-2xl hover:text-blue-300">
              <label>Full name</label>
              <input
                {...register("fullname")}
                className="rounded-lg bg-slate-600/50 px-4 py-1 ring-slate-600 transition-all duration-100 ease-in-out focus:ring-2 focus:outline-none"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col space-y-2 font-light shadow-slate-800/100 transition-all duration-200 ease-in-out focus-within:font-normal focus-within:text-blue-300 focus-within:shadow-2xl hover:text-blue-300">
              <label>Email address</label>
              <input
                {...register("email")}
                className="rounded-lg bg-slate-600/50 px-4 py-1 ring-slate-600 transition-all duration-100 ease-in-out focus:ring-2 focus:outline-none"
                placeholder="john@email.com"
              />
            </div>
            <div className="flex flex-col space-y-2 font-light shadow-slate-800/100 transition-all duration-200 ease-in-out focus-within:font-normal focus-within:text-blue-300 focus-within:shadow-2xl hover:text-blue-300">
              <label>Country</label>
              <select
                {...register("country")}
                className="rounded-lg bg-slate-600/50 px-4 py-1 ring-slate-600 transition-all duration-100 ease-in-out focus:ring-2 focus:outline-none"
              >
                {countries.map((country: Country) => (
                  <option
                    key={country.id}
                    className="bg-blue-400 text-slate-200 hover:bg-red-400"
                    value={country.country}
                  >
                    {country.country}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col space-y-2 font-light shadow-slate-800/100 transition-all duration-200 ease-in-out focus-within:font-normal focus-within:text-blue-300 focus-within:shadow-2xl hover:text-blue-300">
              <div className="flex flex-row items-center space-x-2">
                <label>National ID</label>
                {errors.national_id?.message && (
                  <CircleAlertIcon className="size-4 stroke-red-300" />
                )}
              </div>
              <input
                {...register("national_id", { required: "!" })}
                className={`rounded-lg bg-slate-600/50 px-4 py-1 ${errors.national_id?.message ? "ring-red-400 focus:ring-1" : "ring-slate-600 focus:ring-2"} transition-all duration-100 ease-in-out focus:outline-none`}
                placeholder="UE168C2E33F"
              />
            </div>
          </div>
          <div className="text-end">
            <button className="rounded-xl px-6 py-2 text-center text-slate-300 ring-1 ring-blue-400 transition-all duration-100 ease-in-out outline-none select-none hover:bg-blue-400 hover:font-semibold hover:text-slate-200 hover:ring-0 active:bg-blue-500 active:text-[0.9rem] active:font-semibold active:ring-0">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
