import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const Testimonials = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-gray-100 to-white text-gray-800 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in-down">
                    <h2 className="text-5xl font-bold text-gray-900">What Our Clients Say</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear directly from our satisfied clients and learn how we’ve helped them achieve their business goals.
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="flex flex-wrap justify-center gap-12">
                    {/* Testimonial 1 */}
                    <div className="w-full sm:w-80 bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/client1.jpg"
                                alt="Client 1"
                                width={80}
                                height={80}
                                className="rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-xl text-gray-900">John Doe</h3>
                                <p className="text-gray-600">CEO, Company X</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600 italic">
                            "The team exceeded our expectations. They were responsive, innovative, and delivered the website ahead of schedule!"
                        </p>
                        <div className="mt-4 flex items-center space-x-1">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className="text-yellow-400" />
                            ))}
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="w-full sm:w-80 bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/client2.jpg"
                                alt="Client 2"
                                width={80}
                                height={80}
                                className="rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-xl text-gray-900">Jane Smith</h3>
                                <p className="text-gray-600">Founder, Startup Co.</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600 italic">
                            "The attention to detail and customer service was exceptional. The website they built for us is modern and functional."
                        </p>
                        <div className="mt-4 flex items-center space-x-1">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className="text-yellow-400" />
                            ))}
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="w-full sm:w-80 bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/client3.jpg"
                                alt="Client 3"
                                width={80}
                                height={80}
                                className="rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-xl text-gray-900">Samuel Green</h3>
                                <p className="text-gray-600">Marketing Director, Tech Innovations</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600 italic">
                            "Working with this team was a game-changer. They understood our vision and delivered results that boosted our brand."
                        </p>
                        <div className="mt-4 flex items-center space-x-1">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className="text-yellow-400" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Call-to-Action */}
            <div className="mt-16 text-center">
                <button className="bg-primary text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition transform hover:scale-105 hover:bg-accent">
                    Join the Many Happy Clients
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
