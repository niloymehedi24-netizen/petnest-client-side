import PetCard from "@/components/PetCard";
import Link from "next/link";

const AllPetsPage = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params.search || "";
  const species = params.species || "";

  const query = new URLSearchParams();

  if (search) query.append("search", search);

  if (species) query.append("species", species);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/pet?${query.toString()}`,
    {
      cache: "no-store",
    },
  );

  const pets = await res.json();

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      {/* Heading */}

      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] bg-clip-text text-transparent">
          All Pets
        </h2>

        <p className="text-gray-500 mt-2">Find your perfect furry companion.</p>
      </div>

      {/* Search & Filter */}

      <form
        className="mb-10 flex flex-col md:flex-row gap-4"
        action="/all-pets"
      >
        <input
          type="text"
          name="search"
          defaultValue={search}
          placeholder="Search by pet name..."
          className="flex-1 border rounded-xl px-5 py-3 outline-none"
        />

        <select
          name="species"
          defaultValue={species}
          className="border rounded-xl px-5 py-3"
        >
          <option value="">All Species</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Bird">Bird</option>
          <option value="Rabbit">Rabbit</option>
        </select>

        <button className="px-8 rounded-xl text-white bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180]">
          Search
        </button>
      </form>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>

      {pets.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold">No Pets Found</h3>

          <Link href="/all-pets" className="text-cyan-600 mt-4 inline-block">
            Clear Filters
          </Link>
        </div>
      )}
    </section>
  );
};

export default AllPetsPage;
