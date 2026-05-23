import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "./About";
import Provider from "../components/Provider";
import Hours from "../components/Hours";
import Footer from "../components/Footer";
import Location from "../components/Location";
import ContactForm from "../components/ContactForm";
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      {/* <About /> */}
      <Provider />
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <Hours />
          </div>

          <div>
            <Location />
          </div>
        </div>
      </section>
      {/* <ContactForm /> */}
    </>
  );
}
