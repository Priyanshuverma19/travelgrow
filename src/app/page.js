import Image from "next/image";
import Link from "next/link";
import Carousal from "./components/Carousal";
import Marketplace from "./components/Marketplace";
import PackageCard from "./components/PackageCard";
import WhyChooseUs from "./components/WhyChooseUs";
import MentorshipProgram from "./components/MentorshipProgram";
import Testimonials from "./components/Testimonials";


const data1 = [
  {
    id: 1,
    title: "Manali Tour",
    description: "12+ Manali Tour Packages",
    image: "/manali.jpg",
    footerItem1: "Manali Tour Packages",
    footerItem2: "5000",
  },
  {
    id: 2,
    title: "Goa Tour Packages",
    description: "10+ Goa Tour Packages",
    image: "/goa.jpg",
    footerItem1: "Goa Tour Packages",
    footerItem2: "6000",
  },
  {
    id: 3,
    title: "Amritsher Tour Packages",
    description: "7+ Amritsher Tour Packages",
    image: "/amritsher.jpg",
    footerItem1: "Amritsher Tour Packages",
    footerItem2: "5500",
  },
  {
    id: 4,
    title: "Agra Tour Packages",
    description: "7+ Agra Tour Packages",
    image: "/agra.jpg",
    footerItem1: "Agra Tour Packages",
    footerItem2: "4999",
  },
  {
    id: 5,
    title: "Chandigarh Tour Packages",
    description: "7+ Chandigarh Tour Packages",
    image: "/chandigarh.jpg",
    footerItem1: "Chandigarh Tour Packages",
    footerItem2: "4999",
  },
  
]

const data2 = [
  {
    id: 1,
    title: "Darjeeling Tour",
    description: "12+ Darjeeling Tour Packages",
    image: "/Darjeeling.jpg",
    footerItem1: "Darjeeling Tour Packages",
    footerItem2: "5000",
  },
  {
    id: 2,
    title: "Ooty Tour",
    description: "12+ Ooty Tour Packages",
    image: "/Ooty.jpg",
    footerItem1: "Ooty Tour Packages",
    footerItem2: "5000",
  },
  {
    id: 3,
    title: "Goa Tour",
    description: "12+ Goa Tour Packages",
    image: "/goa2.jpg",
    footerItem1: "Goa Tour Packages",
    footerItem2: "5000",
  },
  {
    id: 4,
    title: "Kasmir Tour",
    description: "12+ Kasmir Tour Packages",
    image: "/Kasmir.jpg",
    footerItem1: "Kasmir Tour Packages",
    footerItem2: "5000",
  },
  {
    id: 5,
    title: "Manali Tour",
    description: "12+ Manali Tour Packages",
    image: "/manali.jpg",
    footerItem1: "Manali Tour Packages",
    footerItem2: "5000",
  },
]
const packages = [
  {
    id: 1,
    title: "Explore the Himalayas",
    description: "Experience the beauty of snow-capped mountains.",
    price: 15000,
    image: "/himalayas.jpg",
  },
  {
    id: 2,
    title: "Beach Paradise in Goa",
    description: "Relax on the serene beaches of Goa.",
    price: 12000,
    image: "/goa.jpg",
  },
  {
    id: 3,
    title: "Desert Safari in Rajasthan",
    description: "Discover the golden sands of Rajasthan.",
    price: 18000,
    image: "/Rajasthan.jpg",
  },
  {
    id: 4,
    title: "Backwaters of Kerala",
    description: "Sail through the calm waters of Kerala.",
    price: 14000,
    image: "/Kerala.jpg",
  },
];


export default function Home() {
  return (
  <div>
    <div
        className="relative bg-cover bg-center h-1/2 lg:h-[calc(100vh-300px)] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/ban.jpg')" }}
      >
        <div className=" bg-opacity-50 text-white p-6 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Plan Your Holiday Packages</h1>
          <p className="text-lg md:text-2xl mb-6">Customize & Book Amazing Tours ★ ★ ★ ★ ☆</p>
          <Link
            href="https://wa.me/1234567890" // Replace WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Contact Us on WhatsApp
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">International Holiday Destinations</h1>
        <p className="p-2 px-4 text-justify lg:px-8 lg:text-lg">
        The places across world where people choose to travel around are: The land of island across world is Indonesia, a perfect place for honeymoon, exotic and beach vacations The place among holiday destination is Mauritius for beaches, vacations and its islands for spending time alone or with the family. The place known for skyscraper-studded skyline and shopping destination is Hongkong, Hongkong Tour Packages, where the people select for shopping and sightseeing.
        </p>
      </div>
      <div className=" px-12 lg:px-24">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">Explore Best Popular Tour Packages</h1>
        <Carousal data={data1}/>
      </div>
      <div className=" px-12 lg:px-24">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">Explore the World’s Best Destinations!</h1>
        <Carousal data={data2}/>
      </div>

      <Marketplace/>
      <div className="px-4 py-8">
      <h1 className="text-2xl lg:text-3xl font-bold text-center mb-6">Trending Tour Packages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            id={pkg.id}
            title={pkg.title}
            description={pkg.description}
            price={pkg.price}
            image={pkg.image}
          />
        ))}
      </div>
    </div>
      <div>
        <WhyChooseUs/>
      </div>
      <div>
        <MentorshipProgram/>
      </div>
      <div>
        <Testimonials/>
      </div>
  </div>
  );
}
