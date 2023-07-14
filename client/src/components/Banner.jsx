import "./Banner.css"

function Banner() {
  return (
    <div className="relative flex items-center justify-center w-full min-h-screen m-0">
      <h1 className="absolute top-[20%] md:top-[25%] left-[50%] translate-x-[-50%] z-30 w-full 
      text-center text-2xl md:text-5xl font-bold text-black">Only photograph what you love</h1>
      <div className="mt-[20%] flex items-center justify-center w-full min-h-screen m-0">
        <div
          className="relative flex items-center justify-center p-2 bannerImage 
      bg-no-repeat bg-cover text-white w-[70%] h-[450px] rounded-lg 
      border-2 border-black "
        >
          <div
            className="bg-white text-black w-[80%] sm:w-[70%] md:w-[45%] lg:w-[35%] h-[80%] 
          border-2 border-black md:absolute md:top-[50%] md:translate-y-[-50%]
          md:left-10 rounded-lg flex items-center justify-center flex-col overflow-hidden"
          >
            <div className="rounded-b-lg min-w-full min-h-[85%]"></div>
            <div className="bg-black text-white min-w-full min-h-[15%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner