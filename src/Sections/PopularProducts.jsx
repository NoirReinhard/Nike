import { products } from "../constants";
import {ProductCard} from "./index";
const PopularProducts = () => {
  return (
    <div id="products" className="max-sm:pt-[5rem]">
      <p className="text-4xl font-semibold">
        Our <span className="text-coral-red">Popular </span> Products
      </p>
      <p className="text-slate-gray mt-[2rem] text-lg leading-normal lg:w-[32rem]">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((item,index)=>(
                <ProductCard imgURL={item.name} {...item} key={index}/>
        ))}
        </div>
    </div>
  );
};

export default PopularProducts;
