import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Fonts from "../Fonts/Fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Fonts />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
