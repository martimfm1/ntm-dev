"use client";
import { TextLoop } from "@/components/ui/text-loop";
import { Cursor } from "@/components/ui/cursor";
import { AnimatePresence, motion } from "motion/react";
import { PlusIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import ClickSpark from "@/components/ClickSpark/ClickSpark";
import { InView } from "@/components/ui/in-view";
import "./styles/globals.css";
import { Tilt } from "@/components/ui/tilt";
import Link from "next/link";
import { Cards } from "@/components/ui/cards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
  };
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <SpeedInsights />
      <Analytics />
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        springConfig={{
          bounce: 0.001,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.15,
        }}
        onPositionChange={handlePositionChange}
      >
        <motion.div
          animate={{
            width: isHovering ? 80 : 16,
            height: isHovering ? 32 : 16,
          }}
          className="flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40"
        >
          <AnimatePresence>
            {isHovering ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="inline-flex w-full items-center justify-center"
              >
                <div className="inline-flex items-center text-sm text-white dark:text-black">
                  More <PlusIcon className="ml-1 h-4 w-4" />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </Cursor>

      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <section
            id="home"
            className="flex items-center justify-center min-h-screen px-4 sm:px-6 bg-transparent bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-transparent"
          >
            <div className="text-center w-full max-w-4xl py-10">
              <h4 className="text-slate-400 uppercase tracking-wide text-sm sm:text-lg md:text-xl mb-4 font-semibold">
                By the creators of NTM DEV
              </h4>
              <h1 className="text-slate-200 whitespace-pre-wrap text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 titulo">
                Get your BOT <br />
                <TextLoop
                  className="overflow-y-clip loop font-normal"
                  transition={{
                    type: "spring",
                    stiffness: 900,
                    damping: 80,
                    mass: 10,
                  }}
                  variants={{
                    initial: {
                      y: 20,
                      rotateX: 90,
                      opacity: 0,
                      filter: "blur(4px)",
                    },
                    animate: {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                    },
                    exit: {
                      y: -20,
                      rotateX: -90,
                      opacity: 0,
                      filter: "blur(4px)",
                    },
                  }}
                >
                  <span>In Record Time.</span>
                  <span>With Full Customization.</span>
                  <span>For Any Discord Server.</span>
                  <span>Built By Experts.</span>
                  <span>With Lifetime Support.</span>
                </TextLoop>
              </h1>
              <p className="text-gray-400 text-xs sm:text-base md:text-lg max-w-xl mb-10 px-4 text-center mx-auto">
                Discord bots skillfully designed and crafted by NTM DEV
                creators. The perfect team to develop your BOT.
              </p>
            </div>
          </section>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <section
            id="bots"
            className="flex justify-center gap-6 relative pb-20 pt-20 pl-10 pr-10"
          >
            <div className="text-amber-50 text-center">
              <h2 className="titulo mb-2.5 text-3xl">Discover our BOTs</h2>
              <h4 className="mb-15 text-lg">
                Below you can see our bots and choose the one that best suits
                your needs. <br />
                You can also choose one of our plans or products in{" "}
                <Button className="text-amber-50 text-lg p-0" variant="link">
                  <Link href="/products" className="cursor-none">
                    products
                  </Link>
                </Button>
              </h4>

              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 place-items-center"
                ref={targetRef}
              >
                {[
                  {
                    title: "SUGGESTION",
                    image: "./suggestion.png",
                    description:
                      "Ideal for efficiently managing suggestions and facilitating decision-making.",
                    extra: "1€ /month *",
                    link: "https://discord.com/channels/1290074291047632919/1312913068438716456",
                  },
                  {
                    title: "CUSTOM COMMANDS",
                    image: "./custom-commands.png",
                    description:
                      "For those who want to create exclusive custom commands, offering more control and flexibility.",
                    extra: "3€ /month *",
                    link: "https://discord.com/channels/1290074291047632919/1312913249758351370",
                  },
                  {
                    title: "ANTI-LINKS",
                    image: "./anti-links.png",
                    description:
                      "Protect your server from unwanted and potentially dangerous links, maintaining security and integrity.",
                    extra: "2€ /month *",
                    link: "https://discord.com/channels/1290074291047632919/1312904181446738123",
                  },
                ].map((card, i) => (
                  <Link
                    key={i}
                    href={card.link}
                    className="hover:scale-[1.01] transition-transform duration-200 cursor-none"
                  >
                    <Tilt rotationFactor={8} isRevese key={1}>
                      <div className="border rounded-2xl h-[340px] md:h-[360px] flex max-w-[250px] md:max-w-[270px] flex-col overflow-hidden border-neutral-400/60 bg-transparent dark:bg-zinc-900">
                        <div className="rounded-full flex justify-center items-center mt-4 mb-2 h-32">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-28 md:w-36"
                          />
                        </div>
                        <div className="p-2 text-center">
                          <h1 className="titulo text-amber-50 dark:text-zinc-50 mb-2">
                            {card.title}
                          </h1>
                          {card.extra && (
                            <h4 className="inter text-xs">{card.extra}</h4>
                          )}
                          <p className="text-zinc-700 dark:text-zinc-400 text-sm ml-2 mr-0.5">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </Tilt>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <section id="reviews" className="pb-20 pt-20">
            <div className="text-amber-50 text-center p-10">
              <h2 className="titulo mb-2.5 text-3xl">See our reviews</h2>
              <h4 className="mb-6 text-lg">
                Below you can check the reviews of some of our customers.
              </h4>
            </div>
            <div>
              <Cards />
            </div>
          </section>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <section
            id="faq"
            className="flex justify-center pt-20 pb-20 pl-10 pr-10"
          >
            <div className="text-amber-50 text-center">
              <h2 className="titulo mb-2.5 text-3xl">
                Do you have any question?
              </h2>
              <h4 className="mb-6 text-lg">
                Below, you can see the most frequently asked questions.
              </h4>
              <div className="w-full min-w-lg sm:max-w-lg md:max-w-xl lg:max-w-3xl border border-neutral-400/50 px-4 sm:px-6 py-5 rounded-3xl mx-auto">

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How can I buy a bot for Discord?
                    </AccordionTrigger>
                    <AccordionContent>
                      Purchases can be made directly through our Discord. Just
                      select the desired bot, open a TICKET, provide your
                      request, and follow the instructions!
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Is it possible to request a refund after purchase?
                    </AccordionTrigger>
                    <AccordionContent>
                      We do not offer refunds after purchase, but we guarantee
                      full support to resolve any issues you may encounter.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Can I resell or distribute the purchased bots?
                    </AccordionTrigger>
                    <AccordionContent>
                      Reselling or distributing the purchased bots is not
                      allowed, according to the agreed terms of use.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      What is the time frame for maintaining the budget and the
                      amount paid?
                    </AccordionTrigger>
                    <AccordionContent>
                      What is the time frame for maintaining the budget and the
                      amount paid?
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      What are the copyright rights to the purchased bots?
                    </AccordionTrigger>
                    <AccordionContent>
                      Copyrights are reserved for the developer, but you will
                      have full usage rights as per the contract terms.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </InView>
        <footer className="bg-stone-950/90 border-t border-white/[0.08]">
          <div
            className="flex items-center text-center justify-center 
                  h-16 sm:h-14 md:h-16 lg:h-20 
                  w-full m-3 sm:m-2 md:m-3 lg:m-6"
          >
            <TextRevealCard
              text="© 2025 NTM DEV. All rights reserved."
              revealText="One Team. All You Need."
            />
          </div>
        </footer>
      </ClickSpark>
    </div>
  );
}
