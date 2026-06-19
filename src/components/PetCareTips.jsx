import { Stethoscope, Bone, House } from "lucide-react";

const tips = [
  {
    icon: <Bone size={40} />,
    title: "Healthy Nutrition",
    text: "Provide balanced meals and fresh water every day.",
  },
  {
    icon: <Stethoscope size={40} />,
    title: "Regular Checkups",
    text: "Visit your veterinarian for vaccinations and health checkups.",
  },
  {
    icon: <House size={40} />,
    title: "Comfortable Home",
    text: "Give your pet a safe, clean and loving environment.",
  },
];

const PetCareTips = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold bg-linear-to-r from-[#D98A52] via-[#8AB56E] to-[#4F7180] bg-clip-text text-transparent">
            Pet Care Tips
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-3xl bg-white p-10 shadow-lg hover:-translate-y-2 transition"
            >
              <div className="text-cyan-600 mb-6">{tip.icon}</div>

              <h3 className="text-2xl font-bold mb-3">{tip.title}</h3>

              <p className="text-gray-500">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetCareTips;
