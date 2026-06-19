import Link from "next/link";
import { HeartHandshake, PawPrint, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@heroui/react";

const Banner = () => {
  return (
    <section className="bg-linear-to-br from-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <PawPrint className="w-5 h-5" />
            <span>Find Your Perfect Companion</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Give a Pet a <span className="text-primary">Loving Home</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            Discover adorable pets waiting for a forever family. Browse dogs,
            cats, birds, rabbits, and many more companions looking for love and
            care.
          </p>

          <Button className="flex gap-4 border rounded-xl px-8 py-3 bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] hover:bg-primary-focus transition">
            <Link
              href="/all-pets"
              className="btn btn-primary rounded-full px-8"
            >
              <div className="flex items-center justify-between gap-1">
                <HeartHandshake className="w-5 h-5" />
                Adopt Now
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </Button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src="/banner.jpg"
            alt="Pet Adoption"
            className="rounded-3xl shadow-2xl object-cover w-full h-125 transition-transform duration-300 hover:scale-105"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
