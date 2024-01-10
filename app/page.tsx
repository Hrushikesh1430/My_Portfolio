import { motion } from "framer-motion";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TeckStack";
import { Work } from "./components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Work />
      {/* <Footer /> */}
    </>
  );
}
