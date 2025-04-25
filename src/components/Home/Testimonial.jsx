import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  // Array of user reviews
  const reviews = [
    {
      name: "Ariana Gomez",
      review:
        "Absolutely stunning book collection! Delivered fresh and on time. I loved every book I picked!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Lucas Bennett",
      review:
        "Great selection of books and very easy to order! I will definitely be coming back for more.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Sofia Rahman",
      review:
        "Amazing customer service and the books were even better than I expected! Truly a book lover's paradise.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Nadia Sheikh",
      review:
        "Fast delivery and the books were in perfect condition! I'm so happy with my experience.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/52.jpg",
    },
  ];

  // Render stars for the rating
  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-yellow-400 ${i < count ? "" : "opacity-30"}`}
      />
    ));
  };


  const settings = {
    dots: true, 
    infinite: true,
    speed: 600, 
    slidesToShow: 2, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 4500, 
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <section className=" py-10 px-4 ">
      <h2 className="text-3xl font-bold text-center text-indigo-900 mb-4">
        💬 What Our Book Lovers Say
      </h2>
      <p className="text-center text-indigo-700 mb-12">
        Real reviews from real book enthusiasts 📚
      </p>

      <div className="max-w-5xl mx-auto">
        {/* Slider for displaying user testimonials */}
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-lg transition duration-300 h-full flex flex-col items-center text-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-pink-200 shadow"
                />
                {/* User review text */}
                <p className="text-gray-700 italic mb-4">"{review.review}"</p>
                {/* Render stars for rating */}
                <div className="flex items-center justify-center gap-1 mb-2">
                  {renderStars(review.rating)}
                </div>
                {/* User name */}
                <p className="text-pink-600 font-semibold">{review.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
