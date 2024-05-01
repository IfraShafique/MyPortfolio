import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
     <Navbar/>
     <About/>
     <Skills/>
    </div>
  );
}
