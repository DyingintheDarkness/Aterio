import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Fonts from "../Fonts/Fonts";
import { motion, useAnimation } from "framer-motion";




export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div>
      <Fonts />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </motion.div>
  );
}
