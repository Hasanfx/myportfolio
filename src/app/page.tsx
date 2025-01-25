"use client"
import About2 from "@/components/About2";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import NavBar from "@/components/NavBar";
import Animation from "@/components/Animation";
import Footer from "@/components/footer";
import { useIntersectionObserver } from "@/scripts/animation";
const Home = () => {
  useIntersectionObserver();
  return (

    <>
    <div className="min-h-screen bg-gradient-to-b from-background to-foreground">
      <NavBar />


    {/* <Animation/> */}
      <section
        id="welcome"
        className="h-screen items-center justify-center flex  show"
      >
        <div className="text-center show">
          <h1 className="text-4xl sm:text-5xl font-bold text-black">
            Welcome to My Website!
          </h1>
          <p className="mt-4 text-2xl text-gray-600 font-semibold">
            Dive into my world of software development, where creativity meets code.
          </p>
        </div>
      </section>
      <About2 />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer/>
    </div>
    </>
  );
};

export default Home;
