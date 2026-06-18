import PetCard from "@/components/PetCard";
import React from "react";

const AllPetsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet`);
  const pets = await res.json();

  return (
    <div>
      <section className="py-16 max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] bg-clip-text text-4xl font-extrabold text-transparent">
            Featured Pets
          </h2>

          <p className="mt-3 text-gray-500">
            Find your perfect furry companion.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pets.map((pet) => (
            <PetCard key={pet._id} pet={pet} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllPetsPage;
