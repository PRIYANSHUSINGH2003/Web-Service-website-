import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { BiMap } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-16">
            <div className="container mx-auto px-6">
                {/* Footer Top */}
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-12">
                    <div className="flex flex-col items-center text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
                            Get In Touch
                        </h2>
                        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
                            We're always here to assist you with any questions or support you need. Feel free to contact us!
                        </p>
                        <a
                            href="mailto:support@yourdomain.com"
                            className="inline-flex items-center text-blue-200 hover:text-white transition-all duration-300"
                        >
                            <HiMail className="text-2xl mr-2" />
                            priyanshusingh00004@gmail.com
                        </a>
                    </div>

                    <div className="flex flex-col items-center text-center md:text-left">
                        <h3 className="text-2xl font-semibold mb-4 animate__animated animate__fadeIn animate__delay-3s">
                            Address
                        </h3>
                        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-4s">
                        A-112 Jaitpur Extenstion Badarpur New Delhi - 10044
                        </p>
                        <a
                            href="https://maps.google.com"
                            className="inline-flex items-center text-blue-200 hover:text-white transition-all duration-300"
                        >
                            <BiMap className="text-2xl mr-2" />
                            View on Google Maps
                        </a>
                    </div>

                    <div className="flex flex-col items-center text-center md:text-left">
                        <h3 className="text-2xl font-semibold mb-4 animate__animated animate__fadeIn animate__delay-5s">
                            Follow Us
                        </h3>
                        <div className="flex space-x-6">
                            <a
                                href="https://www.facebook.com"
                                className="text-blue-200 hover:text-white text-3xl transition-all duration-300 animate__animated animate__fadeIn animate__delay-6s"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://www.twitter.com"
                                className="text-blue-200 hover:text-white text-3xl transition-all duration-300 animate__animated animate__fadeIn animate__delay-7s"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                className="text-blue-200 hover:text-white text-3xl transition-all duration-300 animate__animated animate__fadeIn animate__delay-8s"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                className="text-blue-200 hover:text-white text-3xl transition-all duration-300 animate__animated animate__fadeIn animate__delay-9s"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com"
                                className="text-blue-200 hover:text-white text-3xl transition-all duration-300 animate__animated animate__fadeIn animate__delay-10s"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 text-center animate__animated animate__fadeIn animate__delay-11s">
                    <p className="text-sm text-gray-300">© 2024 Priyanshu Singh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
