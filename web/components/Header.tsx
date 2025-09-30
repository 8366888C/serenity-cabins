import Logo from "./Logo";
import Navigation from "./Navbar";

export default function Header() {
  return (
    <header className="fixed top-4 right-0 left-0 z-50 mx-12 mb-0 flex items-center justify-between rounded-full bg-slate-800/20 px-4 py-2 shadow-2xl shadow-slate-800 backdrop-blur-sm transition-all duration-150 ease-in-out">
      <Logo />
      <Navigation />
    </header>
  );
}
