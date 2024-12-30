import React from "react";
import { FaGlobe, FaShieldAlt, FaWordpress, FaServer, FaLock, FaAppStore } from "react-icons/fa";

const BuyADomain = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-100">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in-down">
                    <h2 className="text-4xl font-bold text-gray-900">Buy a Domain and Everything Else You Need</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Get started with a domain, hosting, and the tools you need to build your online presence.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 animate-fade-in">
                    {/* Feature: Domains */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center items-center text-primary mb-4">
                            <FaGlobe className="text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 text-center">Domains</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Find and secure the perfect domain name for your business.
                        </p>
                    </div>

                    {/* Feature: WordPress */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center items-center text-primary mb-4">
                            <FaWordpress className="text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 text-center">WordPress</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Build your website with ease using WordPress integration.
                        </p>
                    </div>

                    {/* Feature: Hosting */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center items-center text-primary mb-4">
                            <FaServer className="text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 text-center">Hosting</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Reliable and scalable hosting solutions for your website.
                        </p>
                    </div>

                    {/* Feature: Security */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center items-center text-primary mb-4">
                            <FaShieldAlt className="text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 text-center">Security</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Protect your website with advanced security tools.
                        </p>
                    </div>

                    {/* Feature: Apps */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center items-center text-primary mb-4">
                            <FaAppStore className="text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 text-center">Apps</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Explore powerful apps to enhance your online presence.
                        </p>
                    </div>

                    {/* Feature: Promos */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center items-center text-primary mb-4">
                            <FaLock className="text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 text-center">Promos</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Take advantage of exclusive offers to get started.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuyADomain;
