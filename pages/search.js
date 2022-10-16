import { useRouter } from "next/router";
import { format } from "date-fns";
import { useAPI } from "../components/useAPI";
import InfoCard from "../components/InfoCard";

const buttonsData = [
  "Cancellation Flexibility",
  "Type of Place",
  "Price",
  "Rooms and Beds",
  "More Filters",
];

const slugs = [
  "austin",
  "bali",
  "barcelona",
  "bergen",
  "copenhagen",
  "kathmandu",
  "kingston",
];

function Search({ searchResults }) {
  const router = useRouter();
  const { data: firstCardData, imageData: firstCardImage } = useAPI(slugs[0]);
  const { data: secondCardData, imageData: secondCardImage } = useAPI(slugs[1]);
  const { data: thirdCardData, imageData: thirdCardImage } = useAPI(slugs[2]);
  const { data: fourthCardData, imageData: fourthCardImage } = useAPI(slugs[3]);
  const { data: fifthCardData, imageData: fifthCardImage } = useAPI(slugs[4]);
  const { data: sixthCardData, imageData: sixthCardImage } = useAPI(slugs[5]);
  const { data: seventhCardData, imageData: seventhCardImage } = useAPI(slugs[6]);

  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <main className="flex">
      <section className="flex-grow pt-14 px-6">
        <p className="text-xs">
          300+ stays - {range} - for {noOfGuests} guests
        </p>

        <h1 className="text-3xl font-semibold mt-2 mb-6">
          Stays in {location}
        </h1>

        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          {buttonsData.map((item, index) => (
            <p key={index} className="button">
              {item}
            </p>
          ))}
        </div>

        <div className="flex flex-col">
          <InfoCard
            img={
              firstCardImage ?
              firstCardImage :
              "https://images.unsplash.com/photo-1659787050050-d5aa2b1ec0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80"
            }
            location={firstCardData ? firstCardData.continent : "Loading ..."}
            title={firstCardData ? firstCardData.full_name : "Loading ..."}
            description="4 guest | 3 bedroom | 1.5 bed | 1.5 shared bathrooms | Wifi | Kitchen"
            star={4.73}
            price={"£ 30 / night"}
            total={"£ 157"}
          />
          <InfoCard
            img={
              secondCardImage ?
              secondCardImage :
              "https://images.unsplash.com/photo-1659787050050-d5aa2b1ec0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80"
            }
            location={secondCardData ? secondCardData.continent : "Loading ..."}
            title={secondCardData ? secondCardData.full_name : "Loading ..."}
            description="4 guest | 3 bedroom | 1.5 bed | 1.5 shared bathrooms | Wifi | Kitchen"
            star={4.99}
            price={"£ 50 / night"}
            total={"£ 507"}
          />
          <InfoCard
            img={
              thirdCardImage ?
              thirdCardImage :
              "https://images.unsplash.com/photo-1659787050050-d5aa2b1ec0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80"
            }
            location={thirdCardData ? thirdCardData.continent : "Loading ..."}
            title={thirdCardData ? thirdCardData.full_name : "Loading ..."}
            description="4 guest | 3 bedroom | 1.5 bed | 1.5 shared bathrooms | Wifi | Kitchen"
            star={3.73}
            price={"£ 20 / night"}
            total={"£ 120"}
          />
          <InfoCard
            img={
              fourthCardImage ?
              fourthCardImage :
              "https://images.unsplash.com/photo-1659787050050-d5aa2b1ec0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80"
            }
            location={fourthCardData ? fourthCardData.continent : "Loading ..."}
            title={fourthCardData ? fourthCardData.full_name : "Loading ..."}
            description="4 guest | 3 bedroom | 1.5 bed | 1.5 shared bathrooms | Wifi | Kitchen"
            star={4.80}
            price={"£ 40 / night"}
            total={"£ 257"}
          />
          <InfoCard
            img={
              fifthCardImage ?
              fifthCardImage :
              "https://images.unsplash.com/photo-1659787050050-d5aa2b1ec0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80"
            }
            location={fifthCardData ? fifthCardData.continent : "Loading ..."}
            title={fifthCardData ? fifthCardData.full_name : "Loading ..."}
            description="4 guest | 3 bedroom | 1.5 bed | 1.5 shared bathrooms | Wifi | Kitchen"
            star={2.57}
            price={"£ 5 / night"}
            total={"£ 80"}
          />
          <InfoCard
            img={
              sixthCardImage ?
              sixthCardImage :
              "https://images.unsplash.com/photo-1659787050050-d5aa2b1ec0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80"
            }
            location={sixthCardData ? sixthCardData.continent : "Loading ..."}
            title={sixthCardData ? sixthCardData.full_name : "Loading ..."}
            description="4 guest | 3 bedroom | 1.5 bed | 1.5 shared bathrooms | Wifi | Kitchen"
            star={4.73}
            price={"£ 30 / night"}
            total={"£ 157"}
          />
          <InfoCard
            img={
              seventhCardImage ?
              seventhCardImage :
              "https://images.unsplash.com/photo-1659787050050-d5aa2b1ec0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80"
            }
            location={seventhCardData ? seventhCardData.continent : "Loading ..."}
            title={seventhCardData ? seventhCardData.full_name : "Loading ..."}
            description="4 guest | 3 bedroom | 1.5 bed | 1.5 shared bathrooms | Wifi | Kitchen"
            star={4.73}
            price={"£ 30 / night"}
            total={"£ 157"}
          />
        </div>
      </section>
    </main>
  );
}

export default Search;

// server side rendering every time a user request
// export async function getServerSideProps() {
//   const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());

//   return {
//     props: {
//       searchResults
//     }
//   }
// }
