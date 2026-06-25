import type { Host } from "@/types/listing";

type HostInfoProps = {
  host: Host;
};

const HostInfo = ({ host }: HostInfoProps) => {
  return (
    <section className="border-b border-neutral-200 py-6">
      <h2 className="mb-4 text-lg font-semibold text-neutral-900 md:text-xl">
        Hosted by {host.name}
      </h2>

      <div className="flex items-center gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-300 text-lg font-semibold text-neutral-600 md:h-16 md:w-16 md:text-xl"
          aria-label={`${host.name} avatar`}
        >
          {host.name.charAt(0)}
        </div>

        <div className="flex flex-col gap-0.5">
          <p className="font-medium text-neutral-900">{host.name}</p>
          <p className="text-sm text-neutral-500">
            {host.yearsHosting}{" "}
            {host.yearsHosting === 1 ? "year" : "years"} hosting
          </p>
        </div>
      </div>
    </section>
  );
};

export default HostInfo;
