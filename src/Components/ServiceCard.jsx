const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="shadow-3xl flex flex-col p-7 rounded-3xl sm:h-[20rem] justify-center">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt="" height={24} width={24}  />
      </div>
      <h1 className="font-bold text-3xl pt-4 font-palanquin">{label}</h1>
      <p className="text-slate-gray mt-5 font-montserrat text-lg max-lg:w-[80%] leading-normal">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
