import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="relative flex items-center justify-center w-full min-h-screen bg-greenYellow m-0">
      <Navbar />
      <Banner />
    </div>
  );
}

export default HomePage;
