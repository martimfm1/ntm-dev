"use client";
import { TextLoop } from "@/components/ui/text-loop";
import { Button } from "@/components/ui/button";
import ClickSpark from "@/components/ClickSpark/ClickSpark";
import { InView } from "@/components/ui/in-view";
import "./styles/globals.css";
import { Prices } from "@/components/cards";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
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
              <h4 className="text-slate-400 uppercase tracking-wide text-base sm:text-lg md:text-xl mb-4 font-semibold">
                By the creators of NTM DEV
              </h4>
              <h1 className="text-slate-200 whitespace-pre-wrap text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 titulo">
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
              <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10">
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
          <Prices />
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <section id="reviews" className="flex justify-center p-20 gap-6">
            <div className="text-amber-50 text-center">
              <h2 className="titulo mb-2.5 text-3xl">See our reviews</h2>
              <h4 className="mb-6 text-lg">
                Below you can check the reviews of some of our customers.{" "}
              </h4>
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
          <section id="questions"></section>
        </InView>
      </ClickSpark>
    </div>
  );
}
