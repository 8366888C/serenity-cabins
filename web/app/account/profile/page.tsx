import Form from "@/components/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "profile",
};

export default function Page() {
  return (
    <div>
      <h1 className="my-10 cursor-default text-center text-8xl font-extrabold text-slate-600 select-none">
        Profile
      </h1>
      <div className="relative z-48 px-12">
        <h3 className="mb-8 text-center text-3xl font-bold text-blue-300 selection:text-blue-200">
          Update your profile
        </h3>
      </div>
      <div className="space-y-6 px-12 text-slate-400 selection:text-blue-100">
        <p>
          Providing the following information will make your check in process
          faster and smoother See you soon!
        </p>
      </div>
      <div className="mt-10 px-12">
        <Form />
      </div>
    </div>
  );
}
