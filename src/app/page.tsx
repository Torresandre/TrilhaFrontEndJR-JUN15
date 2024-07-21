
import Header from "./components/header";
import AboutMe from "./components/abaout";
import Personal from "./components/personal";
import Motivation from "./components/motivation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-normal ">
      <div className=" w-full  items-center justify-between font-mono text-sm lg:flex flex-col">
       <Header/>
       <AboutMe/>
       <Personal/>
       <Motivation/>
      </div>
    </main>
  );
}
