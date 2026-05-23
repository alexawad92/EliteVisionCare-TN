import {
  Eye,
  Baby,
  ClipboardPlus,
  Activity,
  ShieldPlus,
  Glasses,
} from "lucide-react";

const services = [
  {
    name: "Comprehensive Eye Exams",
    icon: Eye,
  },
  {
    name: "Contact Lens Fittings",
    icon: Glasses,
  },
  {
    name: "Pediatric Eye Care",
    icon: Baby,
  },
  {
    name: "Dry Eye Treatment",
    icon: Activity,
  },
  {
    name: "Medical Eye Exams",
    icon: ClipboardPlus,
  },
  {
    name: "Glaucoma Evaluation",
    icon: ShieldPlus,
  },
];
export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.name}
                className="bg-white p-8 rounded-2xl shadow hover:-translate-y-2 transition"
              >
                <Icon size={42} className="mb-4 text-blue-700" />

                <h3 className="text-xl font-semibold">{service.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
