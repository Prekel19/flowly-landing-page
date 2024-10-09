import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import logo from "./assets/logo.png";

export default function Home() {
  const tabs: { id: number; name: string }[] = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Features",
    },
    {
      id: 3,
      name: "Testimonials",
    },
  ];

  return (
    <>
      <header className="flex max-w-normal justify-between font-noto leading-normal py-8 px-12 mx-auto">
        <div className="flex items-center gap-12">
          <Image src={logo} alt="Flowly logo" priority />
          <ul className="flex gap-8">
            {tabs.map((tab) => {
              return (
                <li key={tab.id} className="text-base font-semibold menu-item">
                  <a href={`#${tab.name.toLocaleLowerCase()}`}>{tab.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-6 py-2 *:transition">
          <a
            href="#"
            className="flex bg-primary1 text-white items-center py-2 px-6 border border-primary1 rounded-xl hover:bg-secondary1 hover:text-primary1"
          >
            Create account
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-6 border border-primary1 rounded-xl hover:bg-primary1 hover:text-white"
          >
            Log in
          </a>
        </div>
      </header>
      <main>
        <HeroSection></HeroSection>
        <Features></Features>
      </main>
    </>
  );
}
