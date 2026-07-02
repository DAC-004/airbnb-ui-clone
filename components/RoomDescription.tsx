"use client";

import { useState } from "react";

type RoomDescriptionProps = {
  description: string;
};

const RoomDescription = ({ description }: RoomDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = description.length > 160;
  const displayText =
    isExpanded || !isLong ? description : `${description.slice(0, 160)}...`;

  return (
    <section className="border-b border-neutral-200 py-6">
      <p className="text-base leading-relaxed text-neutral-700">{displayText}</p>
      {isLong && (
        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          className="mt-2 text-sm font-semibold text-neutral-900 underline"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </section>
  );
};

export default RoomDescription;
