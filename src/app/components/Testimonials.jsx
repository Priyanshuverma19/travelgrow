import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "/images/user1.jpg",
      name: "John Doe",
      role: "Travel Business Owner",
      feedback:
        "This mentorship program transformed my business! I saw a 50% increase in leads within just 3 months. Highly recommend it to anyone looking to grow.",
    },
    {
      id: 2,
      image: "/images/user2.jpg",
      name: "Jane Smith",
      role: "Tour Operator",
      feedback:
        "The expert guidance and marketing strategies were game changers. My website traffic and bookings skyrocketed after joining.",
    },
    {
      id: 3,
      image: "/images/user3.jpg",
      name: "Alice Johnson",
      role: "Freelance Travel Consultant",
      feedback:
        "I learned how to build a strong online presence and attract quality leads. This program is a must for travel professionals!",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
