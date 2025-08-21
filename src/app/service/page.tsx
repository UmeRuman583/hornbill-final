import React from "react";

interface ServicesProps {
  showBgImage?: boolean;
  inServicePage?: boolean;
}

const HeartWithBeat = ({ className = "w-50 h-50" }) => (
  <div className={`relative ${className} rounded-full flex items-center justify-center`}>
    <svg viewBox="0 0 150 150" className="w-full h-full">
      {/* Outer Circle */}
      <circle cx="75" cy="75" r="75" fill="white" />
      {/* Heart */}
      <path
        d="M75 127C75 127 22 90 22 52C22 37 37 22 52 22C60 22 68 26 75 33C82 26 90 22 98 22C113 22 128 37 128 52C128 90 75 127 75 127Z"
        fill="#3B82F6"
        stroke="white"
        strokeWidth="5"
      />
      {/* Heartbeat */}
      <path
        d="M15 75 L38 75 L52 45 L65 105 L75 15 L85 135 L98 75 L135 75"
        fill="none"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const Services = ({ showBgImage = true, inServicePage = false }: ServicesProps) => {
  const serviceCategories = [
    "Mentioned",
    "Medical imaging",
    "ICU equipments",
    "Hospital furniture",
    "Patient care products",
    "Laboratory",
  ];

  const cards = [
    {
      image: "/images/service.webp",
      title: "Compassion",
      description:
"We put people first. Our solutions are designed to meet the needs of both healthcare providers and patients, ensuring comfort, safety, and the best possible outcomes"    },
    {
      image: "/images/T1.jpg",
      title: "Innovative ",
      description:
"We are at the forefront of medical technology. By bringing the latest advancements in medical equipment to Pakistan, we help healthcare providers stay ahead in their field and deliver cutting-edge care."    },
    {
      image: "/images/pop3.jpg",
      title: "Trust",
      description:
"Trust is the cornerstone of our business. We build lasting relationships with our clients through transparency, reliability, and exceptional service. Our commitment to quality ensures that you can depend on us for all your medical equipment needs."    },
  ];

  return (
    <section id="services" className="min-h-screen">
      {/* Background Image Section */}
      {showBgImage && (
        <div
          className="relative bg-cover bg-center bg-no-repeat h-64 md:h-[36rem] flex items-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/service.webp)",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 w-full h-[50vh] flex items-center justify-center text-white">
            <h1 className="text-5xl font-bold font-sans">Our Services</h1>
          </div>
        </div>
      )}

      {/* Services Overview Card */}
      <div className="py-16 container mx-auto px-4 lg:px-8">
        <div className="bg-blue-500 shadow-2xl overflow-hidden mb-16">
          <div className="flex flex-col lg:flex-row">
            {/* Left Image */}
            <div className="lg:w-1/2 relative h-80 lg:h-[30rem]">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/images/pop2.jpg)" }}
              ></div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 p-12 flex flex-col justify-center text-white">
              {/* Yellow Line + Small Heading */}
              <div className="flex items-center mb-4">
                <div className="w-1 h-6 bg-yellow-400 mr-3"></div>
                <h2 className="text-lg font-medium font-sans">Services</h2>
              </div>

              {/* Big Heading */}
              <p className="text-4xl font-bold">
                Our Experts Will <span className="text-yellow-400">Take Care</span>
                <br /> of You
              </p>

              {/* Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-9">
                {serviceCategories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 text-xl font-sans"
                  >
                    <HeartWithBeat className="w-10 h-10 flex-shrink-0" />
                    <span>{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Community Section */}
        {!inServicePage && (
          <div className="text-center">
            {/* Values with yellow lines */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-1 h-8 bg-yellow-400 mr-4"></div>
              <h4 className="text-lg font-semibold text-blue-500 font-sans">
                Our Values:{" "}
                <span className="text-blue-500">Compassion</span>,{" "}
                <span className="text-blue-500">Innovation</span>,{" "}
                <span className="text-blue-500">Trust</span>
              </h4>
              <div className="w-1 h-8 bg-yellow-400 ml-4"></div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-blue-500 mb-6">
              Our <span className=" text-yellow-400"> Commitment</span> 
            </h2>

            <p className="text-sm text-gray-800 max-w-3xl mx-auto mb-12 font-sans">
              At HornBill, we are committed to delivering excellence in every
              aspect of our operations. We understand the critical role that
              reliable medical equipment plays in healthcare delivery. Therefore,
              we only partner with leading manufacturers known for their
              innovation,  quality, and reliability.
            </p>

            {/* Cards */}
            <div className="flex flex-col md:flex-row justify-center gap-3 px-6 md:px-16">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white  shadow-lg overflow-hidden flex-1 transform "
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-500 mb-3 font-sans">
                      {card.title}
                    </h3>
                    <p className="text-gray-800 text-sm leading-relaxed font-sans">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
