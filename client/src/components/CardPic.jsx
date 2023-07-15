

function CardPic(props) {
  return (
    <div className="relative flex-col flex items-center 
    w-72 h-96 bg-white text-black m-0 overflow-hidden
    border-2 border-black rounded-2xl">
        <div className="min-h-10 p-2 min-w-full bg-black text-white text-center">{props.name}</div>
        <div className="p-2 border-b-2 rounded-b-2xl border-black"><img className="rounded-2xl" src={props.img} alt="image" /></div>
    </div>
  )
}

export default CardPic