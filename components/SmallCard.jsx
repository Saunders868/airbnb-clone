import Image from "next/image";

function SmallCard({ item }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image
          src={item.picture.thumbnail}
          layout="fill"
          alt={item.name.first}
          className="rounded-lg"
        />
      </div>

      {/* right */}
      <div>
        <h2>{`${item.name.first} ${item.name.last}`}</h2>
        <h3 className="text-gray-500">{item.location.city}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
