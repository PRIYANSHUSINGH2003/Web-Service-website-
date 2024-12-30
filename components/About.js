import { FaLightbulb, FaLaptopCode, FaHandshake, FaChartLine } from 'react-icons/fa';

const About = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-100 text-gray-800 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-gray-50 opacity-30 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in-down">
                    <h2 className="text-5xl font-bold text-gray-900">About Us</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover who we are and how we bring your vision to life with innovative, user-centered solutions tailored to meet your needs.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 animate-fade-in-up">
                    {/* Feature 1 */}
                    <div className="group flex flex-col items-center text-center">
                        <div className="bg-primary text-white rounded-full p-6 shadow-lg transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                            <FaLightbulb className="text-4xl" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-primary">
                            Innovative Solutions
                        </h3>
                        <p className="mt-4 text-gray-600">
                            Fresh ideas and creative designs that make your website stand out.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group flex flex-col items-center text-center">
                        <div className="bg-primary text-white rounded-full p-6 shadow-lg transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                            <FaLaptopCode className="text-4xl" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-primary">
                            Expert Developers
                        </h3>
                        <p className="mt-4 text-gray-600">
                            Skilled professionals delivering high-quality and efficient solutions.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group flex flex-col items-center text-center">
                        <div className="bg-primary text-white rounded-full p-6 shadow-lg transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                            <FaHandshake className="text-4xl" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-primary">
                            Customer Focused
                        </h3>
                        <p className="mt-4 text-gray-600">
                            Your satisfaction is our priority. We ensure seamless and efficient collaboration.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="group flex flex-col items-center text-center">
                        <div className="bg-primary text-white rounded-full p-6 shadow-lg transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                            <FaChartLine className="text-4xl" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-primary">
                            Growth Oriented
                        </h3>
                        <p className="mt-4 text-gray-600">
                            We focus on delivering results that drive your business growth and success.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call-to-Action */}
            <div className="mt-16 text-center">
                <button className="bg-primary text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition transform hover:scale-105 hover:bg-accent">
                    Learn More About Us
                </button>
            </div>
        </section>
    );
};

export default About;
