import CardPic from "./CardPic";


function CardPics() {
  return (
    <div className="relative grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full 
    min-h-screen bg-greenYellow m-0 p-8 overflow-hidden pb-14">
        { cards.map((card, i) => (
            <CardPic key={i} id={card.id} name={card.name} desc={card.desc} img={card.img} cardNo={card.cardNo} />
        ))
        }
    </div>
  )
}

export default CardPics


const cards = [
  {
    id: 1,
    name: "Sample Name",
    desc: "Eiusmod proident cupidatat nulla elit eu amet id ullamco quis est ut ullamco magna magna.",
    img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
    cardNo: 1,
  },
  {
    id: 2,
    name: "Sample Name",
    desc: "Eiusmod proident cupidatat nulla elit eu amet id ullamco quis est ut ullamco magna magna.",
    img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
    cardNo: 2,
  },
  {
    id: 3,
    name: "Sample Name",
    desc: "Eiusmod proident cupidatat nulla elit eu amet id ullamco quis est ut",
    img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
    cardNo: 3,
  },
  {
    id: 4,
    name: "Sample Name",
    desc: "Eiusmod proident cupidatat nulla elit eu amet id ullamco quis est ut",
    img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
    cardNo: 4,
  },
  {
    id: 5,
    name: "Sample Name",
    desc: "Eiusmod proident cupidatat nulla elit eu amet id ullamco quis est ut",
    img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
    cardNo: 5,
  },
  {
    id: 5,
    name: "Sample Name",
    desc: "Eiusmod proident cupidatat nulla elit eu amet id ullamco quis est ut",
    img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
    cardNo: 5,
  },
];