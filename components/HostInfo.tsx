import ListingImage from "@/components/ListingImage";
import type { Host } from "@/types/listing";

type HostInfoProps = {
  host: Host;
};

const HostInfo = ({ host }: HostInfoProps) => {
  return (
    <section className="border-b border-neutral-200 py-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-neutral-300 md:h-16 md:w-16">
            <ListingImage
              src={host.avatar}
              alt={`${host.name} profile photo`}
              sizes="64px"
              className="object-cover"
            />
          </div>
          {host.isSuperhost && (
            <span className="absolute -bottom-1 -right-1 rounded-full bg-[#FF385C] px-1.5 py-0.5 text-[10px] font-bold text-white">
              ★
            </span>
          )}
        </div>

        <div className="flex flex-col gap-0.5">
          <p className="font-medium text-neutral-900">
            Hosted by {host.name}
          </p>
          <p className="text-sm text-neutral-500">
            {host.isSuperhost && "Superhost · "}
            {host.yearsHosting}{" "}
            {host.yearsHosting === 1 ? "year" : "years"} hosting
          </p>
        </div>
      </div>
    </section>
  );
};

export default HostInfo;
