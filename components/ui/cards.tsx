"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Cards() {
  return (
    <div className="pb-10 rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      '"I have no words to express my satisfaction with the work done! I thank you immensely for the excellent service provided. Exceptional quality and top-notch service!"',
    name: "+SHOP",
    title: "",
  },
  {
    quote:
      '"The bot developed exceeded all my expectations! It responds quickly and was created with all the desired features. Exceptional service!"',
    name: "Smurf_Verde",
    title: "",
  },
  {
    quote: '"The bot is excellent, with impeccable setup and clean design. Attentive and helpful service. Highly recommend!"',
    name: "ardropo",
    title: "",
  },
  {
    quote:
      '"The result is impeccable. You can buy without fear!"',
    name: "Igris",
    title: "",
  },
];
