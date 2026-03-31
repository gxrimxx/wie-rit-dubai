// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Events from "./sections/Events";
import Newsletter from "./sections/Newsletter";
import Team from "./sections/Team";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Newsletter />
        <Team />
        <Contact />
      </main>
    </>
  );
}
