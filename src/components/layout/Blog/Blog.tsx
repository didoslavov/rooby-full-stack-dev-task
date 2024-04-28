"use client";

import Heading from "@/components/ui/Heading";
import MainLink from "@/components/ui/MainLink";
import { usePathname } from "next/navigation";

const links = ["Sales", "Marketing", "Service", "Product", "News"];

function Blog() {
  const pathname = usePathname();

  return (
    <div className="col-start-1 col-end-13 grid max-w-[1440px] grid-cols-12 gap-x-[30px] overflow-hidden bg-main-grey-100 pt-8 lg:pt-[72px]">
      <div className="col-span-full row-start-1 mb-7 grid grid-cols-subgrid justify-between gap-y-24">
        <Heading className="col-start-2 col-end-13 lg:col-end-8 lg:text-[64px]">
          <h1 className="lg:leading-[74px] lg:-tracking-[0.89px]">
            News and insights{" "}
            <span className="text-main-grey-700">from our experts</span>
          </h1>
        </Heading>
        <ul className="col-start-2 row-start-2 flex gap-10 text-nowrap">
          <MainLink
            link="/blog"
            plane
            className={`${pathname === "/blog" ? "border-b-2 border-main-green text-black" : "text-main-grey-600"}`}
          >
            All articles
          </MainLink>
          {links.map((l, i) => (
            <MainLink
              link={
                l.split(" ").length > 1
                  ? `/blog/${l.split(" ").join("-").toLowerCase()}`
                  : `/blog/${l.split(" ")[0].toLowerCase()}`
              }
              className={`${pathname.includes(`${l.split(" ")[0].toLowerCase()}`) ? "border-b-2 border-main-green text-black" : "text-main-grey-600"}`}
              plane
              key={i}
            >
              {l}
            </MainLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Blog;
