import Image from "next/image";

const stories = [
  {
    name: "Buddy",
    owner: "Sarah Ahmed",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    review:
      "Buddy filled our home with happiness. PetNest made the adoption process smooth and trustworthy.",
  },
  {
    name: "Luna",
    owner: "Mahin Islam",
    image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4",
    review:
      "Luna has become part of our family. We couldn't imagine life without her.",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-20 bg-linear-to-br from-cyan-100 to-amber-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] bg-clip-text text-transparent">
            Happy Adoption Stories
          </h2>

          <p className="text-gray-500 mt-4">
            Families who found their perfect companion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div
              key={story.name}
              className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition"
            >
              <div className="relative h-72">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold">{story.name}</h3>

                <p className="text-cyan-600 mb-4">Adopted by {story.owner}</p>

                <p className="text-gray-500 italic">{story.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
