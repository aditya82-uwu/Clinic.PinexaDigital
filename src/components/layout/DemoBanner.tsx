const AGENCY_URL = "https://www.pinexadigital.com";

export default function DemoBanner() {
  return (
    <div className="bg-teal text-navy">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-4 py-2 text-center text-xs font-medium sm:text-sm">
        <span>This is a demo website by Pinexa Digital.</span>
        <a
          href={`${AGENCY_URL}/contact?ref=clinic-demo`}
          className="font-bold underline underline-offset-2"
        >
          Get a website like this →
        </a>
      </div>
    </div>
  );
}
