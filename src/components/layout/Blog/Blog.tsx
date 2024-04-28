"use client";

import Heading from "@/components/ui/Heading";
import MainLink from "@/components/ui/MainLink";
import { usePathname } from "next/navigation";

const links = ["Sales", "Marketing", "Service", "Product", "News"];

function Blog() {
  const pathname = usePathname();

  return (
    <div className="col-start-1 col-end-13 grid max-w-[1440px] grid-cols-12 gap-x-[30px] overflow-hidden bg-main-grey-100 pt-8 lg:pt-[72px]">
      <div className="col-span-full row-start-1 mb-7 grid grid-cols-subgrid gap-y-7 sm:gap-y-14 lg:gap-y-24">
        <Heading className="col-span-full text-center sm:col-start-2 sm:col-end-13 sm:text-start lg:col-end-8 lg:text-[64px]">
          <h1 className="lg:leading-[74px] lg:-tracking-[0.89px]">
            News and insights{" "}
            <span className="text-main-grey-700">from our experts</span>
          </h1>
        </Heading>
        <ul className="col-span-full row-start-2 flex flex-col gap-2 justify-self-center sm:col-start-2 sm:col-end-12 sm:flex-row sm:gap-10 sm:justify-self-start sm:text-nowrap">
          <MainLink
            link="/blog"
            plane
            className={`${pathname === "/blog" ? "border-b-2 border-main-green text-black" : "text-main-grey-600"} w-fit`}
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
              className={`${pathname.includes(`${l.split(" ")[0].toLowerCase()}`) ? "border-b-2 border-main-green text-black" : "text-main-grey-600"} w-fit`}
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
