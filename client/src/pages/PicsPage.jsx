import CardPics from "../components/CardPics";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function PicsPage() {
  return (
    <div className="relative flex-col flex items-center justify-center w-full min-h-fit pt-[14%] bg-greenYellow m-0 overflow-hidden">
      <Navbar />
      <CardPics />
      <Footer />
    </div>
  );
}

export default PicsPage