const AGENCY_URL = "https://www.pinexadigital.com";

export default function DemoBanner() {
  return (
    <div className="bg-sky-700">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-4 py-2 text-center text-xs font-medium sm:text-sm">
        <span className="text-sky-100">This is a demo website built by Pinexa Digital.</span>
        <a
          href={`${AGENCY_URL}/contact?ref=clinic-demo`}
          className="font-bold text-paper underline underline-offset-2 transition-colors hover:text-sky-100"
        >
          Get a website like this →
        </a>
      </div>
    </div>
  );
}
