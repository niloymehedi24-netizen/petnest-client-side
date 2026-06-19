import Link from "next/link";
import { Home, PawPrint } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-cyan-50 via-white to-purple-50 dark:from-black dark:via-gray-950 dark:to-gray-900 px-6">
      <div className="max-w-3xl text-center">
        {/* Floating Icon */}
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] text-white shadow-2xl animate-bounce">
          <PawPrint size={58} />
        </div>

        {/* 404 */}
        <h1 className="mt-10 text-8xl md:text-9xl font-extrabold bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Oops! This Pet Ran Away 🐾
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-8 max-w-2xl mx-auto">
          The page you are looking for does not exist or may have been moved. Do
          not worry—there are plenty of adorable pets waiting to be discovered
          back on the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/">
            <button className="flex items-center gap-3 rounded-2xl bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] px-8 py-4 text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <Home size={20} />
              Back to Home
            </button>
          </Link>

          <Link href="/all-pets">
            <button className="rounded-2xl border-2 border-[#8AB56E] px-8 py-4 font-semibold text-[#4F7180] transition-all duration-300 hover:bg-[#8AB56E] hover:text-white cursor-pointer">
              Browse Pets
            </button>
          </Link>
        </div>

        {/* Decorative Paw Prints */}
        <div className="mt-16 flex justify-center gap-6 text-[#8AB56E]/30">
          <PawPrint size={30} className="rotate-[-20deg]" />
          <PawPrint size={40} className="rotate-10" />
          <PawPrint size={30} className="rotate-[-15deg]" />
          <PawPrint size={40} className="rotate-15" />
          <PawPrint size={30} className="rotate-[-10deg]" />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
