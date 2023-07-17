import { useState, useEffect } from "react";
// import { collection, getDoc, orderBy, query, where } from "firebase/firestore";
// import { db } from "../firebase";

function Form() {
  const [cardNo, setCardNo] = useState(0);
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [admNo, setAdmNo] = useState(12345);
  // const [card, setCard] = useState({});
  // const cardsCollectionRef = collection(db, "cards", "F6Z4lDtVWOnNeTegl82w");
  // const q = query(cardsCollectionRef, where("cardNo", "==", { srchNo }));

  useEffect(() => {
    setCardNo(localStorage.getItem("cardNo"));
    setImg(localStorage.getItem("img"));
    setName(localStorage.getItem("name"));
    // const getCards = async () => {
    //   const data = await getDoc(cardsCollectionRef);
    //   console.log(data);
    //   setCard(data.docs.data);
    // };
    // getCards();
  }, []);


  
  // const [srchNo, setSrchNo] = useState(0);
  

  return (
    <div className="relative flex flex-col w-full min-h-fit overflow-hidden items-center justify-center gap-6">
      <form className="flex flex-row items-center justify-center gap-0 text-black bg-transparent mb-4">
        <label className="text-lg p-[6px] bg-black text-white rounded-l-2xl">
          Search
        </label>
        <input
        name="srchNo"
          type="number"
          className="border-2 border-black p-2 max-w-xs text-sm rounded-r-2xl"
          // onChange={(e) => setSrchNo(e.target.value)}
        />
      </form>
      <div className="grid gap-4 md:gap-10 p-10 pt-0 place-items-center grid-cols-1 lg:grid-cols-2 w-full min-h-[10rem] max-h-fit ">
        <form className="flex flex-col items-center justify-start border-2 border-black w-full h-full gap-4 pb-6 lg:pb-0">
          <h1
            className="p-2 w-full text-center rounded-b-2xl bg-black text-white"
            onChange={(e) => setName(e.target.value)}
          >
            Vote for {name}
          </h1>
          <div className="w-full flex flex-col items-center justify-center gap-6 py-6 text-sm sm:text-lg">
            <div className="w-[90%] grid grid-cols-2 lg:grid-cols-1 md:gap-4 place-items-center">
              <label className="">Admission Number</label>
              <input
                className="rounded-2xl border-b-2 border-black pl-4 p-2 min-w-[150px] text-sm"
                type="number"
                min={16000}
                max={18000}
                value={admNo}
                onChange={(e) => setAdmNo(e.target.value)}
              />
            </div>
            <div className="w-[90%] grid grid-cols-2 lg:grid-cols-1 md:gap-4 place-items-center">
              <label className="">Photo Number</label>
              <input
                className="rounded-2xl border-b-2 border-black pl-4 p-2 min-w-[150px] text-sm"
                type="number"
                min={0}
                max={100}
                value={cardNo}
                onChange={(e) => setCardNo(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-[90%] border-2 border-black rounded-tl-2xl rounded-br-2xl">
            <button className="w-full bg-white text-black p-2 text-sm font-semibold min-w-96 rounded-tl-2xl rounded-br-2xl">
              Submit
            </button>
          </div>
        </form>
        <div className="border-2 border-black w-full overflow-hidden max-h-96">
          <img
            src={img}
            className="object-cover blur-sm"
            onChange={(e) => setImg(e.target.value)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
