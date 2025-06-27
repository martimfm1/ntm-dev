"use client";
import "@/app/(site)/styles/globals.css";
import { Cursor } from "@/components/ui/cursor";
import { AnimatePresence, motion } from "motion/react";
import { PlusIcon } from "lucide-react";
import { useRef, useState } from "react";
import ClickSpark from "@/components/ClickSpark/ClickSpark";
import { InView } from "@/components/ui/in-view";
import { Tilt } from "@/components/ui/tilt";
import Link from "next/link";

export default function Products() {
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
    <div>
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
          <section className="mt-15 flex justify-center p-20 gap-6 relative text-amber-50">
            <div className="text-amber-50 text-center">
              <h2 className="titulo mb-2.5 text-3xl">DISCORD BOTS</h2>
              <h4 className="mb-15 text-lg">

              </h4>

              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
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
                                    {
                    title: "GIVEAWAY",
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
                        <div className="border rounded-2xl h-82 flex max-w-[270px] flex-col overflow-hidden border-neutral-400/50 bg-transparent dark:border-zinc-50/10 dark:bg-zinc-900">
                          <div className="rounded-full flex justify-center items-center mt-4 mb-2 h-32">
                            <img
                              src={card.image}
                              alt={card.title}
                              className="w-36"
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
          <section className="flex justify-center p-20 gap-6 relative text-amber-50">
            <div>
              <div>
                <h1 className="titulo text-2xl">WEBSITES</h1>
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
          <section className="flex justify-center p-20 gap-6 relative text-amber-50">
            <div>
              <div>
                <h1 className="titulo text-2xl">SPECIAL PACKS</h1>
              </div>
            </div>
          </section>
        </InView>
      </ClickSpark>
    </div>
  );
}
