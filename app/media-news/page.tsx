import type { Metadata } from "next";
import { Suspense } from "react";
import MediaNewsList from "@/components/media/MediaNewsList";
import PreFooterCTA from "@/components/layout/PreFooterCTA";

export const metadata: Metadata = {
  title: "Media & News — El Alsson International Schools",
  description:
    "Stay connected to the rhythm of Alsson. Academic milestones, arts performances, sports competitions, and community gatherings.",
};

export default function MediaNewsPage() {
  return (
    <div className="flex flex-col">
      <Suspense>
        <MediaNewsList />
      </Suspense>
      <PreFooterCTA />
    </div>
  );
}
