"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import BackToCatalog from "@/components/BackToCatalog";
import RoomDetail from "@/components/RoomDetail";

const RoomPage = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
        <BackToCatalog />
        <RoomDetail key={id} id={id} />
      </main>
    </div>
  );
};

export default RoomPage;
