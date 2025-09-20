import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex gap-4">
      <Link href="/">
        <h1 className="font-petit text-normal text-center text-2xl font-extrabold tracking-tighter select-none">
          <span className="hover:text-selection-background transition-colors duration-100 ease-in-out">
            S
          </span>
          <span className="hover:text-selection-background transition-colors duration-100 ease-in-out">
            e
          </span>
          <span className="hover:text-selection-background transition-colors duration-100 ease-in-out">
            r
          </span>
          <span className="hover:text-selection-background transition-colors duration-100 ease-in-out">
            e
          </span>
          <span className="hover:text-selection-background transition-colors duration-100 ease-in-out">
            n
          </span>
          <span className="hover:text-selection-background transition-colors duration-100 ease-in-out">
            i
          </span>
          <span className="hover:text-selection-background transition-colors duration-100 ease-in-out">
            t
          </span>
          <span className="hover:text-selection-background transition-colors duration-100 ease-in-out">
            y
          </span>
        </h1>
      </Link>
    </div>
  );
}
