import Button from "./Button";

export default function ContactForm() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Have a Question?
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Send us a message and we'll get back to you.
        </p>

        <form className="bg-white shadow-xl rounded-3xl p-10">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="border rounded-xl p-4"
            />
          </div>

          <input
            type="text"
            placeholder="Phone (optional)"
            className="border rounded-xl p-4 w-full mt-6"
          />

          <textarea
            placeholder="Message"
            rows="6"
            className="border rounded-xl p-4 w-full mt-6"
          />

          <div className="mt-8">
            <Button>Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
