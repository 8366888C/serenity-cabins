import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 right-0 left-0 z-3 bg-slate-800/20 px-8 py-4 backdrop-blur-sm">
      <Logo />
      <Navigation />
    </header>
  );
}
