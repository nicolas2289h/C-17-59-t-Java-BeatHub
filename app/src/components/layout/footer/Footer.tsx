"use client";
import { $SelectedBeat } from "@/stores/beats";
import { useStore } from "@nanostores/react";
export const Footer = () => {
  const selectedBeat = useStore($SelectedBeat);
  return (
    <footer
      className={`[grid-area-footer] flex items-center justify-center p-1 ${
        selectedBeat && "h-[3rem]"
      } bg-secundario text-primario`}
    >
      <p>© 2024 Beat Hub</p>
    </footer>
  );
};
