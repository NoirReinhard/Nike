import Button from "../Components/Button";
const Subscribe = () => {
  return (
    <div className="lg:flex lg:justify-between " id="contact-us">
      <h1 className="font-bold text-4xl font-palanquin lg:w-[38%]">
        Sign Up for <span className="text-coral-red">Updates </span>& Newsletter
      </h1>
      <div className="border border-black rounded-full flex justify-between pr-[20px] py-[10px] pl-[15px] mt-[2.5rem] lg:w-[40%] max-md:border-none max-md:flex-col max-md:gap-[20px]">
        <input
          type="text"
          placeholder="noirreinhard@gmail.com"
          className="pl-[30px] max-md:border max-md:border-black max-md:py-[15px] max-md:rounded-full focus:outline-none"
        />
        <Button label="Sign Up"></Button>
      </div>
    </div>
  );
};

export default Subscribe;
