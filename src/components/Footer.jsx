import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-base-content">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Website Info */}
        <div>
          <div className="flex items-center justify-start">
            <Image src="/logo.png" alt="PetNest" width={65} height={65} />
            <span className="text-2xl font-extrabold bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] bg-clip-text text-transparent tracking-wide">
              PetNest
            </span>
          </div>

          <p className="text-sm">
            Find loving homes for pets and connect with responsible adopters.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

          <div className="space-y-2">
            <p>📍 Dhaka, Bangladesh</p>
            <p>📞 +880 1712-345678</p>
            <p>📧 support@petnest.com</p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-5 text-2xl">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="hover:text-blue-600 transition" />
            </Link>

            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="hover:text-pink-500 transition" />
            </Link>

            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="hover:text-sky-500 transition" />
            </Link>

            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="hover:text-blue-700 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-base-200 py-5 text-center">
        <p>© {new Date().getFullYear()} PetNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
