import Button from "./Button";

export default function LocationOnMap() {
  const address = "800 S Gay St, Knoxville, TN 37929";

  const encodedAddress = encodeURIComponent(address);

  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section id="location" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Location</h2>

        <div className="bg-white shadow rounded-2xl overflow-hidden">
          <iframe
            title="clinic-map"
            src={`https://maps.google.com/maps?q=${encodedAddress}&z=15&iwloc=B&output=embed`}
            className="w-full h-[350px]"
            loading="lazy"
          />
        </div>

        <div className="mt-8 flex justify-center">
          <a href={mapLink} target="_blank" rel="noreferrer">
            <Button>Directions</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
