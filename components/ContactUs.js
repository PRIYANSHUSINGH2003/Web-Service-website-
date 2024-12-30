import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-indigo-100 to-white text-gray-800 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-white opacity-25 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Get In Touch With Us
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        We are always here to help you. Whether you have a question or need support, feel free to reach out. Let's connect!
                    </p>
                </div>

                {/* Main Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Google Map */}
                    <div className="lg:col-span-1 bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="relative w-full h-[400px]">
                            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=new%20delhi&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-1 bg-white p-8 shadow-lg rounded-lg animate__animated animate__fadeInUp animate__delay-3s">
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">Send Us a Message</h3>
                        <form action="#" method="POST">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
                                ></textarea>
                            </div>

                            <div className="mt-6 text-center">
                                <button
                                    type="submit"
                                    className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-indigo-700 hover:shadow-xl transition transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 animate__animated animate__fadeInUp animate__delay-2s">
                    {/* Contact Info 1 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-indigo-50">
                        <div className="bg-indigo-600 text-white p-4 rounded-full mb-4">
                            <FaPhoneAlt className="text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                        <p className="mt-2 text-gray-600">+91 9971196062</p>
                    </div>

                    {/* Contact Info 2 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-indigo-50">
                        <div className="bg-indigo-600 text-white p-4 rounded-full mb-4">
                            <FaEnvelope className="text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                        <p className="mt-2 text-gray-600">priyanshusingh00004@gmail.com</p>
                    </div>

                    {/* Contact Info 3 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-indigo-50">
                        <div className="bg-indigo-600 text-white p-4 rounded-full mb-4">
                            <FaMapMarkerAlt className="text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Visit Us</h3>
                        <p className="mt-2 text-gray-600">A-112 Jaitpur Extenstion Badarpur New Delhi - 10044</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
