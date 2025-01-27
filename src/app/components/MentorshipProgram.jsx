'use client';

import React from 'react';
import Image from 'next/image';
import { Target, Edit, TrendingUp, Search, Lightbulb,Check, X,Users, BarChart, Globe, ShoppingBag, Settings, Briefcase } from 'lucide-react';

const MentorshipProgram = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹24,999',
      originalPrice: '₹29,999',
      leadsCredits: '250',
      domesticCost: '₹200',
      outboundCost: '₹50',
      validity: '3 Months',
      features: [
        'Access Travel Leads with Contact Details',
        '100% Refund for Invalid Leads',
        'Profile Page',
        'Responsive Website & SEO Optimization',
        'Advanced Features: POP-UPs, SSL & Payment Integration',
      ],
      missingFeatures: [
        'SMS Option (For Indian Users), Social Networking Linking',
        'POP-up Inquiry Form, Customized Banner, Testimonial Section',
        'Highlighted Listing',
        'Inbound User Calls Enquiries from Packages',
        'Web Catalog (Sub Domain)',
        'SEO: Website Visibility on Popular Search Engines (3-month plan, 10 keywords)',
        'Logo Display on TravelGrowIndia Home Page',
      ],
    },
    {
      name: 'Startup',
      price: '₹49,999',
      originalPrice: '₹59,999',
      leadsCredits: '550',
      domesticCost: '₹350',
      outboundCost: '₹150',
      validity: '6 Months',
      features: [
        'Access Travel Leads with Contact Details',
        '100% Refund for Invalid Leads',
        'Profile Page',
        'Responsive Website & SEO Optimization',
        'Advanced Features: POP-UPs, SSL & Payment Integration',
        'Extra Features: SMS Option (For Indian Users), Social Networking Linking',
        'POP-up Inquiry Form, Customized Banner, Testimonial Section',
        'Highlighted Listing',
      ],
      missingFeatures: [
        'Inbound User Calls Enquiries from Packages',
        'Web Catalog (Sub Domain)',
        'SEO: Website Visibility on Popular Search Engines (3-month plan, 10 keywords)',
        'Logo Display on TravelGrowIndia Home Page',
      ],
    },
    {
      name: 'Growth',
      price: '₹99,999',
      originalPrice: '₹109,999',
      leadsCredits: '1200',
      domesticCost: '₹900',
      outboundCost: '₹300',
      validity: '1 Year',
      features: [
        'Access Travel Leads with Contact Details',
        '100% Refund for Invalid Leads',
        'Profile Page',
        'Responsive Website & SEO Optimization',
        'Advanced Features: POP-UPs, SSL & Payment Integration',
        'Extra Features: SMS Option (For Indian Users), Social Networking Linking',
        'POP-up Inquiry Form, Customized Banner, Testimonial Section',
        'Highlighted Listing',
        'Inbound User Calls Enquiries from Packages',
        'Web Catalog (Sub Domain)',
        'SEO: Website Visibility on Popular Search Engines (3-month plan, 10 keywords)',
        'Logo Display on TravelGrowIndia Home Page',
      ],
      missingFeatures: [],
    },
  ];
  return (
    <section className="bg-gray-50 py-12 px-6 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side - Features */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Why Join the Free-Mentorship Program?
          </h2>
          <p className="text-gray-600">
            Unlock the tools and strategies to accelerate your travel business.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Target className="text-blue-600 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="text-lg text-gray-700">
                Learn proven strategies to grow your business 10x faster.
              </span>
            </li>
            <li className="flex items-start">
              <Edit className="text-blue-600 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="text-lg text-gray-700">
                Get personalized advice tailored to your specific needs.
              </span>
            </li>
            <li className="flex items-start">
              <Search className="text-blue-600 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="text-lg text-gray-700">
                Identify what’s holding your business back and fix it.
              </span>
            </li>
            <li className="flex items-start">
              <Lightbulb className="text-blue-600 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="text-lg text-gray-700">
                Unlock hidden opportunities to increase leads and sales.
              </span>
            </li>
            <li className="flex items-start">
              <TrendingUp className="text-blue-600 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="text-lg text-gray-700">
                Stay ahead of the competition in the travel industry.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <Image
            src="/mentorship.jpg"
            alt="Mentorship Program"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
      
        <div className="bg-gray-50 py-12 flex items-center justify-between  lg:flex-row ">
        <div className="container mx-auto space-y-12">
  {/* Two Columns for Large Screens */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* What's Missing Section */}
    <div className="space-y-6">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
        What’s Missing in Your Travel Business?
      </h2>
      <ul className="space-y-4 text-lg text-gray-700">
        <li className="flex items-center">
          <Users className="text-blue-600 w-6 h-6 flex-shrink-0 mr-3" />
          Lack of leads?
        </li>
        <li className="flex items-center">
          <BarChart className="text-blue-600 w-6 h-6 flex-shrink-0 mr-3" />
          Ineffective marketing?
        </li>
        <li className="flex items-center">
          <Globe className="text-blue-600 w-6 h-6 flex-shrink-0 mr-3" />
          Outdated website or branding?
        </li>
        <li className="flex items-center">
          <ShoppingBag className="text-blue-600 w-6 h-6 flex-shrink-0 mr-3" />
          Struggling to convert inquiries into bookings?
        </li>
      </ul>
      <p className="text-lg text-gray-600 font-medium">
        We guarantee to help you overcome these challenges and achieve measurable results!
      </p>
    </div>

    {/* What You'll Gain Section */}
    <div className="space-y-6">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
        What You’ll Gain
      </h2>
      <ul className="space-y-4 text-lg text-gray-700">
        <li className="flex items-center">
          <Globe className="text-green-600 w-6 h-6 flex-shrink-0 mr-3" />
          Expand your reach in the travel market.
        </li>
        <li className="flex items-center">
          <Briefcase className="text-green-600 w-6 h-6 flex-shrink-0 mr-3" />
          Build a strong online presence.
        </li>
        <li className="flex items-center">
          <Users className="text-green-600 w-6 h-6 flex-shrink-0 mr-3" />
          Attract high-quality leads.
        </li>
        <li className="flex items-center">
          <BarChart className="text-green-600 w-6 h-6 flex-shrink-0 mr-3" />
          Increase bookings and revenue.
        </li>
      </ul>
      <p className="text-lg text-gray-600 font-medium">
        Join the Program Today – It’s 100% Free! Don’t let your travel business stay stuck. Take the first step toward growth by signing up for the TravelGrow Free Mentorship Program.
      </p>
    </div>
  </div>

  {/* How Can We Help Section */}
  <div className="space-y-6">
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center">
      How Can We Help?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card Items */}
      <div className="group bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% shadow-lg rounded-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <Users className="text-purple-600 w-10 h-10 mx-auto mb-4 group-hover:text-purple-800" />
        <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
        <p className="text-gray-600">
          Work with experienced mentors who understand the travel business inside-out.
        </p>
      </div>

      <div className="group bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% shadow-lg rounded-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <BarChart className="text-purple-600 w-10 h-10 mx-auto mb-4 group-hover:text-purple-800" />
        <h3 className="text-xl font-semibold mb-2">Marketing Mastery</h3>
        <p className="text-gray-600">
          Learn how to generate more leads through cutting-edge digital marketing strategies.
        </p>
      </div>

      <div className="group bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% shadow-lg rounded-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <Briefcase className="text-purple-600 w-10 h-10 mx-auto mb-4 group-hover:text-purple-800" />
        <h3 className="text-xl font-semibold mb-2">Business Strategy</h3>
        <p className="text-gray-600">
          Develop a clear plan to scale your business sustainably.
        </p>
      </div>

      <div className="group bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% shadow-lg rounded-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <Settings className="text-purple-600 w-10 h-10 mx-auto mb-4 group-hover:text-purple-800" />
        <h3 className="text-xl font-semibold mb-2">Website & Tech Solutions</h3>
        <p className="text-gray-600">
          Build or enhance your website to attract more customers.
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Original Price: <span className="line-through">{plan.originalPrice}</span>
              </p>
              <p className="text-3xl font-bold text-blue-600 mb-4">
                {plan.price}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Leads Credits: {plan.leadsCredits} <br />
                Domestic Lead Cost: {plan.domesticCost} <br />
                Outbound Lead Cost: {plan.outboundCost} <br />
                Validity: {plan.validity}
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="text-green-600 w-5 h-5 mr-2" />
                    {feature}
                  </li>
                ))}
                {plan.missingFeatures.map((missing, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <X className="text-red-600 w-5 h-5 mr-2" />
                    {missing}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      
    </section>
  );
};

export default MentorshipProgram;
