'use client'
import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup'

const Marketplace = () => {
  const stats = [
    {
      id: 1,
      image: '/verify.png',
      number: 750,
      title: 'Verified Agents',
    },
    {
      id: 2,
      image: '/traveller.png',
      number: 1200,
      title: 'Happy Travellers',
    },
    {
      id: 3,
      image: '/location.png',
      number: 500,
      title: 'Exciting Destinations',
    },
    {
      id: 4,
      image: '/support.png',
      number: 10000,
      title: 'Happy Customers',
    },
  ]

  return (
    <div className="px-4 py-8">
    <h1 className="text-2xl lg:text-3xl font-bold text-center mb-6">
      We&apos;re a growing tour package marketplace
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <Image
            src={stat.image}
            width={80}
            height={80}
            alt={stat.title}
            className="mb-4"
          />
          <span className="text-3xl font-bold text-blue-600">
            <CountUp end={stat.number} duration={3} />
            +
          </span>
          <h1 className="text-lg font-semibold mt-2">{stat.title}</h1>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Marketplace
