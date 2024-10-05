import About from "./components/About";
import General from "./components/General";
import Hero from "./components/Hero";
import LatestUpdate from "./components/LatestUpdate";
import Stats from "./components/Stats";

export default function Home() {
  return (
   <div >
    <Hero />
    <General />
    <About />
    <Stats />
    <LatestUpdate />
   </div>
  );
}
