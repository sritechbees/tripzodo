import Blogtypes from "@/component/common/blogtypes";
import CompanyGallery from "@/component/common/companygallery";
import Image from "next/image";


const seasons = [
  {
    title: "Winter Groups for 2025",
    cards: [
      { title: "Dubai Group Tour", image: "/packages/Dubai Group Tour.jpg", location: "Dubai", duration: "4 Nights 5 Days" },
      { title: "Europe Winter Tour", image: "/packages/Europe Winter Tour.jpg", location: "Europe", duration: "9 Nights 10 Days" },
      { title: "London Winter Tour", image: "/packages/London Winter Tour.jpg", location: "London", duration: "8 Nights 9 Days" },
      { title: "Egypt Winter Tour", image: "/packages/Egypt Winter Tour.jpg", location: "Egypt", duration: "4 Nights 5 Days" },
    ],
  },
  {
    title: "Summer Groups for 2025",
    cards: [
      { title: "Thailand Summer Tour", image: "/packages/Thailand Summer Tour.jpg", location: "Thailand", duration: "5 Nights 6 Days" },
      { title: "Bali Adventure", image: "/packages/Bali Adventure.jpg", location: "Bali", duration: "4 Nights 5 Days" },
      { title: "Japan Summer Tour", image: "/packages/Japan Summer Tour.jpg", location: "Japan", duration: "7 Nights 8 Days" },
      { title: "Maldives Escape", image: "/packages/Maldives Escape.jpg", location: "Maldives", duration: "3 Nights 4 Days" },
    ],
  },
  {
    title: "Autumn Groups for 2025",
    cards: [
      { title: "Kashmir Autumn Tour", image: "/packages/autumn1.jpg", location: "Kashmir", duration: "5 Nights 6 Days" },
      { title: "Canada Fall Escape", image: "/packages/Canada Fall Escape.jpg", location: "Canada", duration: "6 Nights 7 Days" },
      { title: "Paris Autumn Trip", image: "/packages/Paris Autumn Trip.jpg", location: "Paris", duration: "4 Nights 5 Days" },
      { title: "New York Colors", image: "/packages/New York Colors.jpg", location: "USA", duration: "5 Nights 6 Days" },
    ],
  },
  {
    title: "Spring Groups for 2025",
    cards: [
      { title: "Japan Cherry Blossom", image: "/packages/Japan Cherry Blossom.jpg", location: "Japan", duration: "7 Nights 8 Days" },
      { title: "Netherlands Tulip Tour", image: "/packages/Netherlands Tulip Tour.jpg", location: "Netherlands", duration: "5 Nights 6 Days" },
      { title: "Italy Spring Tour", image: "/packages/Italy Spring Tour.jpg", location: "Italy", duration: "6 Nights 7 Days" },
      { title: "Seoul Bloom Trip", image: "/packages/Seoul Bloom Trip.jpg", location: "South Korea", duration: "5 Nights 6 Days" },
    ],
  },
];
const travelPackages = [
  {
    title: "Ancient Civilizations",
    subtopics: ["Egyptian Pyramids", "Machu Picchu", "Petra, Jordan"],
    img: "/group/Ancient Civilizations1.jpg",
  },
  {
    title: "Medieval Europe",
    subtopics: ["Castles of France", "Colosseum in Rome", "Tower of London"],
    img: "/group/Medieval Europe.jpg",
  },
  {
    title: "Asian Heritage Tours",
    subtopics: ["Great Wall of China", "Angkor Wat", "Kyoto Temples"],
    img: "/group/Asian Heritage Tours.jpg",
  },
  {
    title: "Colonial Era Journeys",
    subtopics: ["American Revolution", "British Raj", "Spanish Missions"],
    img: "/group/Colonial Era Journeys.jpg",
  },
];
const GroupTourCards = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#fed42a] mb-4">
        Ultimate Group<span className="text-gray-900"> Tour Adventures</span> 
      </h2>

      {seasons.map((season, i) => (
        <div key={i} className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 hover:text-[#fed42a] mb-6 mt-10" data-aos="fade-left">
            {season.title}
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {season.cards.map((card, index) => (
              <div
                key={index}
                className="border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                data-aos="zoom-in"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900">{card.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{card.location}</p>
                  <p className="text-sm text-yellow-600 font-semibold mt-2">{card.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}




<CompanyGallery/>
<Blogtypes/>

      



       <div className="max-w-7xl mx-auto mt-8">
  <h2 className="text-3xl font-bold text-center mb-14">
   <span className="text-[#fed42a]">  Explore Historical <span className="text-gray-900">Travel Packages</span></span>
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {travelPackages.map((pkg, idx) => (
      <div
        key={idx}
        className="relative rounded-xl shadow-md overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-xl"
      >
        {/* Image */}
        <Image
          src={pkg.img}
          alt={pkg.title}
          width={400}
          height={250}
          className="w-full h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
        />

        {/* Title - Always visible */}
        <div className="absolute bottom-4 left-10 z-10  text-[#fed42a] px-3 py-1 rounded-lg font-semibold text-lg">
          {pkg.title}
        </div>

        {/* Curved Overlay */}
        <div
          className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            clipPath: 'ellipse(55% 40% at 50% 70%)',
          }}
        ></div>

        {/* Popup Content */}
        <div
          className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20"
        >
          <div className="bg-white rounded-t-3xl p-5 shadow-xl">
            <h3 className="text-lg font-semibold text-[#fed42a]">{pkg.title}</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 max-h-32 overflow-auto text-sm">
              {pkg.subtopics.map((sub, i) => (
                <li key={i}>{sub}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



          {/* Section: Trending Images */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 ">
              Trending <span className="text-[#fed42a]">Travel Moments</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  img: "/group/Sunset in Santorini.jpg",
                  title: "Sunset in Santorini",
                  desc: "Golden skies over blue-domed churches – pure Mediterranean magic.",
                },
                {
                  img: "/group/Safari in Kenya.jpg",
                  title: "Safari in Kenya",
                  desc: "Capture wildlife in their natural habitat across breathtaking savannas.",
                },
                {
                  img: "/group/Autumn in Kyoto.jpg",
                  title: "Autumn in Kyoto",
                  desc: "Experience Japan's timeless beauty during its fiery fall foliage season.",
                },
                {
                  img: "/group/Historic Rome.jpg",
                  title: "Historic Rome",
                  desc: "Wander the ancient streets where the Roman Empire once thrived.",
                },
                {
                  img: "/group/Alpine Adventures.jpg",
                  title: "Alpine Adventures",
                  desc: "Snowy peaks, cozy chalets, and adrenaline-pumping ski trails await.",
                },
                {
                  img: "/group/Desert Mirage in Dubai1.jpg",
                  title: "Desert Mirage in Dubai",
                  desc: "A luxurious blend of tradition and futuristic skyline in golden sands.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform duration-500 hover:scale-105 group"
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center mt-36 text-white px-4">
                    <h3 className="text-xl text-yellow-400 font-semibold mb-2">{card.title}</h3>
                    <p className="text-lg text-white">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

       
    </section>

    
  );
};

export default GroupTourCards;
