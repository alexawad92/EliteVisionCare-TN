export default function About() {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Elite Vision Care</h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Serving Knoxville and surrounding communities with personalized,
            high-quality eye care and affordable eyewear solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              Affordable Eyewear in Knoxville
            </h2>

            <p className="text-gray-600 leading-8">
              Explore a wide selection of quality frames and lenses designed to
              fit your style, vision needs, and lifestyle. At Elite Vision Care,
              we strive to make selecting eyewear simple by offering options
              that balance comfort, durability, and modern design. Every visit
              includes a comprehensive eye examination performed by our licensed
              optometrist, ensuring your eye health and vision remain our
              highest priority. For patients interested in premium lens options,
              we offer savings on upgrades including high-index lenses,
              polarized lenses, Transitions®, and additional specialty lens
              solutions.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow">
            <h2 className="text-2xl font-bold mb-4">Contact Lens Exams</h2>

            <p className="text-gray-600 leading-8">
              Need an updated contact lens prescription? Elite Vision Care
              offers comprehensive contact lens evaluations with personalized
              fittings and expert guidance. Our goal is to help you achieve
              excellent vision while ensuring optimal comfort and fit for your
              everyday needs.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              Knoxville Eye Exam Appointments
            </h2>

            <p className="text-gray-600 leading-8">
              Schedule an appointment with our licensed optometrist and receive
              personalized care in a welcoming environment. We are committed to
              helping patients and families maintain healthy vision through
              comprehensive examinations and individualized treatment
              recommendations. Appointments are required prior to visiting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
