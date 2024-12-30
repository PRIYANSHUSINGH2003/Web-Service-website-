import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-primary to-accent text-white">
            <div className="container mx-auto flex flex-col items-center md:flex-row px-6 py-12 space-y-8 md:space-y-0 md:space-x-8">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight animate-fade-in-up">
                        Build Stunning Websites <br />
                        <span className="text-gray-200">With Ease and Confidence</span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-100 animate-fade-in-up">
                        Unlock the power of modern web design and create professional, user-friendly websites tailored to your needs. Let us help you bring your vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="bg-white text-primary px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition transform hover:scale-105">
                            Get Started <FaArrowRight className="inline ml-2" />
                        </button>
                        <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition transform hover:scale-105">
                            Learn More
                        </button>
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                        <div className="flex items-center space-x-2">
                            <FaCheckCircle className="text-green-400" />
                            <span className="text-gray-200 text-sm">User-Centered Design</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaCheckCircle className="text-green-400" />
                            <span className="text-gray-200 text-sm">Responsive & Mobile-Friendly</span>
                        </div>
                    </div>
                </div>

                {/* Image/Illustration */}
                <div className="flex-1 flex justify-center animate-slide-in-right">
                    <Image
                        src="/images/hero-illustration.png"
                        alt="Website Design Illustration"
                        width={476}
                        height={436}
                        className="rounded-xl w-3/4 max-w-sm sm:max-w-md md:w-full"
                    />
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent to-primary rounded-full blur-2xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl opacity-30"></div>
        </section>
    );
};

export default Hero;
