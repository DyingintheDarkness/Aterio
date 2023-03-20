import { Box, Button, Input, Link, Select } from "@chakra-ui/react";
import Fonts from "../components/Fonts/Fonts";
import CustomDropdown from "../components/CustomDropdown/CustomDropdown";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../../sections/HeroSection/HeroSection";
import CuisineSection from "../../sections/CuisineSection/CuisineSection";
import MenuSection from "../../sections/MenuSection/MenuSection";
import ContactSection from '../../sections/ContactSection/ContactSection';
import Footer from "../components/Footer/Footer";

export default function Index(props: any) {
  return (
    <>
      <Fonts />
      <Navbar />
      <HeroSection />
      <CuisineSection />
      <MenuSection />
      <ContactSection/>
      <Footer/>
    </>
  );
}