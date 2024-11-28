import Button from "../Components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <div className="flex max-lg:flex-col justify-between max-lg:gap-10">
        <div className="lg:w-[45%] sm:mt-[4.5rem]">
      <h1 className="font-bold  text-4xl font-palanquin leading-2">We Provide You <span className="text-coral-red">Super Quality </span>Shoes</h1>
      <p className="text-slate-gray leading-normal py-6 text-lg font-montserrat">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
      <p className="text-slate-gray text-lg font-montserrat">Our dedication to detail and excellence ensures your satisfaction</p>
      <Button label="View details" className="w-max mt-10"/>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default SuperQuality
