import HeroSection from "../sections/HeroSection/HeroSection";
import CuisineSection from "../sections/CuisineSection/CuisineSection";
import MenuSection from "../sections/MenuSection/MenuSection";
import ContactSection from "../sections/ContactSection/ContactSection";
import Layout from "../components/Layout/Layout";

export default function Index(props: any) {
  return (
    <Layout>
      <HeroSection />
      <CuisineSection />
      <MenuSection />
      <ContactSection />
    </Layout>
  );
}
