import { Metadata } from "next";

export const metadata: Metadata = {
  title: "account",
};

export default function Page() {
  return (
    <div>
      <h1 className="my-10 cursor-default text-center text-8xl font-extrabold text-slate-600 select-none">
        Account
      </h1>
      <div className="relative z-48 px-12">
        <h3 className="mb-8 text-center text-3xl font-bold text-blue-300 selection:text-blue-200">
          Welcome, Joe
        </h3>
      </div>
      <div className="space-y-6 px-12 text-slate-400 selection:text-blue-200">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusamus
          molestias nostrum magni dolorum ratione saepe aperiam corporis
          consequatur et consequuntur, ullam quisquam dignissimos officia? Dicta
          commodi delectus labore reprehenderit.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          libero, illo reiciendis cumque enim eos omnis iste natus eaque, saepe
          doloremque sequi fugit cum, illum soluta quod cupiditate optio iure.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          assumenda dolorem maiores laudantium iure id omnis vel labore ipsam
          quibusdam. Cupiditate, architecto eveniet? Ab, optio expedita quasi
          nobis nulla recusandae.
        </p>
      </div>
    </div>
  );
}
