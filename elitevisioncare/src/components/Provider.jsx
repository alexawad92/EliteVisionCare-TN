export default function Provider() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img src="/doctor.jpg" className="rounded-3xl shadow-lg" />

        <div>
          <h2 className="text-4xl font-bold mb-6">Meet Your Provider</h2>

          <p className="text-gray-600 text-lg">
            Dr. Name brings compassionate care and modern expertise to every
            patient visit.
          </p>
        </div>
      </div>
    </section>
  );
}
