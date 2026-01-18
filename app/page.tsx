import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sponsor from './components/Sponsor';
import Services from './components/Services';
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Sponsor />
      <Services />

      {/* Placeholder for Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center text-gray-400">
        <p>Services Section Coming Soon...</p>
      </section>
    </main>
  );
}
