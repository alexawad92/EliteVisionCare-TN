import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";

export default function PrepareVisit() {
  const [open, setOpen] = useState(null);

  const faq = [
    {
      question: "Do you accept vision insurance?",
      answer:
        "No. EliteVisionCare currently does not participate with vision insurance plans.",
    },

    {
      question: "Do you accept medical insurance?",
      answer:
        "At this time we are not participating with medical insurance plans.",
    },

    {
      question: "What should I bring?",
      answer:
        "Please bring identification, glasses or contacts, and completed forms.",
    },

    {
      question: "Are appointments required?",
      answer: "Yes. Appointments are required before seeing the provider.",
    },
    {
      question: "How long will my glasses take?",
      answer:
        "Most glasses are ready in 10–14 days, and we will call you the moment they are ready for pickup. You will also see your estimated ready date printed right on your receipt, so you know exactly what to expect.",
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">
          Prepare For Your Visit
        </h1>

        <p className="text-center text-gray-600 mb-16">
          Please complete forms before arriving.
        </p>

        <div className="bg-white rounded-3xl shadow p-10 mb-16">
          <h2 className="text-3xl font-bold mb-6">Patient Forms</h2>

          <div className="flex flex-col md:flex-row gap-6">
            <a href="/MedicalRecordsReleaseForm2025.docx" download>
              <Button>Download Records Release & Obtain Form (docx)</Button>
            </a>

            <a href="/Notice-of-Privacy-Practice.docx" download>
              <Button>Download Notice of Privacy Practice (docx)</Button>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow p-10">
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          {faq.map((item, index) => (
            <div key={index} className="border-b py-5">
              <button
                className="w-full flex justify-between text-left"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span className="font-semibold">{item.question}</span>

                <ChevronDown />
              </button>

              {open === index && (
                <p className="mt-4 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
