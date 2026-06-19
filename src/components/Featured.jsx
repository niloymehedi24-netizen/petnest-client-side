import PetCard from "./PetCard";
import Link from "next/link";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`, {
    cache: "no-store",
  });

  const pets = await res.json();

  // Show only first 6 pets
  const featuredPets = pets.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold mb-4">
          Featured Pets
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] bg-clip-text text-transparent">
          Find Your Perfect Companion
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Meet our adorable pets waiting for a loving home. Every adoption
          creates a lifelong friendship and gives a pet a second chance.
        </p>
      </div>

      {/* Pets Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredPets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <Link href="/all-pets">
          <button className="px-8 py-4 rounded-2xl bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            View All Pets →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Featured;
