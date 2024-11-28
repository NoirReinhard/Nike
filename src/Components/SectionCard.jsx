const SectionCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`rounded-xl border-2 ${
        bigShoeImg===imgURL.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer z-40`}
      onClick={handleClick}
    >
      <div className="sm:py-[1.5rem] py-[1rem] px-[1rem] bg-card bg-cover bg-center overflow-hidden rounded-xl w-full">
        <img
          src={imgURL.thumbnail}
          alt="Shoes"
          width={127}
          height={103.34}
          className="h-[103.34px] w-[127px] object-contain max-sm:h-[60px] max-sm:w-[90px]"
        />
      </div>
    </div>
  );
};

export default SectionCard;
