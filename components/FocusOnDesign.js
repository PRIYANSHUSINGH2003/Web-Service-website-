import { FaPaintBrush, FaMobileAlt, FaLayerGroup } from 'react-icons/fa';
import Image from 'next/image';

const FocusOnDesign = () => {
    return (
        <section className="relative bg-gray-50 py-20">
            <div className="container mx-auto px-6 lg:px-12 text-gray-800">
                {/* Heading Section */}
                <div className="text-center">
                    <h2 className="text-5xl font-bold leading-snug animate-fade-in-up">
                        Focus on <span className="text-primary">Design</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 animate-fade-in-up">
                        Craft modern, responsive, and user-friendly designs with ease. Let your creativity shine using our innovative tools and techniques.
                    </p>
                </div>

                {/* Features Section */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Feature 1 */}
                    <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 animate-slide-in-left">
                        <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mx-auto">
                            <FaPaintBrush size={32} />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-center">Creative Designs</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Explore unlimited creative possibilities with our intuitive and feature-rich design tools.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 animate-fade-in-up">
                        <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mx-auto">
                            <FaMobileAlt size={32} />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-center">Responsive Layouts</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Build designs that adapt beautifully to any device, ensuring a seamless user experience.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 animate-slide-in-right">
                        <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mx-auto">
                            <FaLayerGroup size={32} />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-center">Layered Precision</h3>
                        <p className="mt-4 text-gray-600 text-center">
                            Manage complex designs effortlessly with our precision-focused layer management system.
                        </p>
                    </div>
                </div>

                {/* Decorative Image Section */}
                <div className="mt-20 flex justify-center">
                    <div className="relative group">
                        <Image
                            src="/images/design-tools.jpeg"
                            alt="Design Tools Illustration"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg transform group-hover:scale-105 transition-all duration-700 animate-video-effect"
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    </div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary to-accent rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30"></div>
        </section>
    );
};

export default FocusOnDesign;
