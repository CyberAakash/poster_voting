import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="relative flex-col flex items-center justify-center w-full min-h-screen bg-greenYellow m-0 overflow-hidden">
      <Navbar />
      <Banner />
      <div className="mt-10"></div>
      <Footer />
    </div>
  );
}

export default HomePage;
