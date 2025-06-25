"use client";
import { useRef, useState, useEffect } from "react";
import { Cursor } from "@/components/ui/cursor";
import { AnimatePresence, motion } from "motion/react";
import { PlusIcon } from "lucide-react";
import { Tilt } from "@/components/ui/tilt";
import { Button } from "./ui/button";

export function Prices() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
    setMousePos({ x, y });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      handlePositionChange(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="bots" className="flex justify-center p-20 gap-6">
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
            width: isHovering ? 70 : 16,
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
      <div className="text-amber-50 text-center">
        <h2 className="titulo mb-2.5 text-3xl">Discover our BOTs</h2>
        <h4 className="mb-15 text-lg">
          Below you can see our bots and choose the one that best suits your
          needs.
          <br />
          You can also choose one of our plans or products in{" "}
          <Button className="text-amber-50 text-lg p-0" variant="link">
            <a href="/products">products</a>
          </Button>
        </h4>
        <div className="grid grid-cols-3 gap-6">
          <Tilt rotationFactor={8} isRevese>
            <div
              ref={targetRef}
              className="border rounded-2xl h-82 flex max-w-[270px] flex-col overflow-hidden border-neutral-400/50 bg-transparent dark:border-zinc-50/10 dark:bg-zinc-900"
            >
              <div className="rounded-full flex justify-center items-center mt-4 mb-2 h-32">
                <img
                  src="./suggestion.png"
                  alt="Profile Picture"
                  className="w-36"
                />
              </div>
              <div className="p-2 text-center">
                <h1 className="titulo text-amber-50 dark:text-zinc-50 mb-2">
                  SUGGESTION
                </h1>
                <p className="text-zinc-700 dark:text-zinc-400 text-sm ml-2 mr-0.5">
                  Ideal for efficiently managing suggestions and facilitating
                  decision-making.
                </p>
              </div>
            </div>
          </Tilt>
          <Tilt rotationFactor={8} isRevese>
            <div
              ref={targetRef}
              className="border rounded-2xl h-82 flex max-w-[270px] flex-col overflow-hidden border-neutral-400/50 bg-transparent dark:border-zinc-50/10 dark:bg-zinc-900"
            >
              <div className="rounded-full flex justify-center items-center mt-4 mb-2 h-32">
                <img
                  src="./custom-commands.png"
                  alt="Profile Picture"
                  className="w-36"
                />
              </div>
              <div className="p-2 text-center">
                <h1 className="titulo text-amber-50 dark:text-zinc-50 mb-2">
                  CUSTOM COMMANDS
                </h1>
                <p className="text-zinc-700 dark:text-zinc-400 text-sm ml-2 mr-0.5">
                  For those who want to create exclusive custom commands,
                  offering more control and flexibility.
                </p>
              </div>
            </div>
          </Tilt>
          <Tilt rotationFactor={8} isRevese>
            <div className="border rounded-2xl h-82 flex max-w-[270px] flex-col overflow-hidden border-neutral-400/50 bg-transparent dark:border-zinc-50/10 dark:bg-zinc-900">
              <div className="rounded-full flex justify-center items-center mt-4 mb-2 h-32">
                <img
                  src="./anti-links.png"
                  alt="Profile Picture"
                  className="w-36"
                />
              </div>
              <div className="p-2 text-center">
                <h1 className="titulo text-amber-50 dark:text-zinc-50 mb-2">
                  ANTI-LINKS
                </h1>
                <h4 className="inter text-xs">2€ /month *</h4>
                <p className="text-zinc-700 dark:text-zinc-400 text-sm ml-2 mr-0.5">
                  Protect your server from unwanted and potentially dangerous
                  links, maintaining security and integrity.
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
