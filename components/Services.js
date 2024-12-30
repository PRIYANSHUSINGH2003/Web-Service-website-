import { FaGlobe, FaMobileAlt, FaCode, FaShoppingCart, FaChartLine, FaLaptopCode } from 'react-icons/fa';

const Services = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 text-gray-800">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in-down">
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide">Our Services</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Explore our range of professional services designed to bring your vision to life.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 animate-fade-in">
                    {/* Service 1: Web Development */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center text-primary mb-4">
                            <FaGlobe className="text-4xl text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 text-center">Web Development</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Build modern, responsive websites that enhance your online presence.
                        </p>
                    </div>

                    {/* Service 2: Mobile App Development */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center text-primary mb-4">
                            <FaMobileAlt className="text-4xl text-green-500" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 text-center">Mobile App Development</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Create intuitive mobile applications for iOS and Android platforms.
                        </p>
                    </div>

                    {/* Service 3: Custom Software */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center text-primary mb-4">
                            <FaCode className="text-4xl text-purple-500" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 text-center">Custom Software</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Tailored software solutions designed to meet your specific needs.
                        </p>
                    </div>

                    {/* Service 4: E-Commerce Solutions */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center text-primary mb-4">
                            <FaShoppingCart className="text-4xl text-orange-500" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 text-center">E-Commerce Solutions</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Develop online stores with secure payment integration and user-friendly design.
                        </p>
                    </div>

                    {/* Service 5: Digital Marketing */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center text-primary mb-4">
                            <FaChartLine className="text-4xl text-yellow-500" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 text-center">Digital Marketing</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Boost your brand with SEO, PPC, and social media marketing strategies.
                        </p>
                    </div>

                    {/* Service 6: Tech Consultation */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center text-primary mb-4">
                            <FaLaptopCode className="text-4xl text-teal-500" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 text-center">Tech Consultation</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Receive expert advice to make informed technology decisions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
