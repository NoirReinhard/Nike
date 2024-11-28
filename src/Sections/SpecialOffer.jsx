import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";
const SpecialOffer = () => {
  return (
    <div className="flex max-lg:flex-col flex-row-reverse">
      <div className="lg:pt-[5rem] lg:w-[90%]">
        <h1 className="text-4xl font-bold font-palanquin">
          <span className="text-coral-red">Special</span> Offer
        </h1>
        <p className="text-slate-gray py-7 text-xl leading-normal">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="text-slate-gray text-xl leading-normal">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="flex gap-4 py-10 max-sm:flex-col">
          <Button label="Shop now" iconURL={arrowRight}></Button>
          <Button
            label="Learn more"
            backgroundColor="bg-transparent"
            textColor="text-slate-gray"
            borderColor="border-black"
          ></Button>
        </div>
      </div>
      <img
        src={offer}
        alt=""
        width={773}
        height={687}
        className="object-contain w-full sm:h-[500px]"
      />
    </div>
  );
};

export default SpecialOffer;
