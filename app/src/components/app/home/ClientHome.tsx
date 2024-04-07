"use client";

import { PlaylistBeatsSection } from "@/components/sections/beatsPlaylists/PlaylistBeatsSection";
import { mainPlayListName } from "@/constants";
import { $Beats } from "@/stores/beats";
import { useStore } from "@nanostores/react";

export const ClientHome = () => {
  const beats = useStore($Beats);
  const beatsDestacados = beats.filter((beat) => beat.featured);
  return (
    <section className="flex flex-col gap-16">
      <div className="mb-[10rem]">
        <h2 className="font-milker text-3xl mb-4">Destacados</h2>
        <PlaylistBeatsSection
          beats={beatsDestacados}
          PlayListName="Destacados"
        />
      </div>
      <div>
        <h2 className="font-milker text-3xl mb-4">Todos los Beats</h2>
        <PlaylistBeatsSection beats={beats} PlayListName={mainPlayListName} />
      </div>
    </section>
  );
};
