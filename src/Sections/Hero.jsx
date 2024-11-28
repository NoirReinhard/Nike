import { bigShoe1 } from "../assets/images";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { Button } from "../Sections";
import { shoes, statistics } from "../constants";
import { SectionCard } from "../Sections";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section className="flex max-xl:flex-col flex-row">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-5 mt-[5.2rem]">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="text-8xl font-palanquin font-bold mt-10 z-10 max-sm:text-[60px] max-sm:leading-[1.2] w-full lg:whitespace-nowrap">
          <span className="xl:bg-white pr-10 py-[2rem]">The New Arrival</span>
          <p>
            <span className="text-coral-red">Nike </span>Shoes
          </p>
        </h1>
        <p className="text-slate-gray text-lg font-montserrat mt-10 leading-relaxed sm:max-w-sm ">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button
          className="mt-[2.5rem]"
          iconURL={arrowRight}
          label="Shop now"
        ></Button>
        <div className="mt-[4rem]">
          <ul className="flex  gap-16 flex-wrap">
            {statistics.map((item, index) => (
              <li key={index}>
                <p className="text-[48px] font-bold font-palanquin leading-[1.2]">
                  {item.value}
                </p>
                <p className="text-slate-gray font-montserrat">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center xl:ml-12 max-xl:mt-12">
        <img
          src={bigShoeImg}
          alt="Shoe"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />
        <div className="flex absolute bottom-[-3rem] gap-[2rem] max-sm:justify-around max-sm:w-full">
          {shoes.map((item, index) => (
            <div key={index}>
              <SectionCard
                imgURL={item}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              ></SectionCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
