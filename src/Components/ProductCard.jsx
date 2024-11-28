import { star } from "../assets/icons";

const ProductCard = ({imgURL,name,price}) => {
  return (
    <div>
      <div className="flex justify-between items-center rounded-full w-full flex-1 max-sm:w-full">
        <img src={imgURL} alt="name" className="w-[282px] h-[282px]"/>
      </div>
    <div>
        <p className="font-montserrat text-xl leading-normal text-slate-gray"><img src={star} height={24} width={24}alt="Star" className="inline"/><span className="text-slate-gray ml-2">(4.5)</span></p>
        <p className="font-semibold text-2xl font-palanquin mt-3">{name}</p>
        <p className="text-coral-red font-semibold text-2xl font-montserrat mt-3">{price}</p>
    </div>
    </div>
  )
}

export default ProductCard
