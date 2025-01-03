"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            role: "CEO, Company X",
            feedback:
                "The team exceeded our expectations. They were responsive, innovative, and delivered the website ahead of schedule!",
            image: "/images/client1.jpg",
            rating: 5,
        },
        {
            name: "Jane Smith",
            role: "Founder, Startup Co.",
            feedback:
                "The attention to detail and customer service was exceptional. The website they built for us is modern and functional.",
            image: "/images/client2.jpg",
            rating: 5,
        },
        {
            name: "Samuel Green",
            role: "Marketing Director, Tech Innovations",
            feedback:
                "Working with this team was a game-changer. They understood our vision and delivered results that boosted our brand.",
            image: "/images/client3.jpg",
            rating: 5,
        },
        {
            name: "John Doe",
            role: "CEO, Company X",
            feedback:
                "The team exceeded our expectations. They were responsive, innovative, and delivered the website ahead of schedule!",
            image: "/images/client1.jpg",
            rating: 5,
        },
        {
            name: "Jane Smith",
            role: "Founder, Startup Co.",
            feedback:
                "The attention to detail and customer service was exceptional. The website they built for us is modern and functional.",
            image: "/images/client2.jpg",
            rating: 5,
        },
        {
            name: "Samuel Green",
            role: "Marketing Director, Tech Innovations",
            feedback:
                "Working with this team was a game-changer. They understood our vision and delivered results that boosted our brand.",
            image: "/images/client3.jpg",
            rating: 5,
        },
        {
            name: "John Doe",
            role: "CEO, Company X",
            feedback:
                "The team exceeded our expectations. They were responsive, innovative, and delivered the website ahead of schedule!",
            image: "/images/client1.jpg",
            rating: 5,
        },
        {
            name: "Jane Smith",
            role: "Founder, Startup Co.",
            feedback:
                "The attention to detail and customer service was exceptional. The website they built for us is modern and functional.",
            image: "/images/client2.jpg",
            rating: 5,
        },
        {
            name: "Samuel Green",
            role: "Marketing Director, Tech Innovations",
            feedback:
                "Working with this team was a game-changer. They understood our vision and delivered results that boosted our brand.",
            image: "/images/client3.jpg",
            rating: 5,
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-gray-100 text-gray-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-gray-50 opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in-down">
                    <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear directly from our satisfied clients and learn how we’ve helped them achieve their business goals.
                    </p>
                </div>

                {/* Testimonials Swiper */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full">
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="mb-16">
                            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-xl text-gray-900">{testimonial.name}</h3>
                                        <p className="text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-600 italic">"{testimonial.feedback}"</p>
                                <div className="mt-4 flex items-center space-x-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Call-to-Action */}
            <div className="mt-5 text-center">
                <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition transform hover:scale-105 hover:bg-blue-600">
                    Join the Many Happy Clients
                </button>
            </div>
        </section >
    );
};

export default Testimonials;
