import Image from "next/image";

const MediumCard = ({ data, img }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt={data?.full_name} layout="fill" objectFit="cover" className="rounded-xl" />
      </div>

      <h3 className="text-2xl mt-3">{data?.full_name}</h3>
    </div>
  );
};

export default MediumCard;
