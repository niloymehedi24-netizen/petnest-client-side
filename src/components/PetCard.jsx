"use client";

import Image from "next/image";
import Link from "next/link";

const PetCard = ({ pet }) => {
  const {
    _id,
    name,
    breed,
    petType,
    gender,
    age,
    color,
    location,
    adoptionFee,
    imageUrl,
  } = pet;

  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {/* Pet Type Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
          {petType}
        </span>

        {/* Name */}
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-sm text-gray-200">{breed}</p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Info */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-gray-100 p-3 dark:bg-gray-800">
            <p className="text-gray-500">Gender</p>
            <p className="font-semibold">{gender}</p>
          </div>

          <div className="rounded-xl bg-gray-100 p-3 dark:bg-gray-800">
            <p className="text-gray-500">Age</p>
            <p className="font-semibold">{age} Years</p>
          </div>

          <div className="rounded-xl bg-gray-100 p-3 dark:bg-gray-800">
            <p className="text-gray-500">Color</p>
            <p className="font-semibold">{color}</p>
          </div>

          <div className="rounded-xl bg-gray-100 p-3 dark:bg-gray-800">
            <p className="text-gray-500">Location</p>
            <p className="font-semibold">{location}</p>
          </div>
        </div>

        {/* Fee */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Adoption Fee</p>
            <h3 className="text-2xl font-bold text-cyan-600">৳{adoptionFee}</h3>
          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Available
          </span>
        </div>

        {/* Button */}
        <Link href={`/all-pets/${_id}`}>
          <button className="w-full rounded-xl bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer">
            View Details →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PetCard;
