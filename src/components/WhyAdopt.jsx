import { HeartHandshake, Home, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <HeartHandshake size={42} />,
    title: "Save a Life",
    description:
      "Every adoption gives a rescued pet a second chance to live in a loving family.",
  },
  {
    icon: <Home size={42} />,
    title: "Find Your Best Friend",
    description:
      "Pets bring unconditional love, companionship, and happiness to your home.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Healthy & Verified",
    description:
      "All pets are carefully checked and verified before becoming available for adoption.",
  },
];

const WhyAdopt = () => {
  return (
    <section className="py-20 bg-linear-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-cyan-600 font-semibold">
            Why Choose Adoption?
          </span>

          <h2 className="text-5xl font-extrabold mt-3 bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] bg-clip-text text-transparent">
            Why Adopt Pets?
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Adopting a pet changes two lives forever—yours and theirs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl bg-white p-10 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-500"
            >
              <div className="inline-flex p-4 rounded-2xl bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] text-white mb-6 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

              <p className="text-gray-500 leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
