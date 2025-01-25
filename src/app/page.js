import Image from "next/image";
import Link from "next/link";
import Carousal from "./components/Carousal";

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
        <h1 className="flex items-center justify-center text-2xl lg:text-3xl font-semibold mt-2 text-center">International Holiday Destinations</h1>
        <p className="p-2 px-4 text-justify lg:px-8 lg:text-lg">
        The places across world where people choose to travel around are: The land of island across world is Indonesia, a perfect place for honeymoon, exotic and beach vacations The place among holiday destination is Mauritius for beaches, vacations and its islands for spending time alone or with the family. The place known for skyscraper-studded skyline and shopping destination is Hongkong, Hongkong Tour Packages, where the people select for shopping and sightseeing.
        </p>
      </div>
      <div className=" px-16 lg:px-32">
        <h1 className="flex items-center justify-center text-2xl lg:text-3xl font-semibold mt-2 text-center">Explore Best Popular Tour Packages</h1>
        <Carousal/>
      </div>
  </div>
  );
}
