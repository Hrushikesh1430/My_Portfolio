import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Header from "./components/Header";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Work />
      <Footer />
    </>
  );
}
