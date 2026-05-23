import Button from "./Button";

export default function LLocation() {
  const address = "800 S Gay St, Knoxville, TN 37929";

  const encodedAddress = encodeURIComponent(address);

  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section id="ocation">
      <h2 className="text-4xl font-bold text-center mb-8">Location</h2>

      <div className="rounded-3xl overflow-hidden shadow">
        <iframe
          title="clinic-map"
          src={`https://maps.google.com/maps?q=${encodedAddress}&z=15&iwloc=B&output=embed`}
          className="w-full h-[450px]"
          loading="lazy"
        />
      </div>

      <div className="mt-8 flex justify-center">
        <a href={mapLink} target="_blank" rel="noreferrer">
          <Button>Directions</Button>
        </a>
      </div>
    </section>
  );
}
