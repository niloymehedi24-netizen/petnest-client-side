import Image from "next/image";
import { EditModal } from "@/components/EditModal";
import { DeleteAlert } from "@/components/DeleteAlert";
import AdoptionForm from "@/components/AdoptionForm";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:8000/pet/${id}`, {
    cache: "no-store",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const pet = await res.json();

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-end items-center">
        <EditModal pet={pet}></EditModal>
        <DeleteAlert pet={pet}></DeleteAlert>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Pet Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image Card */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={pet.imageUrl}
              alt={pet.name}
              width={1200}
              height={700}
              className="w-full h-100 object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Info Card */}
          <div className="rounded-3xl border p-8 shadow-lg bg-white dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold">{pet.name}</h1>
                <p className="text-lg text-gray-500 mt-2">
                  {pet.breed} • {pet.petType}
                </p>
              </div>

              <div className="bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] text-white px-6 py-3 rounded-2xl font-bold text-xl">
                ৳ {pet.adoptionFee}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl">
                <p className="text-sm text-gray-500">Gender</p>
                <p className="font-semibold">{pet.gender}</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl">
                <p className="text-sm text-gray-500">Age</p>
                <p className="font-semibold">{pet.age} Years</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl">
                <p className="text-sm text-gray-500">Color</p>
                <p className="font-semibold">{pet.color}</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl">
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold">{pet.location}</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-3">About {pet.name}</h3>

              <p className="leading-8 text-gray-600 dark:text-gray-300">
                {pet.description}
              </p>
            </div>
          </div>
        </div>

        {/* Adoption Form */}
        <div>
          <div className="sticky top-24 rounded-3xl border bg-white dark:bg-gray-900 p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-2">Adopt {pet.name}</h2>

            <p className="text-gray-500 mb-6">
              Fill out the form to submit your adoption request.
            </p>

            <AdoptionForm pet={pet}></AdoptionForm>

            <div className="mt-6 rounded-2xl bg-cyan-50 dark:bg-cyan-950 p-4">
              <p className="text-sm">
                📌 Adoption requests are reviewed by the pet owner. Initial
                status will be{" "}
                <span className="font-semibold text-cyan-600">Pending</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetDetailsPage;
