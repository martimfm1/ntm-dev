"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function CardBot() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-auto z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-amber-50 rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[600px]  h-full md:h-fit md:max-h-auto  flex flex-col bg-neutral-200 dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 font-bold text-xl pb-0 titulo"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-stone-900 text-amber-50"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
        <ul className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-4">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col  hover:bg-neutral-800/90 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col  w-full">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-60 w-full  rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex justify-center items-center flex-col">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-amber-50 dark:text-neutral-400 text-center md:text-left text-base"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "CUSTOM COMMANDS BOT",
    title: "",
    src: "/products/custom_commands.png",
    ctaText: "Buy",
    ctaLink:
      "https://discord.com/channels/1290074291047632919/1312913249758351370",
    content: () => {
      return (
        <p>
          Custom Commands is a unique product for anyone looking to add
          personality and functionality to their Discord server! With it, you
          can customize commands entirely to your liking, adapting responses and
          actions to meet the needs of your community.
        </p>
      );
    },
  },
  {
    description: "GIVEAWAY BOT",
    title: "",
    src: "/products/giveaway.png",
    ctaText: "Buy",
    ctaLink:
      "https://discord.com/channels/1290074291047632919/1305991269859721246",
    content: () => {
      return (
        <p>
          Panel for configuring the draw, including number of winners, time, and
          name of the product to be drawn. It also has a configuration panel
          after the draw has started, allowing you to change the number of
          winners, end the draw ahead of time and delete the draw.
        </p>
      );
    },
  },

  {
    description: "SUGGESTION BOT",
    title: "",
    src: "/products/suggestion.png",
    ctaText: "Buy",
    ctaLink:
      "https://discord.com/channels/1290074291047632919/1312913068438716456",
    content: () => {
      return (
        <p>
          Complete suggestion system with 2 choice buttons, informing the % of
          votes for each side. Also open a debate thread to avoid polluting the
          channel.
        </p>
      );
    },
  },
  {
    description: "ANTI-LINKS BOT",
    title: "",
    src: "products/anti_links.png",
    ctaText: "Buy",
    ctaLink:
      "https://discord.com/channels/1290074291047632919/1312904181446738123",
    content: () => {
      return (
        <p>
          System that blocks any and all types of links from members who
          disclose them without permission, has a panel to configure the
          positions that have access to sending links and a toogle to turn the
          system on and off.
        </p>
      );
    },
  },
];
