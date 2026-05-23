export default function Hours() {
  return (
    <section id="hours" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Office Hours</h2>

        <div className="bg-white shadow rounded-2xl p-8">
          <div className="flex justify-between py-2">
            <span>Monday</span>
            <span>9–5</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Tuesday</span>
            <span>9–5</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Wednesday</span>
            <span>9–5</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Thursday</span>
            <span>9–5</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Friday</span>
            <span>9–3</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Saturday</span>
            <span>Closed</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Sunday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
