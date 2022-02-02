import "./App.css";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import SpeakerBanner from "./components/SpeakerBanner";
import Banner from "./components/Banner";
import EarphoneBanner from "./components/EarphoneBanner";
import GearSection from "./components/GearSection";

function App() {
  return (
    <Layout>
      <Hero />
      <Shop />
      <SpeakerBanner />
      <Banner />
      <EarphoneBanner />
      <GearSection />
    </Layout>
  );
}

export default App;
