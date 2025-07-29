"use client";
import "@/app/(site)/styles/globals.css";
import ClickSpark from "@/components/ClickSpark/ClickSpark";
import { InView } from "@/components/ui/in-view";
import { CardBot } from "@/components/ui/bots";
import { CardWeb } from "@/components/ui/websites";
import { CardPlans } from "@/components/ui/plans";

export default function Products() {
  return (
    <div>
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
              <h4 className="mb-15 text-lg"></h4>
              <CardBot />
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
                <h1 className="titulo text-3xl">WEBSITES</h1>
                <h4 className="mb-15 text-lg"></h4>
              </div>
              <CardWeb />
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
                <h4 className="mb-15 text-lg"></h4>
              </div>
              <CardPlans />
            </div>
          </section>
        </InView>
      </ClickSpark>
    </div>
  );
}
