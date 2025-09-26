import { Metadata } from "next";
import Link from "next/link";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "about",
};

export default function Page() {
  return (
    <div className="pb-24">
      <h1 className="my-10 cursor-default text-center text-8xl font-extrabold text-slate-600 select-none">
        About
      </h1>
      <About
        heading="Welcome to Serenity Cabins"
        content={
          <>
            <p>
              Where nature&apos;s beauty and comfortable living blend
              seamlessly. Hidden away in the heart of the Italian Dolomites,
              this is your paradise away from home. But it&apos;s not just about
              the luxury cabins. It&apos;s about the experience of reconnecting
              with nature and enjoying simple pleasures with family.
            </p>
            <p>
              Our 8 luxury cabins provide a cozy base, but the real freedom and
              peace you&apos;ll find in the surrounding mountains. Wander
              through lush forests, breathe in the fresh air, and watch the
              stars twinkle above from the warmth of a campfire or your hot tub.
            </p>
            <p>
              This is where memorable moments are made, surrounded by
              nature&apos;s splendor. It&apos;s a place to slow down, relax, and
              feel the joy of being together in a beautiful setting.
            </p>
          </>
        }
        image={image1}
      />
      <About
        heading="Managed by our family"
        content={
          <>
            <p>
              Since 1962, Serenity Cabins has been a cherished family-run
              retreat. Started by our grandparents, this haven has been nurtured
              with love and care, passing down through our family as a testament
              to our dedication to creating a warm, welcoming environment.
            </p>
            <p>
              Over the years, we&apos;ve maintained the essence of Serenity,
              blending the timeless beauty of the mountains with the personal
              touch only a family business can offer. Here, you&apos;re not just
              a guest; you&apos;re part of our extended family. So join us soon
              at Serenity, where tradition meets tranquility, and every visit is
              like coming home.
            </p>
          </>
        }
        image={image2}
      />
      <div className="text-center">
        <Link
          href="/cabins"
          className="px-6 py-3 text-lg font-light text-slate-200 outline-2 outline-blue-400 transition-all duration-100 ease-in-out select-none hover:bg-blue-400 hover:shadow-2xl hover:shadow-blue-400 hover:outline-none active:text-[1.05rem]"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
